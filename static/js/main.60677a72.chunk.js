(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(18),i=n.n(c),o=(n(29),n(22)),r=n(3),u=n(2),l=n(8),p=n(0);var d=function(e){var t,n=e.loggedIn,a=e.userEmail,s=e.onSignOut,c=Object(u.h)().pathname,i="/sign-up"===c?"sign-in":"sign-up";return"/sign-up"===c&&(t="\u0412\u043e\u0439\u0442\u0438"),"/"===c&&(t="\u0412\u044b\u0439\u0442\u0438"),"/sign-in"===c&&(t="\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),Object(p.jsxs)("header",{className:"header section section_place_header",children:[Object(p.jsx)(l.b,{to:"/",className:"header__logo",title:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(p.jsxs)("div",{className:"header__links",children:[n&&Object(p.jsx)("span",{className:"header__label",children:a}),Object(p.jsx)(l.b,{to:i,onClick:s,className:"header__link",children:t})]})]})},j=s.a.createContext();var h=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,c=e.onCardDelete,i=s.a.useContext(j),o=t.owner._id===i._id?"":" photo__delete-button_hiden",r=t.likes.some((function(e){return e._id===i._id}))?" photo__like-button_active":"";return Object(p.jsxs)("li",{className:"photo",children:[Object(p.jsx)("img",{src:t.link,className:"photo__image",alt:t.name,onClick:function(){n(t)}}),Object(p.jsx)("button",{onClick:function(){c(t)},type:"button",className:"photo__delete-button".concat(o)}),Object(p.jsxs)("div",{className:"photo__description",children:[Object(p.jsx)("h2",{className:"photo__name",children:t.name}),Object(p.jsxs)("div",{className:"photo__like-container",children:[Object(p.jsx)("button",{onClick:function(){a(t)},type:"button",className:"photo__like-button".concat(r)}),Object(p.jsx)("span",{className:"photo__like-count",children:t.likes.length})]})]})]})};var b=function(e){var t=e.onEditProfile,n=e.onAddPlace,a=e.onEditAvatar,c=e.onCardClick,i=e.cards,o=e.handleCardDelete,r=e.handleCardLike,u=s.a.useContext(j);return Object(p.jsxs)("main",{className:"content",children:[Object(p.jsxs)("section",{className:"profile section",children:[Object(p.jsxs)("button",{className:"profile__avatar-btn",onClick:a,type:"button",children:[Object(p.jsx)("img",{src:u.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(p.jsx)("span",{className:"profile__avatar-btn-icon"})]}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__edit-container",children:[Object(p.jsx)("h1",{className:"profile__name",children:u.name}),Object(p.jsx)("button",{type:"button",className:"profile__button profile__button_type_edit",onClick:t})]}),Object(p.jsx)("p",{className:"profile__activity",children:u.about})]}),Object(p.jsx)("button",{type:"button",className:"profile__button profile__button_type_add",onClick:n})]}),Object(p.jsx)("section",{className:"photos section",children:Object(p.jsx)("ul",{className:"photos__list",children:i.map((function(e){return Object(p.jsx)(h,{card:e,onCardClick:c,onCardLike:r,onCardDelete:o},e._id)}))})})]})};var _=function(e){var t=new Date;return Object(p.jsx)("footer",{className:"footer section",children:Object(p.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",t.getFullYear()," Mesto Russia"]})})};var m=function(e){var t=e.title,n=e.name,a=e.submitBtnText,s=e.children,c=e.isOpen,i=e.onClose,o=e.onSubmit;return Object(p.jsx)("div",{className:"popup".concat(c?" popup_opened":""),id:"".concat(n,"Popup"),children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-button",onClick:i}),Object(p.jsx)("h2",{className:"popup__title",children:t}),Object(p.jsxs)("form",{onSubmit:o,className:"input",name:"".concat(n,"Form"),children:[s,Object(p.jsx)("button",{type:"submit",className:"input__submit-button",children:a})]})]})})};var f=function(e){var t=e.card,n=e.onClose;return Object(p.jsx)("div",{className:"popup".concat(t.name?" popup_opened":""),id:"cardPopup",children:Object(p.jsxs)("figure",{className:"popup__image-container",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-button",onClick:n}),Object(p.jsx)("img",{src:t.link,alt:t.name,className:"popup__image"}),Object(p.jsx)("figcaption",{className:"popup__image-name",children:t.name})]})})},O=n(20),x=n(21),v=new(function(){function e(t,n,a){Object(O.a)(this,e),this._address=t,this._token=n,this._handleResponse=a}return Object(x.a)(e,[{key:"getCards",value:function(){return fetch("".concat(this._address,"/cards"),{method:"GET",headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"getUserData",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"setProfileInfo",value:function(e,t){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then(this._handleResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._handleResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then(this._handleResponse)}},{key:"changeLikeCardStatus",value:function(e,t){var n=t?"PUT":"DELETE";return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:n,headers:{authorization:this._token}}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._handleResponse)}}]),e}())("https://mesto.nomoreparties.co/v1/cohort-24","68a2e8bf-41f6-4309-86d1-09aae1dd8e56",(function(e){return e.ok?e.json():Promise.reject(e.status)}));var g=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,c=s.a.useContext(j),i=s.a.useState(""),o=Object(r.a)(i,2),u=o[0],l=o[1],d=s.a.useState(""),h=Object(r.a)(d,2),b=h[0],_=h[1];return s.a.useEffect((function(){l(c.name),_(c.about)}),[c,t]),Object(p.jsxs)(m,{name:"edit",submitBtnText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:u,about:b})},children:[Object(p.jsxs)("div",{className:"input__field",children:[Object(p.jsx)("input",{onChange:function(e){l(e.target.value)},value:u||"",type:"text",name:"name",id:"name-input",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",className:"input__text input__text_type_name",required:!0,minLength:"2",maxLength:"40"}),Object(p.jsx)("span",{className:"input__text-error",id:"name-input-error"})]}),Object(p.jsxs)("div",{className:"input__field",children:[Object(p.jsx)("input",{onChange:function(e){_(e.target.value)},value:b||"",type:"text",name:"activity",id:"activity-input",placeholder:"\u0427\u0435\u043c \u0432\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c",className:"input__text input__text_type_activity",required:!0,minLength:"2",maxLength:"200"}),Object(p.jsx)("span",{className:"input__text-error",id:"activity-input-error"})]})]})};var N=function(e){var t=e.onClose,n=e.isOpen,a=e.onUpdateAvatar,c=s.a.useRef();return Object(p.jsx)(m,{name:"avatar",submitBtnText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:n,onClose:t,onSubmit:function(e){e.preventDefault(),a({avatar:c.current.value}),c.current.value=""},children:Object(p.jsxs)("div",{className:"input__field",children:[Object(p.jsx)("input",{ref:c,type:"url",name:"link",id:"avatar-link-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"input__text input__text_type_link",required:!0}),Object(p.jsx)("span",{className:"input__text-error",id:"avatar-link-input-error"})]})})};var C=function(e){var t=e.onClose,n=e.isOpen,a=e.onAddPlace,c=s.a.useState(""),i=Object(r.a)(c,2),o=i[0],u=i[1],l=s.a.useState(""),d=Object(r.a)(l,2),j=d[0],h=d[1];return Object(p.jsxs)(m,{name:"add",submitBtnText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:n,onClose:t,onSubmit:function(e){e.preventDefault(),a({name:o,link:j}),u(""),h("")},children:[Object(p.jsxs)("div",{className:"input__field",children:[Object(p.jsx)("input",{onChange:function(e){u(e.target.value)},value:o,type:"text",name:"description",id:"description-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"input__text input__text_type_name",required:!0,minLength:"2",maxLength:"30"}),Object(p.jsx)("span",{className:"input__text-error",id:"description-input-error"})]}),Object(p.jsxs)("div",{className:"input__field",children:[Object(p.jsx)("input",{onChange:function(e){h(e.target.value)},value:j,type:"url",name:"link",id:"link-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"input__text input__text_type_link",required:!0}),Object(p.jsx)("span",{className:"input__text-error",id:"link-input-error"})]})]})};var k=function(e){var t=e.onSubmit,n=e.title,a=e.btnText,c=e.children,i=s.a.useState(""),o=Object(r.a)(i,2),u=o[0],l=o[1],d=s.a.useState(""),j=Object(r.a)(d,2),h=j[0],b=j[1];return Object(p.jsxs)("section",{className:"section section_place_auth",children:[Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(u,h)},className:"form",name:"registerForm",children:[Object(p.jsx)("h2",{className:"form__title",children:n}),Object(p.jsxs)("fieldset",{className:"form__inputs",children:[Object(p.jsx)("input",{onChange:function(e){l(e.target.value)},value:u||"",className:"form__input",type:"email",placeholder:"Email"}),Object(p.jsx)("input",{onChange:function(e){b(e.target.value)},value:h||"",className:"form__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})]}),Object(p.jsx)("input",{className:"form__btn",type:"submit",value:a})]}),c]})};var y=function(e){var t=e.onLogin;return Object(p.jsx)(k,{onSubmit:t,title:"\u0412\u0445\u043e\u0434",btnText:"\u0412\u043e\u0439\u0442\u0438"})};var S=function(e){var t=e.onRegister;return Object(p.jsx)(k,{onSubmit:t,title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",btnText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",children:Object(p.jsx)(l.b,{to:"/sign-in",className:"form__link",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})})},T=n.p+"static/media/error-cross.df8eddf6.svg",P=n.p+"static/media/accept.1b6082f8.svg";var E=function(e){var t=e.isOpen,n=e.isError,a=e.onClose;return Object(p.jsx)("div",{className:"popup".concat(t?" popup_opened":""),id:"infoPopup",children:Object(p.jsxs)("div",{className:"popup__container popup__container_place_info-popup",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-button",onClick:a}),Object(p.jsx)("img",{className:"popup__icon",src:n?T:P,alt:"\u0418\u043a\u043e\u043d\u043a\u0430"}),Object(p.jsx)("h2",{className:"popup__title popup__title_type_info-popup",children:n?"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.":"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]})})},L=n(23),D=n(24),A=["component"];var w=function(e){var t=e.component,n=Object(D.a)(e,A);return Object(p.jsx)(u.b,{children:function(){return n.loggedIn?Object(p.jsx)(t,Object(L.a)({},n)):Object(p.jsx)(u.a,{to:"./sign-in"})}})},I="https://auth.nomoreparties.co",R=function(e){return e.ok?e.json():Promise.reject(e.status)};var U=function(){var e=s.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=s.a.useState(!1),i=Object(r.a)(c,2),l=i[0],h=i[1],O=s.a.useState(!1),x=Object(r.a)(O,2),k=x[0],T=x[1],P=s.a.useState(!1),L=Object(r.a)(P,2),D=L[0],A=L[1],U=s.a.useState(!1),z=Object(r.a)(U,2),B=z[0],F=z[1],J=s.a.useState({}),q=Object(r.a)(J,2),G=q[0],H=q[1],M=s.a.useState({}),Y=Object(r.a)(M,2),K=Y[0],Q=Y[1],V=s.a.useState([]),W=Object(r.a)(V,2),X=W[0],Z=W[1],$=s.a.useState(!1),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=s.a.useState(""),se=Object(r.a)(ae,2),ce=se[0],ie=se[1],oe=Object(u.g)();function re(){a(!1),h(!1),T(!1),A(!1),H({})}return s.a.useEffect((function(){Promise.all([v.getUserData(),v.getCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];Q(n),Z(a)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430: ".concat(e.status))}))}),[]),s.a.useEffect((function(){var e;localStorage.getItem("jwt")&&(e=localStorage.getItem("jwt"),fetch("".concat(I,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(R)).then((function(e){ne(!0),ie(e.data.email),oe.push("/")})).catch((function(e){oe.push("/sign-in"),ne(!1),ie(""),console.log(e)}))}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(j.Provider,{value:K,children:[Object(p.jsx)(d,{loggedIn:te,userEmail:ce,onSignOut:function(){localStorage.removeItem("jwt"),ne(!1),ie(""),oe.push("/sign-in")}}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(w,{component:b,exact:!0,path:"/",loggedIn:te,onEditProfile:function(){a(!0)},onEditAvatar:function(){T(!0)},onAddPlace:function(){h(!0)},onCardClick:function(e){H(e)},cards:X,handleCardDelete:function(e){v.deleteCard(e._id).then((function(){Z((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e.status))}))},handleCardLike:function(e){var t=e.likes.some((function(e){return e._id===K._id}));v.changeLikeCardStatus(e._id,!t).then((function(t){Z((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043b\u0430\u0439\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e.status))}))}}),Object(p.jsx)(u.b,{path:"/sign-in",children:Object(p.jsx)(y,{onLogin:function(e,t){(function(e,t){return fetch("".concat(I,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then(R)})(e,t).then((function(t){localStorage.setItem("jwt",t.token),ne(!0),ie(e),oe.push("/")})).catch((function(e){F(!0),A(!0),console.log(e)}))}})}),Object(p.jsx)(u.b,{path:"/sign-up",children:Object(p.jsx)(S,{onRegister:function(e,t){(function(e,t){return fetch("".concat(I,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then(R)})(e,t).then((function(e){F(!1),oe.push("/sign-in")})).catch((function(e){F(!0),console.log(e)})).finally((function(){A(!0)}))}})}),Object(p.jsx)(u.b,{exact:!0,path:"*",children:Object(p.jsx)(u.a,{to:"/sign-in"})})]}),Object(p.jsx)(_,{}),Object(p.jsx)(m,{name:"delete",submitBtnText:"\u0414\u0430",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(p.jsx)(g,{onUpdateUser:function(e){v.setProfileInfo(e.name,e.about).then((function(e){Q(e),re()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status))}))},onClose:re,isOpen:n}),Object(p.jsx)(N,{onUpdateAvatar:function(e){v.setUserAvatar(e.avatar).then((function(e){Q(e),re()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e.status))}))},onClose:re,isOpen:k}),Object(p.jsx)(C,{onAddPlace:function(e){v.addCard(e.name,e.link).then((function(e){Z([e].concat(Object(o.a)(X))),re()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e.status))}))},onClose:re,isOpen:l}),Object(p.jsx)(f,{card:G,onClose:re}),Object(p.jsx)(E,{isOpen:D,isError:B,onClose:re})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(l.a,{children:Object(p.jsx)(U,{})})}),document.getElementById("root")),z()}},[[36,1,2]]]);
//# sourceMappingURL=main.60677a72.chunk.js.map