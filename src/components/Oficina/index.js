import React, { Component } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Utils from "../../utils";
import contractAddress from "../Contract";

export default class EarnTron extends Component {
  constructor(props) {
    super(props);

    this.state = {
      direccion: "",
      link2: "#",
      link: "Haz una inversión para obtener el LINK de referido",
      registered: false,
      balanceRef: 0,
      totalRef: 0,
      invested: 0,
      paidAt: 0,
      my: 0,
      withdrawn: 0

    };

    this.Investors = this.Investors.bind(this);
    this.Link = this.Link.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  async componentDidMount() {
    await Utils.setContract(window.tronWeb, contractAddress);
    setInterval(() => this.Investors(),1000);
    setInterval(() => this.Link(),1000);
  };

  async Link() {
    const {registered} = this.state;

    if(registered){

      let loc = document.location.href;
      if(loc.indexOf('?')>0){
        loc = loc.split('?')[0]
      }
      let mydireccion = await window.tronWeb.trx.getAccount();
      mydireccion = window.tronWeb.address.fromHex(mydireccion.address)
      mydireccion = loc+'?ref='+mydireccion;
      this.setState({
        link2: mydireccion,
        link: "Presiona COPIAR para obtener el LINK de referido"
      });
    }else{
      this.setState({
        link2: "https://earntron.ml/",
        link: "Haz una inversión para obtener el LINK de referido"
      });
    }
  }
    

  async Investors() {

    let direccion = await window.tronWeb.trx.getAccount();
    let esto = await Utils.contract.investors(direccion.address).call();
    let My = await Utils.contract.MYwithdrawable().call();
    //console.log(esto);
    //console.log(My);
    this.setState({
      direccion: window.tronWeb.address.fromHex(direccion.address),
      registered: esto.registered,
      balanceRef: parseInt(esto.balanceRef._hex)/1000000,
      totalRef: parseInt(esto.totalRef._hex)/1000000,
      invested: parseInt(esto.invested._hex)/1000000,
      paidAt: parseInt(esto.paidAt._hex)/1000000,
      my: parseInt(My.amount._hex)/1000000,
      withdrawn: parseInt(esto.withdrawn._hex)/1000000
    });

  };

  async withdraw(){

    const { balanceRef, my} = this.state;

    var saldo = balanceRef+my;

    var balanceCONTRACT = await window.tronWeb.trx.getBalance(contractAddress);
    balanceCONTRACT = balanceCONTRACT/1000000;

    //console.log(balanceCONTRACT);

    var balanceInTRX = await window.tronWeb.trx.getBalance(); //number
    balanceInTRX = balanceInTRX/1000000;

    var direccion = await window.tronWeb.trx.getAccount();
    var sacar = await Utils.contract.withdrawable(direccion.address).call();
    sacar = parseInt(sacar.amount._hex)/1000000;

    //console.log(sacar);

    if (saldo >= 200) {

      if ( balanceCONTRACT >= sacar ) {   

        if (balanceInTRX >= 40 ) {

          await Utils.contract.withdraw().send();

        }else{
          window.alert("En tu wallet debe haber almenos 40 TRX para fee de transferencia");
        }
      }else{
        window.alert("El contrato no tiene suficiente TRX intenta nuevamente mas tarde");
      }

    }else{
      window.alert("El minimo para retirar es 200 TRX");

    }

    
  };


  render() {
    const { balanceRef, totalRef, invested,  withdrawn , my, direccion, link, link2} = this.state;

    return (
      
      <div className="container">

        <header className="section-header">
          <h3>My Office:</h3>
          <p style={{'textAlign': 'center','maxWidth': '90%'}}>{direccion}<br></br>
          <a href={link2}>{link}</a><br></br>
          <CopyToClipboard text={link2}>
            <button type="button" className="btn btn-info">COPIAR</button>
          </CopyToClipboard>
          </p>
          
        </header>

        <div className="row">

          <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-analytics-outline" style={{'color': '#ff689b'}}></i></div>
              <h4 className="title"><a href="#services">{invested} TRX</a></h4>
              <p className="description">Total invertido</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-bookmarks-outline" style={{'color': '#e9bf06'}}></i></div>
              <h4 className="title"><a href="#services">{totalRef} TRX</a></h4>
              <p className="description">Total ganancias por referidos</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-paper-outline" style={{'color': '#3fcdc7'}}></i></div>
              <p className="description">Mi balance</p>
              <h4 className="title"><a href="#services">{my} TRX</a></h4>
              
            </div>
          </div>
          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-paper-outline" style={{'color': '#3fcdc7'}}></i></div>
              <p className="description">Balance por referidos</p>
              <h4 className="title"><a href="#services"> {balanceRef} TRX</a></h4>
              
            </div>
          </div>

          <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-speedometer-outline" style={{'color':'#41cf2e'}}></i></div>
              <h4 className="title"><a href="#services">Disponible</a></h4>
              <p className="description">
                {balanceRef+my} TRX 
                <br /><button type="button" className="btn btn-info" onClick={() => this.withdraw()}>Retirar</button>

              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-clock-outline" style={{'color': '#4680ff'}}></i></div>
              <h4 className="title"><a href="#services">Retirado</a></h4>
              <p className="description">{withdrawn} TRX</p>
            </div>
          </div>

        </div>

      </div>
    



    );
  }
}
