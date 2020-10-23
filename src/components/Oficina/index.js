import React, { Component } from "react";
import Utils from "../../utils";


/// La direccion de su contrato acá ///////////////////////////////////
const contractAddress = "TQdVp5TijWLXZc5mGNiM1Sc9qGu5QcnFB4";
///////////////////////////////////////////////////////////////////////

export default class EarnTron extends Component {
  constructor(props) {
    super(props);

    this.state = {
      direccion: "",
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
        link: mydireccion,
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
    await Utils.contract.withdraw().send()
  };

  render() {
    const { balanceRef, totalRef, invested,  withdrawn , my, direccion, link} = this.state;

    return (
      
      <div className="container">

        <header className="section-header">
          <h3>My Office: {direccion}</h3><br></br>
          <a href={link}>{link}</a>
        </header>

        <div className="row">

          <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-analytics-outline" style={{color: '#ff689b'}}></i></div>
              <h4 className="title"><a href="#">{invested} TRX</a></h4>
              <p className="description">Total invertido</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-bookmarks-outline" style={{color: '#e9bf06'}}></i></div>
              <h4 className="title"><a href="">{totalRef} TRX</a></h4>
              <p className="description">Total ganancias por referidos</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-paper-outline" style={{color: '#3fcdc7'}}></i></div>
              <p className="description">Mi balance</p>
              <h4 className="title"><a href="">{my} TRX</a></h4>
              
            </div>
          </div>
          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-paper-outline" style={{color: '#3fcdc7'}}></i></div>
              <p className="description">Balance por referidos</p>
              <h4 className="title"><a href=""> {balanceRef} TRX</a></h4>
              
            </div>
          </div>

          <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-speedometer-outline" style={{color:'#41cf2e'}}></i></div>
              <h4 className="title"><a href="">Disponible</a></h4>
              <p className="description">{my} TRX</p>
              <p><button type="button" className="btn btn-info" onClick={() => this.withdraw()}>Retirar {my} TRX</button></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="ion-ios-clock-outline" style={{color: '#4680ff'}}></i></div>
              <h4 className="title"><a href="">Retirado</a></h4>
              <p className="description">{withdrawn} TRX</p>
            </div>
          </div>

        </div>

      </div>
    



    );
  }
}