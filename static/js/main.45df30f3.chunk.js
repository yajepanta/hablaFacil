(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},56:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(2),n=c.n(s),i=c(31),r=c.n(i),o=(c(56),c(48)),l=c(24),d=c(30),j=c(8);function b(){var e=Object(j.f)();return Object(a.jsx)("button",{type:"submit",onClick:function(){e.push("/voto")},className:"btnTo",children:"Leer Post"})}function m(){var e=Object(j.f)();return Object(a.jsx)("button",{type:"submit",onClick:function(){e.push("/miembrodemesa")},className:"btnTo",children:"Leer Post"})}var h=c.p+"static/media/logoHome.7986b0aa.svg",u=c.p+"static/media/clapWhite.e4ff51cb.svg",x=c.p+"static/media/clap.9caa0f6e.svg",p="notclicked";function O(){return"notclicked"===p?Object(a.jsx)("img",{src:u,alt:"like pic",className:"imgLikeHome"}):Object(a.jsx)("img",{src:x,alt:"like pic",className:"imgLikeHome"})}var f=function(){var e=n.a.useState(0),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(a.jsxs)("div",{className:"divLikeHome",children:[Object(a.jsx)("button",{onClick:function(){return console.log("click"),s(c+1),void(p="clicked")},className:"btnLikeHome",children:Object(a.jsx)(O,{})}),Object(a.jsx)("p",{className:"contadorHome",children:c})]})};function v(e){var t=e.posts.filter((function(e){return"home"===e.categoria&&"banner"===e.tipo})),c=e.posts.filter((function(e){return"home"===e.categoria&&"texto"===e.tipo})),s=t.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:"tituloBanner",children:e.titulo})},e.id)})),n=c.map((function(e){return Object(a.jsxs)("div",{className:"divCardHome",children:[Object(a.jsxs)("div",{className:1===e.order?"cardTituloHome1":"cardTituloHome2",children:[Object(a.jsx)("div",{className:"imgDiv",children:Object(a.jsx)("img",{src:h,className:"cardImgHome",alt:e.id})}),Object(a.jsx)("h4",{children:e.titulo})]}),Object(a.jsxs)("div",{className:"cardContentHome",children:[Object(a.jsxs)("div",{className:"cardTextoHome",children:[Object(a.jsx)("h4",{className:"cardTituloHome",children:e.subtitulo}),Object(a.jsx)("p",{className:"cardContenidoHome",children:e.contenido})]}),Object(a.jsxs)("div",{className:"cardFooterHome",children:[1===e.order?Object(a.jsx)(b,{}):Object(a.jsx)(m,{}),Object(a.jsx)(f,{})]})]})]},e.id)}));return Object(a.jsxs)("main",{children:[Object(a.jsx)("section",{className:"bannerHome",children:s}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:"textoInfo",children:"Habla F\xe1cil busca empoderar e informar a personas de una manera accesible y directa lo que necesitan saber para ejercer sus derechos y cumplir sus deberes como ciudadanos."})}),Object(a.jsxs)("section",{className:"textosContainerHome",children:[Object(a.jsx)("p",{className:"titleTop",children:"INFO TOP DE HABLA F\xc1CIL"}),n,Object(a.jsx)("p",{className:"linkEnd",children:"Ver m\xe1s sobre las elecciones"})]})]})}c(46);var g=c(73),N=c(74),k=c(75),C=c(76),E=c(77),A=c(21),w=c(50),F=c.p+"static/media/share.8d8d82b3.svg",H=c.p+"static/media/facebook.68937954.svg",I=c.p+"static/media/twitter.536733a8.svg",y=c.p+"static/media/email.8053326d.svg",M=c.p+"static/media/linkedin.b6350964.svg",D=c.p+"static/media/whatsapp.d6f5f814.svg";function T(){return Object(a.jsxs)("div",{className:"compartir",children:[Object(a.jsx)("style",{type:"text/css",children:"\n    \n.btn-primary{\n      color: black;\n      background-color: #EFECDE;\n      border-color:  #EFECDE;\n  }\n  \n  .btn-primary:hover{\n      color: black;\n      background-color: #EFECDE;\n      border-color:  #EFECDE;\n  }\n  \n  .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {\n      color: black;\n      background-color: #EFECDE;\n      border-color:  #EFECDE;\n  }\n  \n  \n  .btn-primary:not(:disabled):not(.disabled).active:focus, .btn-primary:not(:disabled):not(.disabled):active:focus, .show>.btn-primary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem  #EFECDE;\n  }\n  \n  .btn-primary.focus, .btn-primary:focus{\n      box-shadow: 0 0 0 0.2rem  #EFECDE;\n      color: black;\n      background-color: #EFECDE;\n      border-color:  #EFECDE;\n  }\n  \n  .dropdown-menu {\n      border-radius: 0.5rem;\n      box-shadow: 0 0 10px gray;\n      padding-top: 0%;\n      padding-bottom: 0%;\n  }\n\n  .btn {\n      font-size: 1.2rem;\n      height: 2.5rem;\n  }\n  .dropdown-toggle::after{\n      border: none;\n  }\n  .dropdown-item::focus{\n        background-color: grey;\n  }\n  \n    "}),Object(a.jsxs)(w.a,{id:"dropdown-basic-button",title:Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("p",{className:"itemMenuTitle",children:"Compartir"}),Object(a.jsx)("img",{src:F,alt:"user pic",className:"imgCompartir"})]}),children:[Object(a.jsx)(A.a.Item,{children:Object(a.jsx)(g.a,{url:"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8",quote:"HablaFacil - Mantente informado",hashtag:"#HablaFacil",children:Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("img",{src:y,alt:"email pic",className:"imgItems"}),Object(a.jsx)("p",{className:"itemMenu",children:"Email"})]})})}),Object(a.jsx)(A.a.Item,{children:Object(a.jsx)(N.a,{url:"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8",quote:"HablaFacil - Mantente informado",hashtag:"#HablaFacil",children:Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("img",{src:H,alt:"fb pic",className:"imgItems"}),Object(a.jsx)("p",{className:"itemMenu",children:"Facebook"})]})})}),Object(a.jsx)(A.a.Item,{children:Object(a.jsx)(k.a,{url:"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8",quote:"HablaFacil - Mantente informado",hashtag:"#HablaFacil",children:Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("img",{src:I,alt:"twitter pic",className:"imgItems"}),Object(a.jsx)("p",{className:"itemMenu",children:"Twitter"})]})})}),Object(a.jsx)(A.a.Item,{children:Object(a.jsx)(C.a,{url:"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8",quote:"HablaFacil - Mantente informado",hashtag:"#HablaFacil",children:Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("img",{src:M,alt:"linkedin pic",className:"imgItems"}),Object(a.jsx)("p",{className:"itemMenu",children:"LinkedIn"})]})})}),Object(a.jsx)(A.a.Item,{children:Object(a.jsx)(E.a,{url:"https://www.notion.so/140a18721f6c44e48812d54dbe6b7113?v=1fbbb87096b143ccbc0e556409ea92f8",quote:"HablaFacil - Mantente informado",hashtag:"#HablaFacil",children:Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("img",{src:D,alt:"wp pic",className:"imgItems"}),Object(a.jsx)("p",{className:"itemMenu",children:"WhatsApp"})]})})})]})]})}var B="notclicked";function L(){return"notclicked"===B?Object(a.jsx)("img",{src:u,alt:"like pic",className:"imgLikeHome"}):Object(a.jsx)("img",{src:x,alt:"like pic",className:"imgLikeHome"})}var S=function(){var e=n.a.useState(0),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(a.jsxs)("div",{className:"divLike",children:[Object(a.jsx)("button",{onClick:function(){return console.log("click"),s(c+1),void(B="clicked")},className:"btnLike",children:Object(a.jsx)(L,{})}),Object(a.jsx)("p",{className:"contador",children:c})]})},J=c(35),R=c.n(J),G=c.p+"static/media/printer.5b99709c.svg";function q(e){var t=e.posts.filter((function(e){return"voto"===e.categoria&&"banner"===e.tipo})),c=e.posts.filter((function(e){return"voto"===e.categoria&&"texto"===e.tipo})),s=e.posts.filter((function(e){return"voto"===e.categoria&&"textoImg"===e.tipo})),n=e.posts.filter((function(e){return"voto"===e.categoria&&"slide"===e.tipo})),i=t.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:"tituloBanner",children:e.titulo})},e.id)})),r=c.map((function(e){return Object(a.jsxs)("div",{className:"texto",children:[Object(a.jsx)("p",{className:"titulo",children:e.titulo}),Object(a.jsxs)("p",{className:"subtitulo",children:[" ",e.subtitulo]}),Object(a.jsx)("p",{className:"contenido",children:e.contenido})]},e.id)})),o=s.map((function(e){return Object(a.jsxs)("div",{className:"texto",children:[Object(a.jsx)("p",{className:"titulo",children:e.titulo}),Object(a.jsxs)("p",{className:"subtitulo",children:[" ",e.subtitulo]}),Object(a.jsx)("div",{className:"divImg",children:Object(a.jsx)("img",{src:e.img,alt:e.id,className:4===e.order?"imgVoto1":"imgVoto2"})}),Object(a.jsx)("p",{className:"contenido",children:e.contenido})]},e.id)})),l=n.map((function(e){return Object(a.jsxs)("div",{className:"slide",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:e.img,alt:e.id,className:"imgSlide"})}),Object(a.jsx)("span",{children:e.contenido})]},e.id)}));return Object(a.jsxs)("main",{className:"mainVoto",id:"mainVoto",children:[Object(a.jsx)("section",{className:"banner",children:i}),Object(a.jsx)("section",{className:"textosContainer",children:r}),Object(a.jsx)("section",{className:"textoImgContainer",children:o}),Object(a.jsx)("section",{className:"slideContainer",children:l}),Object(a.jsxs)("section",{className:"interactionContainer",children:[Object(a.jsx)(S,{}),Object(a.jsx)(T,{}),Object(a.jsxs)("button",{className:"button-print",onClick:function(e){R()({printable:"mainVoto",type:"html",header:"Habla F\xe1cil"})},children:["Imprimir ",Object(a.jsx)("img",{src:G,alt:"button-print"})]})]}),Object(a.jsxs)("section",{className:"comentario",children:[Object(a.jsx)("p",{className:"titleComentario",children:"\xbfTe sirvi\xf3 la publicaci\xf3n? Dejanos tu comentario"}),Object(a.jsx)("div",{className:"fb-comments","data-href":"https://developers.facebook.com/docs/plugins/comments#configurator","data-width":"150","data-numposts":"4","data-colorscheme":"dark"})]})]})}function P(e){var t=e.posts.filter((function(e){return"mesa"===e.categoria&&"banner"===e.tipo})),c=e.posts.filter((function(e){return"mesa"===e.categoria&&"texto"===e.tipo})),s=e.posts.filter((function(e){return"mesa"===e.categoria&&"slide"===e.tipo})),n=t.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:"tituloBanner",children:e.titulo})},e.id)})),i=c.map((function(e){return Object(a.jsxs)("div",{className:"texto",children:[Object(a.jsx)("p",{className:"titulo",children:e.titulo}),Object(a.jsxs)("p",{className:"subtitulo",children:[" ",e.subtitulo]}),Object(a.jsx)("p",{className:"contenido",children:e.contenido})]},e.id)})),r=s.map((function(e){return Object(a.jsx)("div",{className:"slide",children:Object(a.jsx)("span",{children:e.contenido})},e.id)}));return Object(a.jsxs)("main",{className:"mainVoto",id:"mainVoto",children:[Object(a.jsx)("section",{className:"bannerMesa",children:n}),Object(a.jsx)("section",{className:"textosContainer",children:i}),Object(a.jsx)("section",{className:"slideContainer",children:r}),Object(a.jsxs)("section",{className:"interactionContainer",children:[Object(a.jsx)(S,{}),Object(a.jsx)(T,{}),Object(a.jsxs)("button",{className:"button-print",onClick:function(e){R()({printable:"mainVoto",type:"html",header:"Habla F\xe1cil"})},children:["Imprimir ",Object(a.jsx)("img",{src:G,alt:"button-print"})]})]}),Object(a.jsxs)("section",{className:"comentario",children:[Object(a.jsx)("p",{className:"titleComentario",children:"\xbfTe sirvi\xf3 la publicaci\xf3n? Dejanos tu comentario"}),Object(a.jsx)("div",{className:"fb-comments","data-href":"https://developers.facebook.com/docs/plugins/comments#configurator","data-width":"150","data-numposts":"4","data-colorscheme":"dark"})]})]})}c(47);var K=function(e){var t=e.posts.filter((function(e){return"buscar"===e.categoria}));return Object(a.jsxs)("main",{className:"mainResults",children:[Object(a.jsxs)("p",{className:"textResults",children:['Resultados de "',e.searchField,'"']}),Object(a.jsx)("section",{children:t.filter((function(t){return""===e.searchField||t.contenido.toLowerCase().includes(e.searchField.toLowerCase())?t:void 0})).map((function(e){return Object(a.jsxs)("div",{className:"divCard",children:[Object(a.jsx)("img",{src:e.img,className:"cardImg",alt:e.id}),Object(a.jsxs)("div",{className:"cardContent",children:[Object(a.jsxs)("div",{className:"cardTexto",children:[Object(a.jsx)("h4",{className:"cardTitulo",children:e.titulo}),Object(a.jsx)("p",{className:"cardContenido",children:e.contenido})]}),Object(a.jsx)("div",{className:"cardFooter",children:Object(a.jsx)("p",{children:e.fecha})})]})]},e.id)}))})]})},U=c(44);c(68),c(63);U.a.initializeApp({apiKey:"AIzaSyAnB6qeNWrDEZCD3myHa92WkkMS1FilWG8",authDomain:"hablafacilapp-20c5a.firebaseapp.com",projectId:"hablafacilapp-20c5a",storageBucket:"hablafacilapp-20c5a.appspot.com",messagingSenderId:"1062852859493",appId:"1:1062852859493:web:192d737e54054dbfa8188c",measurementId:"G-X84WQ1NF7C"});var W=U.a;c(65);function V(e){var t=e.posts.filter((function(e){return"buscar"===e.categoria}));return Object(a.jsxs)("main",{className:"mainResults",children:[Object(a.jsx)("p",{className:"subtituloMas",children:"M\xe1s articulos sobre este tema"}),Object(a.jsx)("section",{children:t.map((function(e){return Object(a.jsxs)("div",{className:"divCard",children:[Object(a.jsx)("img",{src:e.img,className:"cardImg",alt:e.id}),Object(a.jsxs)("div",{className:"cardContent",children:[Object(a.jsxs)("div",{className:"cardTexto",children:[Object(a.jsx)("h4",{className:"cardTitulo",children:e.titulo}),Object(a.jsx)("p",{className:"cardContenido",children:e.contenido})]}),Object(a.jsx)("div",{className:"cardFooter",children:Object(a.jsx)("p",{children:e.fecha})})]})]},e.id)}))})]})}c(66);var X=function(e,t){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"/#",children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIwSURBVHgB7Zo/SEJBGMA/+0NFkEFQGP2hpsqQoKEiaNWlhiCbXEpacqqxoZYmoSVHbanJtmrINahwqqTCocWMpKBIob8U1ic8eT7/vHfvnXEn95t8553c7733fffdoSn9NZ2GCqQKKhQhxhtCjDeEGG8IMd4QYrwhxHijhqRz7O5TUz9zUzU0N9UQj+vuqANamEi2LSOOc4hcvar2C/r7YNLekr1u6DwGLYSCgzAxZgYaEL2K4cMhiJ4Mg2fekvddd2d9ZmLv8fEcKQTbcGyhScvH0ZJCiGMMJ7Ky1JXXbhtoLDkxm7URFgvcEM+chaqQhK7kIY8fCYwrXePMRGGuGZHu/4u90JOmBKUGc2IotRm4B6Mw+Sru7D7C0WkSjMCcmJRgFpZv4CX1DXphTkzKrrH4B9idl7rlmBNLpn6ynzHeRh0XmksyOSa9J8FayyRaYLXjXevV3J/q6qhWxBa78/Jxhfpg3DWba4EEamJYH2LxWwpco2bd0Zw272oPeNzt2evt4EMmcUhItSRp5U9NrBwlFdaXKFVonBrMJg98UkF/vy4phDkxKb3ref3kMFl5uGZaDe+my7NnMADGlcvZBkZhTmxKsfvWi9iPyTFSnCpJJun9lhxiMZRa37jNaz8IPcP+3wJcDKwofIFEXrtvK0FlY6mE7PjNfgaR6zfVfsrjN4s1rOkp40kWJg8aEImV+8BUOc4IJvE/D84QYrwhxHhDiPGGEOMNIcYbQow3fgF1Wa8CJsyx6AAAAABJRU5ErkJggg==",alt:"Habla F\xe1cil"})}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:[Object(a.jsxs)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",children:[Object(a.jsx)("li",{className:"nav-item active",children:Object(a.jsxs)("a",{className:"nav-link",href:"/#",children:["Home ",Object(a.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"/voto",children:"Elecciones 2021"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"/#",children:"Congreso"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"/#",children:"Medidas sanitarias"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"/#",children:"Multas"})})]}),Object(a.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(a.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Buscar",value:e,onChange:function(e){return t(e.target.value)}})})]})]})};function Y(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([]),r=Object(l.a)(i,2),b=r[0],m=r[1];Object(s.useEffect)((function(){var e=!0;return W.firestore().collection("articulos").orderBy("order","asc").onSnapshot((function(t){if(e){var c=t.docs.map((function(e){return Object(o.a)({id:e.id},e.data())}));m(c)}})),function(){e=!1}}),[]);var h=function(e,t){return c.length>0?Object(a.jsx)(K,{posts:b,setPosts:m,searchField:c}):!1===t&&0===c.length?Object(a.jsx)("div",{children:e}):Object(a.jsxs)("div",{children:[e,Object(a.jsx)("section",{className:"masContainer",children:Object(a.jsx)(V,{posts:b,setPosts:m})})]})};return Object(a.jsxs)(d.a,{children:[X(c,n),Object(a.jsx)("div",{children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:"/voto",children:h(Object(a.jsx)(q,{posts:b,setPosts:m}),!0)}),Object(a.jsx)(j.a,{path:"/miembrodemesa",children:h(Object(a.jsx)(P,{posts:b,setPosts:m}),!0)}),Object(a.jsx)(j.a,{path:"/",children:h(Object(a.jsx)(v,{posts:b,setPosts:m}),!1)})]})})]})}var Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(Y,{})}),document.getElementById("root")),Q()}},[[67,1,2]]]);
//# sourceMappingURL=main.45df30f3.chunk.js.map