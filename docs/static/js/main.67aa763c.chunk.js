(this["webpackJsonpcrowdfunding-earntron"]=this["webpackJsonpcrowdfunding-earntron"]||[]).push([[0],{190:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(52),c=a.n(s),o=a(2),l=a.n(o),i=a(3),d=a(53),m=a.n(d);var u={tronWeb:!1,contract:!1,setTronWeb(e){this.tronWeb=e},setContract(e,t){var a=this;return Object(i.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.contract().at(t);case 2:a.contract=n.sent;case 3:case"end":return n.stop()}}),n)})))()}};a(190);var w="TV1R4Vqw3eiabXfaYB42YAeadXYSzXwcwt";class p extends n.Component{constructor(e){super(e),this.deposit=this.deposit.bind(this)}componentDidMount(){return Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.setContract(window.tronWeb,w);case 2:case"end":return e.stop()}}),e)})))()}deposit(){return Object(i.a)(l.a.mark((function e(){var t,a,n,r,s,c,o,i,d,m,w,p,f,b,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getBalance();case 2:if(t=e.sent,a=window.tronWeb.fromSun(t),a=parseFloat(a),n=document.getElementById("amount").value,n=parseFloat(n),console.log(a),console.log(n+40),!(a>=n+40)){e.next=43;break}if(!((r=document.location.href).indexOf("?")>0)){e.next=22;break}for(s=r.split("?")[1],c=s.split("&"),o={},i=0,d=c.length;i<d;i++)m=c[i].split("="),o[m[0]]=unescape(decodeURI(m[1]));return e.next=18,u.contract.investors(o.ref).call();case 18:e.sent.registered?document.getElementById("sponsor").value=o.ref:document.getElementById("sponsor").value="TXkyzBxJqjYj18Kg48rLv7ZEmx8ayptPoF",e.next=23;break;case 22:document.getElementById("sponsor").value="TXkyzBxJqjYj18Kg48rLv7ZEmx8ayptPoF";case 23:return w=0,p=document.getElementById("sponsor").value,e.next=27,window.tronWeb.trx.getAccount();case 27:return f=e.sent,b=f.address,b=window.tronWeb.address.fromHex(b),e.next=32,u.contract.investors(b).call();case 32:if((h=e.sent).registered&&(p=h.sponsor),document.getElementById("amount").value="",!(n>=200)){e.next=39;break}return e.abrupt("return",u.contract.deposit(w,p).send({shouldPollResponse:!0,callValue:1e6*n}));case 39:window.alert("El minimo de inversi\xf3n es 200 TRX"),document.getElementById("amount").value=200;case 41:e.next=45;break;case 43:window.alert("Debes dejar 40 TRX libres en tu cuenta para hacer la transacci\xf3n"),document.getElementById("amount").value=n>a?a-40:n-40;case 45:case"end":return e.stop()}}),e)})))()}render(){return r.a.createElement("div",{className:"card wow bounceInUp"},r.a.createElement("i",{className:"fa fa-diamond"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Gold Premium"),r.a.createElement("h6",{className:"card-text"},"Return: ",r.a.createElement("strong",null,"200%"),r.a.createElement("br",null),r.a.createElement("strong",null,"2%")," per day",r.a.createElement("br",null)),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"number",className:"form-control",id:"amount",placeholder:"Min. 200 TRX"}),r.a.createElement("p",{className:"card-text"},"Debes tener ~40 TRX para hacer la transacci\xf3n"))),r.a.createElement("button",{type:"button",class:"btn btn-light",onClick:()=>this.deposit()},"Invertir")))}}class f extends n.Component{constructor(e){super(e),this.state={totalInvestors:0,totalInvested:0,totalRefRewards:0},this.totalInvestors=this.totalInvestors.bind(this)}componentDidMount(){var e=this;return Object(i.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.setContract(window.tronWeb,w);case 2:setInterval(()=>e.totalInvestors(),1e3);case 3:case"end":return t.stop()}}),t)})))()}totalInvestors(){var e=this;return Object(i.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.contract.setstate().call();case 2:a=t.sent,e.setState({totalInvestors:parseInt(a.Investors._hex),totalInvested:parseInt(a.Invested._hex)/1e6,totalRefRewards:parseInt(a.RefRewards._hex)/1e6});case 4:case"end":return t.stop()}}),t)})))()}render(){const e=this.state,t=e.totalInvestors,a=e.totalInvested,n=e.totalRefRewards;return r.a.createElement("div",{className:"row counters"},r.a.createElement("div",{className:"col-lg-4 col-12 text-center"},r.a.createElement("span",{"data-toggle":"counter-up"},t),r.a.createElement("p",null,"Inversores Globales")),r.a.createElement("div",{className:"col-lg-4 col-12 text-center"},r.a.createElement("span",{"data-toggle":"counter-up"},a.toFixed(2)," TRX"),r.a.createElement("p",null,"Invertido Global")),r.a.createElement("div",{className:"col-lg-4 col-12 text-center"},r.a.createElement("span",{"data-toggle":"counter-up"},n.toFixed(2)," TRX"),r.a.createElement("p",null,"Recompensas  Globales Referidos")))}}var b=a(54);class h extends n.Component{constructor(e){super(e),this.state={direccion:"",link2:"#",link:"Haz una inversi\xf3n para obtener el LINK de referido",registered:!1,balanceRef:0,totalRef:0,invested:0,paidAt:0,my:0,withdrawn:0},this.Investors=this.Investors.bind(this),this.Link=this.Link.bind(this),this.withdraw=this.withdraw.bind(this)}componentDidMount(){var e=this;return Object(i.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.setContract(window.tronWeb,w);case 2:setInterval(()=>e.Investors(),1e3),setInterval(()=>e.Link(),1e3);case 4:case"end":return t.stop()}}),t)})))()}Link(){var e=this;return Object(i.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.registered){t.next=12;break}return(a=document.location.href).indexOf("?")>0&&(a=a.split("?")[0]),t.next=6,window.tronWeb.trx.getAccount();case 6:n=t.sent,n=window.tronWeb.address.fromHex(n.address),n=a+"?ref="+n,e.setState({link2:n,link:"Presiona COPIAR para obtener el LINK de referido"}),t.next=13;break;case 12:e.setState({link2:"https://earntron.ml/",link:"Haz una inversi\xf3n para obtener el LINK de referido"});case 13:case"end":return t.stop()}}),t)})))()}Investors(){var e=this;return Object(i.a)(l.a.mark((function t(){var a,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getAccount();case 2:return a=t.sent,t.next=5,u.contract.investors(a.address).call();case 5:return n=t.sent,t.next=8,u.contract.MYwithdrawable().call();case 8:r=t.sent,e.setState({direccion:window.tronWeb.address.fromHex(a.address),registered:n.registered,balanceRef:parseInt(n.balanceRef._hex)/1e6,totalRef:parseInt(n.totalRef._hex)/1e6,invested:parseInt(n.invested._hex)/1e6,paidAt:parseInt(n.paidAt._hex)/1e6,my:parseInt(r.amount._hex)/1e6,withdrawn:parseInt(n.withdrawn._hex)/1e6});case 10:case"end":return t.stop()}}),t)})))()}withdraw(){var e=this;return Object(i.a)(l.a.mark((function t(){var a,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state,n=a.balanceRef,r=a.my,!(n+r>=200)){t.next=7;break}return t.next=5,u.contract.withdraw().send();case 5:t.next=8;break;case 7:window.alert("The minimum withdrawal is 200 TRX");case 8:case"end":return t.stop()}}),t)})))()}render(){const e=this.state,t=e.balanceRef,a=e.totalRef,n=e.invested,s=e.withdrawn,c=e.my,o=e.direccion,l=e.link,i=e.link2;return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"section-header"},r.a.createElement("h3",null,"My Office:"),r.a.createElement("p",{style:{"text-align":"center","max-width":"90%"}},o,r.a.createElement("br",null),r.a.createElement("a",{href:i},l),r.a.createElement("br",null),r.a.createElement(b.CopyToClipboard,{text:i},r.a.createElement("button",{type:"button",className:"btn btn-info"},"COPIAR")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-analytics-outline",style:{color:"#ff689b"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},n," TRX")),r.a.createElement("p",{className:"description"},"Total invertido"))),r.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-bookmarks-outline",style:{color:"#e9bf06"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},a," TRX")),r.a.createElement("p",{className:"description"},"Total ganancias por referidos"))),r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-paper-outline",style:{color:"#3fcdc7"}})),r.a.createElement("p",{className:"description"},"Mi balance"),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},c," TRX")))),r.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-paper-outline",style:{color:"#3fcdc7"}})),r.a.createElement("p",{className:"description"},"Balance por referidos"),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"}," ",t," TRX")))),r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-speedometer-outline",style:{color:"#41cf2e"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},"Disponible")),r.a.createElement("p",{className:"description"},t+c," TRX ",r.a.createElement("button",{type:"button",className:"btn btn-info",onClick:()=>this.withdraw()},"Retirar")))),r.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-delay":"0.2s","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-clock-outline",style:{color:"#4680ff"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},"Retirado")),r.a.createElement("p",{className:"description"},s," TRX")))))}}a(194);class E extends n.Component{constructor(e){super(e),this.state={accountAddress:"Billetera NO conectada",accountBalance:"Billetera NO conectada",accountBandwidth:"Billetera NO conectada"}}componentDidMount(){setInterval(()=>this.fetchAccountAddress(),1e3),setInterval(()=>this.fetchAccountBalance(),1e3),setInterval(()=>this.fetchAccountBandwidth(),1e3)}fetchAccountAddress(){var e=this;return Object(i.a)(l.a.mark((function t(){var a,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getAccount();case 2:a=t.sent,n=a.address,r=window.tronWeb.address.fromHex(n),e.setState({accountAddress:r});case 6:case"end":return t.stop()}}),t)})))()}fetchAccountBalance(){var e=this;return Object(i.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getBalance();case 2:a=t.sent,n=window.tronWeb.fromSun(a),e.setState({accountBalance:n});case 5:case"end":return t.stop()}}),t)})))()}fetchAccountBandwidth(){var e=this;return Object(i.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getBandwidth();case 2:a=t.sent,e.setState({accountBandwidth:a});case 4:case"end":return t.stop()}}),t)})))()}render(){const e=this.state,t=e.accountAddress,a=e.accountBalance,n=e.accountBandwidth;return r.a.createElement("div",{className:"col-lg-5 mb-5"},r.a.createElement("div",{className:"card wow bounceInUp"},r.a.createElement("i",{className:"fa fa-address-card-o"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Informaci\xf3n de la cuenta"),r.a.createElement("h6",{className:"card-text"},"Direcci\xf3n:",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("span",null,t)),r.a.createElement("br",null),r.a.createElement("br",null),"Balance:",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("span",null,a," TRX")),r.a.createElement("br",null),r.a.createElement("br",null),"Bandwidth:",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("span",null,n)),r.a.createElement("br",null)))))}}var v=a(55),x=a.n(v);a(195);const g="https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec/",N=r.a.createElement("div",{className:"logo col-xs-12 col-md-4 text-center"},r.a.createElement("img",{src:x.a,className:"img-fluid",alt:"TronLink logo"})),I=()=>{window.open(g,"_blank")};var k=e=>{const t=e.installed;return void 0!==t&&t?r.a.createElement("div",{className:"tronLink hover",onClick:I},r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,"Log in Required"),r.a.createElement("p",null,"TronLink is installed but you must first log in. Open TronLink from the browser bar and set up your first wallet or decrypt a previously-created wallet.")),N):r.a.createElement("div",{className:"tronLink row",onClick:I},r.a.createElement("div",{className:"info col-xs-12 col-md-8"},r.a.createElement("h1",null,"TronLink Required"),r.a.createElement("p",null,"To create a post or tip others you must install TronLink. TronLink is a TRON wallet for the browser that can be ",r.a.createElement("a",{href:g,target:"_blank",rel:"noopener noreferrer"},"installed from the Chrome Webstore"),". Once installed, return back and refresh the page.")),N)};a(196);class y extends n.Component{constructor(e){super(e),this.state={tronWeb:{installed:!1,loggedIn:!1}}}componentDidMount(){var e=this;return Object(i.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(t=>{const a={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(a.installed)return e.setState({tronWeb:a}),t();let n=0;const r=setInterval(()=>{if(n>=10){const a="https://api.trongrid.io";return window.tronWeb=new m.a(a,a,a),e.setState({tronWeb:{installed:!1,loggedIn:!1}}),clearInterval(r),t()}if(a.installed=!!window.tronWeb,a.loggedIn=window.tronWeb&&window.tronWeb.ready,!a.installed)return n++;e.setState({tronWeb:a}),t()},100)});case 2:e.state.tronWeb.loggedIn||(window.tronWeb.defaultAddress={hex:window.tronWeb.address.toHex("TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"),base58:"TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"},window.tronWeb.on("addressChange",()=>{e.state.tronWeb.loggedIn||e.setState({tronWeb:{installed:!0,loggedIn:!0}})})),u.setTronWeb(window.tronWeb);case 4:case"end":return t.stop()}}),t)})))()}render(){return this.state.tronWeb.installed?this.state.tronWeb.loggedIn?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("section",{id:"why-us",className:"wow fadeIn"},r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"section-header"},r.a.createElement("h3",null,"Has tu inversi\xf3n")),r.a.createElement("div",{className:"row row-eq-height justify-content-center"},r.a.createElement(p,null),r.a.createElement(E,null)),r.a.createElement("div",null,r.a.createElement(f,null)))),r.a.createElement("section",{id:"services",className:"section-bg"},r.a.createElement(h,null)))):r.a.createElement(k,{installed:!0}):r.a.createElement(k,null)}}var W=y,R=document.getElementById("root");c.a.render(r.a.createElement(W,null),R)},55:function(e,t,a){e.exports=a.p+"static/media/TronLinkLogo.d3a8f115.png"},56:function(e,t,a){e.exports=a(197)},85:function(e,t){},86:function(e,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.67aa763c.chunk.js.map