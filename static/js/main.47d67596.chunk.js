(this.webpackJsonpdscindia=this.webpackJsonpdscindia||[]).push([[0],{112:function(a,e,t){a.exports=t(150)},117:function(a,e,t){},150:function(a,e,t){"use strict";t.r(e);var i=t(0),n=t.n(i),o=t(12),c=t.n(o),r=(t(117),t(34)),s=t(18),m=t(101),l=t(100),d=t(172),u=t(175),h=t(179),p=t(178),g=t(176),b=t(174),w=t(177),C=t(58),E=t.n(C),y=t(59),L=t.n(y),k=Object(d.a)((function(a){return{root:{flexGrow:1,position:"relative"},media:{height:"200px",filter:"brightness(0.5)"},cardActionButtons:{flexDirection:"row-reverse",backgroundColor:"transparent",position:"absolute",width:"100%",top:"0",zIndex:"9999"},cardInfoBar:{backgroundColor:"transparent",position:"absolute",width:"100%",bottom:"0",color:"#fff"},margin:{transform:"scale(0.75, 0.75)"}}}));function T(a){var e=k();return n.a.createElement(b.a,{item:!0,lg:a.cardSize,xs:12},n.a.createElement(u.a,{className:e.root,onClick:a.onClick},n.a.createElement(g.a,{disableSpacing:!0,className:e.cardActionButtons},n.a.createElement(w.a,{size:"small","aria-label":"Twitter",color:"primary",className:e.margin,onClick:function(a){console.log("Twitter"),a.preventDefault()}},n.a.createElement(E.a,null)),n.a.createElement(w.a,{size:"small","aria-label":"Facebook",color:"primary",className:e.margin,onClick:function(a){console.log("Facebook"),a.preventDefault()}},n.a.createElement(L.a,null))),n.a.createElement(p.a,{className:e.media,component:"img",src:"./chapters/"+a.data.TeamPic,alt:a.data.Campus,onError:function(a){a.target.src="./chapters/default.png"}}),n.a.createElement(h.a,{className:e.cardInfoBar,size:"small",title:a.data.Acronym,onClick:a.onClick})),0===a.spacing&&n.a.createElement("span",null,n.a.createElement("br",null)))}var f=t(89),S=t.n(f),v=(t(81),t(181)),A=t(180),D=t(103),P=t(186),I=t(82),N=t(61),G=t(90),B=t.n(G),F=t(68),O=t.n(F),W=t(92),x=t.n(W),j=t(94),Y=t.n(j),R=t(95),z=t.n(R),J=t(93),U=t.n(J),K=t(91),M=t.n(K),V=t(96),_=t.n(V),Z=Object(d.a)((function(a){return{root:{flexGrow:1,position:"relative"},cardContainer:{flexGrow:1,height:"100vh",margin:"0",overflowY:"auto"},image:{width:"100%",height:"100%",padding:"1rem"},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%",borderRadius:"1000px"}}}));function Q(a){var e,t=Z();return n.a.createElement(u.a,{className:t.cardContainer,id:"infoCard",style:{position:a.position}},n.a.createElement(h.a,{avatar:n.a.createElement(P.a,{src:S.a}),action:n.a.createElement(I.a,{"aria-label":"close",onClick:a.handleInfoCardClose},n.a.createElement(B.a,null)),title:a.data.Acronym,subheader:a.data.Campus}),n.a.createElement(A.a,null,n.a.createElement(u.a,{style:{height:"250px",width:"100%"}},n.a.createElement(p.a,{style:{height:"100%"},component:"img",src:"./chapters/"+a.data.TeamPic,alt:a.data.Campus,onError:function(a){a.target.src="./chapters/default.png"}})),n.a.createElement("br",null),n.a.createElement(N.a,{color:"textSecondary",variant:"h6",component:"h2"},"Social Links"),n.a.createElement(I.a,{"aria-label":"Email",href:a.data.Email},n.a.createElement(O.a,null)),n.a.createElement(I.a,{"aria-label":"Website",href:a.data.Website},n.a.createElement(M.a,null)),n.a.createElement(I.a,{"aria-label":"Facebook",href:a.data.Facebook},n.a.createElement(L.a,null)),n.a.createElement(I.a,{"aria-label":"Twitter",href:a.data.Twitter},n.a.createElement(E.a,null)),n.a.createElement(I.a,{"aria-label":"Facebook",href:a.data.Instagram},n.a.createElement(x.a,null)),n.a.createElement(I.a,{"aria-label":"Facebook",href:a.data.YouTube},n.a.createElement(U.a,null)),n.a.createElement(I.a,{"aria-label":"Facebook",href:a.data.Linkedin},n.a.createElement(Y.a,null)),n.a.createElement(I.a,{"aria-label":"Email",href:a.data.DSCApp},n.a.createElement(z.a,null)),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(N.a,{color:"textSecondary",variant:"h6",component:"h2"},"Lead Details"),n.a.createElement("br",null),n.a.createElement(u.a,null,n.a.createElement(b.a,{container:!0},n.a.createElement(b.a,{item:!0,xs:4},n.a.createElement(D.a,{className:t.image},n.a.createElement("img",{className:t.img,onError:function(a){a.target.src="./leads/default.png"},alt:"Lead",src:"./leads/"+a.data.LeadPic}))),n.a.createElement(b.a,{item:!0,xs:8},n.a.createElement(u.a,{variant:"outlined",style:{height:"100%"}},n.a.createElement(A.a,null,n.a.createElement(N.a,{variant:"h5",component:"h2"},a.data.LeadName),n.a.createElement(N.a,{color:"textSecondary"},"Lead 2019-20")),n.a.createElement(g.a,null,n.a.createElement(I.a,{"aria-label":"Email",href:"mailto:"+a.data.LeadEmail},n.a.createElement(O.a,null)),n.a.createElement(I.a,{"aria-label":"GitHub",href:"https://github.com/"+a.data.LeadGithub},n.a.createElement(_.a,null))))))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(u.a,null,n.a.createElement("div",{className:"mapouter"},n.a.createElement("div",{className:"gmap_canvas"},n.a.createElement("iframe",{width:"100%",height:"100%",src:(e=a.data,"https://maps.google.com/maps?q="+e.Campus+","+e.City+"&t=&z=13&ie=UTF8&iwloc=&output=embed"),frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0",title:"abc"}))))),n.a.createElement("hr",null),n.a.createElement(v.a,null,n.a.createElement(N.a,{color:"textSecondary",component:"p"},"The data on this page can be outdated or incorrect. Kindly contact us for corrections.")))}var H=t(97),q=t.n(H),X=t(69),$=t(98),aa=t.n($),ea=t(5),ta=t(183),ia=t(185),na=t(184),oa=function(a){Object(m.a)(t,a);var e=Object(l.a)(t);function t(a){var i;return Object(r.a)(this,t),(i=e.call(this,a)).makeSearch=function(){var a=i.state.searchKey;console.log(a)},i.handleInfoCardOpen=function(a){i.setState({focusCardData:a}),console.log(a),i.setState({infoCardOpen:!0}),i.setState({cardSize:4}),i.setState({gridSize:8}),i.setState({gridSpacing:10})},i.handleInfoCardClose=function(){i.setState({infoCardOpen:!1}),i.setState({cardSize:3}),i.setState({gridSize:12}),i.setState({gridSpacing:6})},i.state={searchKey:"",gridSize:12,cardSize:3,infoCardOpen:!1,gridSpacing:6,focusCardData:[]},i}return Object(s.a)(t,[{key:"render",value:function(){var a=this;this.props.classes;return n.a.createElement(n.a.Fragment,null,n.a.createElement(ta.a,null),n.a.createElement(b.a,{container:!0},n.a.createElement(b.a,{item:!0,lg:this.state.gridSize,xs:12,style:{padding:"0 auto !important"}},n.a.createElement(v.a,{component:"div",maxWidth:"sm",id:"logoContainer"},n.a.createElement("img",{src:q.a,alt:"DSC logo"}),n.a.createElement(aa.a,{value:this.state.searchKey,onChange:function(e){return a.setState({searchKey:e})},onRequestSearch:function(){return a.makeSearch()},style:{margin:"2rem auto",maxWidth:"100%",borderRadius:"500px"},classes:{iconButton:"bluebtn"},placeholder:"Enter Campus Name"})),n.a.createElement(v.a,{maxWidth:"lg",component:"div",style:{marginTop:"6rem"}},n.a.createElement(ia.a,{lgUp:!0},n.a.createElement(b.a,{container:!0,spacing:0},X.dscs.map((function(e,t){return n.a.createElement(T,{cardSize:a.state.cardSize,onClick:function(){return a.handleInfoCardOpen(e)},data:e,key:t,spacing:0})})))),n.a.createElement(ia.a,{mdDown:!0},n.a.createElement(b.a,{container:!0,spacing:this.state.gridSpacing},X.dscs.map((function(e,t){return n.a.createElement(T,{cardSize:a.state.cardSize,onClick:function(){return a.handleInfoCardOpen(e)},data:e,key:t})})))))),this.state.infoCardOpen&&n.a.createElement(ia.a,{mdDown:!0},n.a.createElement(b.a,{item:!0,lg:4,xs:12,style:{padding:"0 auto !important"}},n.a.createElement(Q,{data:this.state.focusCardData,handleInfoCardClose:this.handleInfoCardClose,position:"fixed"}))),this.state.infoCardOpen&&n.a.createElement(ia.a,{lgUp:!0},n.a.createElement(na.a,{anchor:"bottom",open:this.state.infoCardOpen,onClose:this.handleInfoCardClose,style:{zIndex:99999}},n.a.createElement(Q,{data:this.state.focusCardData,handleInfoCardClose:this.handleInfoCardClose})))))}}]),t}(i.Component),ca=Object(ea.a)((function(a){return{root:{flexGrow:1,width:"100vw",overflowX:"hidden"},paper:{padding:a.spacing(2),textAlign:"center",color:a.palette.text.secondary}}}))(oa);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ra=t(182),sa=t(99),ma=Object(sa.a)({overrides:{"@global":{"*::-webkit-scrollbar":{width:"0.4em"},"*::-webkit-scrollbar-track":{"-webkit-box-shadow":"inset 0 0 6px rgba(0,0,0,0.00)"},"*::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0,0,0,.1)",outline:"1px solid slategrey"}},palette:{common:{black:"#000",white:"#fff"},background:{paper:"#fff",default:"#fafafa"},primary:{light:"rgba(232, 240, 254, 1)",main:"rgba(26, 115, 232, 1)",dark:"rgba(23, 78, 166, 1)",contrastText:"#fff"},secondary:{light:"rgba(252, 232, 230, 1)",main:"rgba(217, 48, 37, 1)",dark:"rgba(165, 14, 14, 1)",contrastText:"#fff"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"}}}});c.a.render(n.a.createElement(ra.a,{theme:ma},n.a.createElement(ca,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},69:function(a){a.exports=JSON.parse('{"dscs":[{"Campus":"Chandubhai S Patel Institute of Technology","City":"Changa","Acronym":"DSC CHARUSAT","Email":"gdsc@charusat.edu.in","Website":"http://dsccharusat.tech/","DSCApp":"","Linkedin":"","Facebook":"https://www.facebook.com/dsccharusat/","Twitter":"https://twitter.com/dsc_charusat?lang=en","Instagram":"https://www.instagram.com/dsc.charusat/","YouTube":"","TeamPic":"https://drive.google.com/file/d/1_T4Gt4e7Vr1209EAFCFJswaOPZ2EXUv2/view?usp=sharing","LeadName":"Priyank Shah","LeadEmail":"priyankshah9840@gmail.com","LeadPic":"https://drive.google.com/file/d/1in5o76lawFxEYqiuEVzJe0hyzSjAT9PI/view?usp=sharing","DOB":"04/11/1999","LeadGithub":"priyank04"},{"Campus":"Graphic Era","City":"Dehradun","Acronym":"DSC GEU","Email":"dsc.geu@gmail.com","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"https://photos.app.goo.gl/yakvNZtKdfipKoUt5","LeadName":"Aastha Bist","LeadEmail":"abist119@gmail.com","LeadPic":"","DOB":"","LeadGithub":"bistaastha"},{"Campus":"G.H. Raisoni College of Engineering","City":"Nagpur","Acronym":"DSC GHRCE","Email":"contactdscghrce@gmail.com","Website":"https://bit.ly/dscghrce","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"https://twitter.com/DSCGhrce","Instagram":"https://www.instagram.com/dscghrce/","YouTube":"","TeamPic":"https://photos.app.goo.gl/mcv3moQP21ioXA6w6","LeadName":"Roshan Paturkar","LeadEmail":"paturkarr@gmail.com","LeadPic":"https://photos.app.goo.gl/z35TKRgGbhddnsZM8","DOB":"24/10/1995","LeadGithub":"roshanpaturkar"},{"Campus":"Gandhi Institute of Technology and Management, Visakhapatnam Campus","City":"Visakhapatnam","Acronym":"DSC GITAM","Email":"dsc.gitam@gmail.com","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"https://www.instagram.com/dscgitam/","YouTube":"","TeamPic":"https://drive.google.com/file/d/19-Un1DPhtyLBQRVpWxuIbHrurpfL68bS/view","LeadName":"Mohith Kanthamneni","LeadEmail":"mohith81999@gmail.com","LeadPic":"","DOB":"","LeadGithub":""},{"Campus":"Guru Tegh Bahadur Institute of Technology","City":"New Delhi","Acronym":"DSC GTBIT","Email":"dsc.gtbit@gmail.com","Website":"","DSCApp":"","Linkedin":"","Facebook":"https://www.facebook.com/dscgtbit","Twitter":"https://twitter.com/dscgtbit","Instagram":"https://www.instagram.com/dsc_gtbit/","YouTube":"https://www.youtube.com/channel/UCjSdZFUZazYln_XkzeJmY_w","TeamPic":"","LeadName":"Akanksha Bhasin","LeadEmail":"Akankshabhasin99@gmail.com","LeadPic":"","DOB":"20/03/1999","LeadGithub":""},{"Campus":"Indian Institute of Information Technology, Vadodara","City":"Gandhinagar","Acronym":"DSC IIITV","Email":"codingclub@iiitv.ac.in","Website":"","DSCApp":"","Linkedin":"https://www.linkedin.com/company/dsciiitv/","Facebook":"https://www.facebook.com/dsciiitv/","Twitter":"https://twitter.com/dsciiitv","Instagram":"","YouTube":"","TeamPic":"https://drive.google.com/open?id=175dOhIE0eMzRm0whgSTG5VR7xuonF9AE","LeadName":"Aashutosh Rathi","LeadEmail":"me@aashutosh.dev","LeadPic":"https://github.com/aashutoshrathi.png","DOB":"","LeadGithub":"aashutoshrathi"},{"Campus":"Indian Institute of Technology, Patna","City":"Patna","Acronym":"DSC IIT Patna","Email":"dsc@iitp.ac.in","Website":"","DSCApp":"","Linkedin":"","Facebook":"https://www.facebook.com/dsciitpatna/","Twitter":"https://twitter.com/dsciitpatna?lang=en","Instagram":"","YouTube":"","TeamPic":"https://drive.google.com/file/d/1GRpi9jdawQ92jC0YsDWQZ32maMTnLjEp/view?usp=sharing","LeadName":"Vatsal Singhal","LeadEmail":"vatsal.singhal.vs@gmail.com","LeadPic":"https://drive.google.com/file/d/1JNZ_qOTYHG6J_m567vBZ7wc8v_JX5GqG/view?usp=sharing","DOB":"16/08/1998","LeadGithub":""},{"Campus":"Jecrc University","City":"jaipur","Acronym":"DSC JU","Email":"dsc.jecrcu@gmail.com","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"Saksham Taneja","LeadEmail":"sakshamtaneja7861@gmail.com","LeadPic":"https://drive.google.com/open?id=1BKYLDHWYYouL_ZyZ6vBDwuxQgfbGE_MN","DOB":"21/09/2000","LeadGithub":"sakshamtaneja21"},{"Campus":"Manipal Institute of Technology","City":"Manipal","Acronym":"DSC MIT","Email":"hello@dscmit.com","Website":"dscmit.com","DSCApp":"","Linkedin":"","Facebook":"https://m.facebook.com/DSCMITmanipal","Twitter":"https://www.twitter.com/DSCManipal","Instagram":"","YouTube":"","TeamPic":"https://drive.google.com/file/d/1Xv-ZZR-4-VZDyLP0M-wlMz5Oq58kSBeQ/view?usp=sharing","LeadName":"Aritra Basu","LeadEmail":"","LeadPic":"","DOB":"","LeadGithub":"aritra24"},{"Campus":"Dr. B.R. Ambedkar National Institute of Technology","City":"Jalandhar","Acronym":"DSC NITJ","Email":"codingclub@nitj.ac.in","Website":"","DSCApp":"","Linkedin":"https://www.linkedin.com/company/dscnitj","Facebook":"facebook.com/dscnitj","Twitter":"","Instagram":"instagram.com/dscnitj","YouTube":"","TeamPic":"https://ibb.co/4JJyW2W","LeadName":"Arsh Goyal","LeadEmail":"arshgoyal98@gmail.com","LeadPic":"https://ibb.co/FJxj99G","DOB":"","LeadGithub":""},{"Campus":"Navrachana University","City":"Vadodara","Acronym":"DSC NUV","Email":"dscnuv@gmail.com","Website":"http://www.dscnuv.com/?i=1","DSCApp":"","Linkedin":"https://www.linkedin.com/company/dscnuv/","Facebook":"","Twitter":"https://twitter.com/DscNuv","Instagram":"https://www.instagram.com/dscnuv/","YouTube":"","TeamPic":"https://photos.google.com/share/AF1QipPowVJ2k_yhA8_iZKdd8fA3l_lAjyeWtpNeRuGkgN_rZSv8Zym4ePtUzLy_zH5Cfw?key=YV9iSTQ2ZG85T3BOQTlVdExqaDY0dVM1SWF5TFFn","LeadName":"Perin Shah","LeadEmail":"perinshah@hotmail.com","LeadPic":"https://photos.app.goo.gl/QvRzxjrT6J76KwK5A","DOB":"","LeadGithub":"freeformelm"},{"Campus":"Pondicherry Engineering College","City":"Pondicherry","Acronym":"DSC PEC","Email":"google.dsc@pec.edu","Website":"https://sites.google.com/view/dscpec","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"https://www.instagram.com/dsc_pec/","YouTube":"","TeamPic":"https://drive.google.com/open?id=1f89KCm6Xf43PomfGL807L-is82BoF6iX","LeadName":"Chinta SriVishnu koushik","LeadEmail":"koushik.vani@pec.edu","LeadPic":"https://drive.google.com/open?id=11j2ryM_q0BhetzBPjWgR11Nhi83A1ocW","DOB":"24/06/1999","LeadGithub":"CsKoushik9"},{"Campus":"PES Institute of Technology, South Campus","City":"Bangalore","Acronym":"DSC PESIT","Email":"dsc.pesit@gmail.com","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"Aniruddha Mysore","LeadEmail":"aniruddha.mysore@gmail.com","LeadPic":"","DOB":"","LeadGithub":"animysore"},{"Campus":"Reva University","City":"Bengaluru","Acronym":"DSC REVA","Email":"dscreva@gmail.com","Website":"dscreva.github.io","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"M Vijay Bhargav Reddy","LeadEmail":"vbreddy804@gmail.com","LeadPic":"","DOB":"24/07/2000","LeadGithub":""},{"Campus":"SASTRA Deemed University","City":"Thanjavur","Acronym":"DSC SASTRA Deemed To Be University","Email":"dsc.sastra.university@gmail.com","Website":"http://dsc.sastratbi.in/","DSCApp":"https://play.google.com/store/apps/details?id=dsc.sastra.dsc_sastra_university","Linkedin":"https://www.linkedin.com/company/19033740/admin/","Facebook":"https://www.facebook.com/dscsastra/","Twitter":"https://twitter.com/dsc_sastra","Instagram":"https://www.instagram.com/dsc.sastra.university/","YouTube":"https://www.youtube.com/channel/UCx0wFsoFw4zxmr44lyB4KgQ","TeamPic":"https://drive.google.com/uc?id=1SLTp_h1vLNI3zekyOPjvMI-2APtwAgRi","LeadName":"Kavin Raju S","LeadEmail":"kavinraju98@gmail.com","LeadPic":"https://drive.google.com/uc?id=1uamWfiu9rNK_2mjbZu7JaJAj8_NPZu5_","DOB":"25th March 1998","LeadGithub":"kavinraju"},{"Campus":"SIES Graduate School of Technology","City":"Navi Mumbai","Acronym":"DSC SIESGST","Email":"dsc@siesgst.ac.in","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"Swapnil Satish Shinde","LeadEmail":"swapnil.satish17@siesgst.ac.in","LeadPic":"https://photos.app.goo.gl/NpdfbLhgUdftB2Pz5","DOB":"26th June 2000","LeadGithub":"Swap76"},{"Campus":"Techno India University","City":"Kolkata","Acronym":"DSC TIU","Email":"dsctechindiauniversity@gmail.com","Website":"https://dsc-tiu.github.io/","DSCApp":"","Linkedin":"https://www.linkedin.com/company/developer-student-clubs-techno-india-university/","Facebook":"https://www.facebook.com/dsctiu/","Twitter":"https://twitter.com/dsc_tiu","Instagram":"","YouTube":"","TeamPic":"https://drive.google.com/file/d/17xkxEEPwkL4ESjlcwLtpTYyd4eFa1axK/view?usp=sharing","LeadName":"Atri Das","LeadEmail":"babinsamrat123@gmail,com","LeadPic":"https://drive.google.com/file/d/1BSeZWF7fJGuP_61RDwE0NPCuXJ6VU30Z/view?usp=sharing","DOB":"19.02.1998","LeadGithub":"samrat19"},{"Campus":"Siliguri Institute Of Technology","City":"Siliguri","Acronym":"DSC-SIT","Email":"dscsitsiliguri@gmail.com","Website":"http://www.dscsit.co/","DSCApp":"","Linkedin":"https://www.linkedin.com/in/dsc-sit-0b2632198/","Facebook":"https://www.facebook.com/dscsitsiliguri/","Twitter":"","Instagram":"","YouTube":"https://www.youtube.com/channel/UCtFOkqOCTI-AsVdD8qJXGow","TeamPic":"https://drive.google.com/file/d/1ckeFt6I4OV0J4Xu8iFjzwCZMEtYqF1oJ/view?usp=drivesdk","LeadName":"Debanjona Bhattacharjya","LeadEmail":"debanjana.bhattacharyya9818@gmail.com","LeadPic":"https://drive.google.com/file/d/1WsqiREfCxwnE4Y3wSXnIp4oGqC2KrOZT/view?usp=drivesdk","DOB":"16/11/1998","LeadGithub":"DEBANJANAB"},{"Campus":"National Institute of Technology, Rourkela","City":"Rourkela","Acronym":"NIT Rourkela","Email":"dsc.nitr@gmail.com","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"Abel Mathew","LeadEmail":"notify.abelmathew@gmail.com","LeadPic":"","DOB":"28/02/1998","LeadGithub":"DesignrKnight"},{"Campus":"Netaji Subhash Engineering College","City":"Kolkata","Acronym":"DSC NSEC","Email":"lead@dscnsec.com","Website":"dscnsec.com","DSCApp":"","Linkedin":"https://linkedin.com/dscnsec","Facebook":"https://fb.com/dscnsec","Twitter":"https://twitter.com/dscnsec","Instagram":"https://instagram.com/dscnsec","YouTube":"https://youtube.com/dscnsec","TeamPic":"dscnsec.png","LeadName":"Anubhav Singh","LeadEmail":"anubhav@dscnsec.com","LeadPic":"dscnsec.jpg","DOB":"","LeadGithub":"xprilion"},{"Campus":"NSS Engineering College, Palakkad","City":"Palakkad","Acronym":"NSSCE","Email":"","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"Akarsh Ashok","LeadEmail":"akarsh@computer.org","LeadPic":"https://photos.app.goo.gl/8KDG3iA7yPyirQEw6","DOB":"31/07/2000","LeadGithub":"akchy"},{"Campus":"Rustamji Institute of Technology","City":"Gwalior","Acronym":"RJIT","Email":"dscrjit@gmail.com","Website":"DscRjit.co","DSCApp":"","Linkedin":"https://www.linkedin.com/company/dsc-rjit/","Facebook":"facebook.com/dscrjit","Twitter":"twitter.com/DscRjit","Instagram":"instagram.com/dscrjit","YouTube":"https://www.youtube.com/channel/UCFUuJreyzkCRMOaR2HHrj9w","TeamPic":"https://photos.app.goo.gl/4L5kFNrQrz3FNyTG9","LeadName":"Ayush Sharma","LeadEmail":"ayushs136@gmail.com","LeadPic":"https://photos.app.goo.gl/XhRFUHmbbMHHZjbWA","DOB":"19/11/1999","LeadGithub":"ayushs136"},{"Campus":"Vellore Institute of Technology","City":"Vellore","Acronym":"VIT","Email":"dscvitvellore@gmail.com","Website":"dscvit.com","DSCApp":"","Linkedin":"https://www.linkedin.com/company/dscvit","Facebook":"http://facebook.com/dscvitvellore","Twitter":"https://twitter.com/dscvit","Instagram":"http://instagram.com/dscvitvellore","YouTube":"","TeamPic":"https://imgur.com/a/JRbSLUe","LeadName":"Samarth Nayyar","LeadEmail":"samarthnayyar123@gmail.com","LeadPic":"https://imgur.com/a/kAPDazF","DOB":"09/09/1998","LeadGithub":""},{"Campus":"Vishwakarma Institute of Technology","City":"Pune","Acronym":"VIT","Email":"dsc@vit.edu","Website":"","DSCApp":"","Linkedin":"https://www.linkedin.com/company/dscvitpune","Facebook":"https://m.facebook.com/dscvitpune/","Twitter":"https://twitter.com/dscvitpune?s=09","Instagram":"https://www.instagram.com/dscvitpune?r=nametag","YouTube":"https://www.youtube.com/c/dscvitpune","TeamPic":"https://drive.google.com/file/d/1HZAOMnuxm0LM3Xq5X9d7gt56rGpTqsLQ/view?usp=drivesdk","LeadName":"Shreeya Deshpande","LeadEmail":"shreeya1298@gmail.com","LeadPic":"https://drive.google.com/file/d/1DRQ90BQmS8VCUAgvzlNvmMQgE2ug2xZ1/view?usp=drivesdk","DOB":"12/12/1998","LeadGithub":"Shreeya Deshpande"},{"Campus":"ABES Institute of Technology","City":"Ghaziabad","Acronym":"","Email":"","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"","LeadEmail":"","LeadPic":"","DOB":"","LeadGithub":""},{"Campus":"Acropolis Institute of Technology & Research","City":"Indore","Acronym":"","Email":"","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"","LeadEmail":"","LeadPic":"","DOB":"","LeadGithub":""},{"Campus":"Acropolis Technical Campus","City":"Indore","Acronym":"","Email":"","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"","LeadEmail":"","LeadPic":"","DOB":"","LeadGithub":""},{"Campus":"Adi Shankara Institute of Engineering & Technology","City":"Kalady","Acronym":"","Email":"","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"","LeadEmail":"","LeadPic":"","DOB":"","LeadGithub":""},{"Campus":"Ajay Kumar Garg Engineering College","City":"Ghaziabad","Acronym":"","Email":"","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"","LeadEmail":"","LeadPic":"","DOB":"","LeadGithub":""},{"Campus":"Amal Jyothi College of Engineering","City":"Kottayam","Acronym":"","Email":"","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"","LeadEmail":"","LeadPic":"","DOB":"","LeadGithub":""},{"Campus":"Amity University, Lucknow","City":"Lucknow","Acronym":"","Email":"","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"","LeadEmail":"","LeadPic":"","DOB":"","LeadGithub":""},{"Campus":"Amity University, Noida","City":"Noida","Acronym":"","Email":"","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"","LeadEmail":"","LeadPic":"","DOB":"","LeadGithub":""},{"Campus":"Amrita School of Engineering, Bengaluru","City":"Bengaluru","Acronym":"","Email":"","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"","LeadEmail":"","LeadPic":"","DOB":"","LeadGithub":""},{"Campus":"Amrita School of Engineering, Coimbatore","City":"Coimbatore","Acronym":"","Email":"","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"","LeadEmail":"","LeadPic":"","DOB":"","LeadGithub":""},{"Campus":"Amrita School of Engineering, Kollam","City":"Amritapuri","Acronym":"","Email":"","Website":"","DSCApp":"","Linkedin":"","Facebook":"","Twitter":"","Instagram":"","YouTube":"","TeamPic":"","LeadName":"","LeadEmail":"","LeadPic":"","DOB":"","LeadGithub":""}]}')},81:function(a,e,t){},89:function(a,e,t){a.exports=t.p+"static/media/shortlogo.8fb0d5d9.png"},97:function(a,e,t){a.exports=t.p+"static/media/dsclogo.cc949774.png"}},[[112,1,2]]]);
//# sourceMappingURL=main.47d67596.chunk.js.map