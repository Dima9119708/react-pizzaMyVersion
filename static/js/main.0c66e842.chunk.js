(this["webpackJsonpmy-pizza-react"]=this["webpackJsonpmy-pizza-react"]||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/pizza-logo.f3327011.svg"},38:function(e,t,a){e.exports=a.p+"static/media/empty-cart.ceb2faf0.png"},41:function(e,t,a){e.exports=a(69)},46:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),i=(a(46),a(35)),o=a.n(i),s=a(3),u=function(e){return{type:"SET_PIZZAS",pizzas:e}},m=a(37),E=a.n(m),d=a(10);function p(){var e=Object(s.c)((function(e){return{countCards:e.countCards,totalCount:e.totalCount}})),t=e.countCards,a=void 0===t?0:t,n=e.totalCount,r=void 0===n?0:n;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement(d.b,{to:"/react-pizzaMyVersion"},c.a.createElement("div",{className:"header__logo"},c.a.createElement("img",{width:"38",src:E.a,alt:"Pizza logo"}),c.a.createElement("div",null,c.a.createElement("h1",null,"React Pizza"),c.a.createElement("p",null,"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439")))),c.a.createElement(d.b,{to:"/react-pizzaMyVersion/card"},c.a.createElement("div",{className:"header__cart"},c.a.createElement("button",{className:"button button--cart"},c.a.createElement("span",null,r," \u20bd"),c.a.createElement("div",{className:"button__delimiter"}),c.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement("span",null,a))))))}var b=a(4),v=["\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"],C=c.a.memo((function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.category})),a=function(t){return e({type:"SET_CATEGORY",category:t})};return c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){return a("\u0412\u0441\u0435")},className:"\u0412\u0441\u0435"===t?"active":""},"\u0412\u0441\u0435"),v&&v.map(function(e,t){return function(a,n){return c.a.createElement("li",{onClick:function(){return t(n)},className:e===n?"active":"",key:n+a},a)}}(t,a)))})),f=a(11),h=["\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438","\u0446\u0435\u043d\u0435","\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"];var _=c.a.memo((function(){var e=Object(n.useState)(0),t=Object(f.a)(e,2),a=t[0],r=t[1],l=Object(s.c)((function(e){return e.sort})),i=Object(s.b)(),o=0===a?1:0;return c.a.createElement("div",{className:"sort"},c.a.createElement("div",{className:"sort__label"},c.a.createElement("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:0===a?"rotate(180deg)":"rotate(0deg)",transition:"transform .2s linear"}},c.a.createElement("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})),c.a.createElement("b",null,"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"),c.a.createElement("span",{onClick:function(){r(o)}},l)),c.a.createElement("div",{className:1===a?"sort__popup sort__popup--active":"sort__popup",style:{opacity:a,transition:"opacity .2s linear, margin-top .2s linear"}},c.a.createElement("ul",null,h&&h.map(function(e,t){return function(a){return c.a.createElement("li",{className:e===a?"active":"",onClick:function(){return t(a)},key:a},a)}}(l,(function(e){i({type:"SET_SORT",sort:e}),r(o)}))))))}));function k(e){return c.a.createElement("div",{className:e.className},e.children)}function j(e){var t=e.id,a=e.imageUrl,r=e.name,l=e.price,i=e.sizes,o=e.types,u=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],m=[26,30,40],E=Object(n.useState)(o[0]),d=Object(f.a)(E,2),p=d[0],b=d[1],v=Object(n.useState)(i[0]),C=Object(f.a)(v,2),h=C[0],_=C[1],j=Object(s.b)(),O=Object(s.c)((function(e){return e.basket||{}})),g={};Object.keys(O).forEach((function(e){t===O[e].id&&(g[r]?g[r]+=O[e].count:g[r]=O[e].count)}));return c.a.createElement(k,{className:"animate-start"},c.a.createElement("div",{className:"pizza-block"},c.a.createElement("img",{className:"pizza-block__image",src:a,alt:"Pizza"}),c.a.createElement("h4",{className:"pizza-block__title"},r),c.a.createElement("div",{className:"pizza-block__selector"},c.a.createElement("ul",null,u&&u.map(function(e,t,a){return function(n,r){return c.a.createElement("li",{key:n,className:"\n                ".concat(t.includes(r)?"":"disabled","\n                ").concat(e===r?"active":"","\n            "),onClick:function(){return a(r)}},n)}}(p,o,(function(e){b(e)})))),c.a.createElement("ul",null,m&&m.map(function(e,t,a){return function(n){return c.a.createElement("li",{key:n,className:"\n                ".concat(t.includes(n)?"":"disabled","\n                ").concat(e===n?"active":"","\n            "),onClick:function(){return a(n)}},n," \u0441\u043c.")}}(h,i,(function(e){_(e)}))))),c.a.createElement("div",{className:"pizza-block__bottom"},c.a.createElement("div",{className:"pizza-block__price"},"\u043e\u0442 ",l," \u20bd"),c.a.createElement("div",{onClick:function(){var e=t+u[p]+h,n={type:u[p],size:h,count:O[e]?O[e].count+=1:1,price:O[e]?O[e].count*l:l,priceStatic:l,name:r,imageUrl:a,id:t};j(function(e,t,a){return{type:"SET_BASKET",id:e,formatId:t,params:a}}(t,e,n))},className:"button button--outline button--add"},c.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})),c.a.createElement("span",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),g[r]?c.a.createElement("i",null,g[r]):""))))}var O=a(15);function g(e,t){return"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438"===e?Object(O.a)(t.sort((function(e,t){return t.rating-e.rating}))):"\u0446\u0435\u043d\u0435"===e?Object(O.a)(t.sort((function(e,t){return t.price-e.price}))):"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"===e?t.sort((function(e,t){return e.name<t.name?-1:Number(e.name>t.name)})):void 0}function N(e){return e?localStorage.setItem("react-pizza",JSON.stringify(e)):JSON.parse(localStorage.getItem("react-pizza"))}function w(e,t){return c.a.createElement(j,Object.assign({key:e.id+""+t},e))}function z(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e||{}})),a=t.staticPizza,r=void 0===a?[]:a,l=t.category,i=t.sort,o=t.pizzas;Object(n.useEffect)((function(){e(u(function(e,t,a){var n=[];if("\u0412\u0441\u0435"===t)n.push.apply(n,Object(O.a)(g(a,e)));else if("number"===typeof t){var c=e.reduce((function(e,a){return t===a.category&&e.push(a),e}),[]);n.push.apply(n,Object(O.a)(g(a,c)))}return n}(r,l,i)))}),[e,r,l,i]);return c.a.createElement("div",{className:"container "},c.a.createElement("div",{className:"content__top"},c.a.createElement("div",{className:"categories"},c.a.createElement(C,null)),c.a.createElement(_,null)),c.a.createElement("h2",{className:"content__title"},"number"===typeof l?v[l]:l," \u043f\u0438\u0446\u0446\u044b"),c.a.createElement("div",{className:"content__items"},o&&o.map(w)))}var L=a(38),y=a.n(L);function S(){return c.a.createElement("div",{className:"container container--cart"},c.a.createElement("div",{className:"cart cart--empty"},c.a.createElement("h2",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f ",c.a.createElement("span",{role:"img","aria-label":"Empty cart"},"\ud83d\ude15")," "),c.a.createElement("p",null,"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443. "),c.a.createElement("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."),c.a.createElement("img",{src:y.a,alt:"Empty cart"}),c.a.createElement(d.b,{to:"/react-pizzaMyVersion"},c.a.createElement("button",{className:"button button--black"},c.a.createElement("span",null,"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434")))))}function T(e){var t=e.keyLS,a=e.id,r=e.imageUrl,l=e.type,i=e.size,o=e.count,u=e.price,m=e.priceStatic,E=e.name,d=Object(s.b)(),p=Object(n.useRef)(null);return c.a.createElement("div",{className:"cart__item"},c.a.createElement("div",{className:"cart__item-img"},c.a.createElement("img",{className:"pizza-block__image",src:r,alt:"Pizza"})),c.a.createElement("div",{className:"cart__item-info"},c.a.createElement("h3",null,E),c.a.createElement("p",null,l," \u0442\u0435\u0441\u0442\u043e, ",i," \u0441\u043c.")),c.a.createElement("div",{className:"cart__item-count"},c.a.createElement("div",{className:"button button--outline button--circle cart__item-count-minus",onClick:function(){o>1&&d(function(e,t,a,n){return{type:"SET_DECREMENT",DECREMENT:e,id:t,price:a,cardID:n}}(o-=1,t,u-=m,a))}},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),c.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"}))),c.a.createElement("b",null,o),c.a.createElement("div",{className:"button button--outline button--circle cart__item-count-plus",onClick:function(){d(function(e,t,a,n){return{type:"SET_IN\u0421REMENT","IN\u0421REMENT":e,id:t,price:a,cardID:n}}(o+=1,t,m*=o,a))}},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),c.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})))),c.a.createElement("div",{className:"cart__item-price"},c.a.createElement("b",{ref:p},u," \u20bd")),c.a.createElement("div",{onClick:function(){d(function(e,t){return{type:"SET_DELETE_CARD",key:e,id:t}}(t,a))},className:"cart__item-remove"},c.a.createElement("div",{className:"button button--outline button--circle"},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),c.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})))))}var M=a(39),V=a.n(M);function B(){var e=Object(s.c)((function(e){return e||{}})),t=Object(s.b)(),a=Object(n.useState)(0),r=Object(f.a)(a,2),l=r[0],i=r[1],o=e.countCards,u=e.totalCount,m=e.basket,E=Math.ceil(Object.keys(m).length/5),p=5*l,b=p+5,v=function(e){return Object.keys(e).map((function(t,a){return c.a.createElement(T,Object.assign({key:t,keyLS:t},e[t]))}))}(m).slice(p,b);return v.length||i(l-1),c.a.createElement("div",{className:"container container--cart"},c.a.createElement("div",{className:"cart"},c.a.createElement("div",{className:"cart__top"},c.a.createElement("h2",{className:"content__title"},c.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),c.a.createElement("div",{className:"cart__clear"},c.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement("span",{onClick:function(){t({type:"SET_CLEAR_ALL"})}},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))),c.a.createElement("div",{className:"content__items"},v),c.a.createElement("div",{style:{display:Object.keys(m).length>5?"flex":"none"},className:"pagination"},c.a.createElement(V.a,{previousLabel:!1,nextLabel:!1,activeClassName:"active",onPageChange:function(e){return i(e.selected)},pageCount:E})),c.a.createElement("div",{className:"cart__bottom"},c.a.createElement("div",{className:"cart__bottom-details"},c.a.createElement("span",null," \u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",c.a.createElement("b",null,o," \u0448\u0442.")," "),c.a.createElement("span",null," \u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",c.a.createElement("b",null,u," \u20bd")," ")),c.a.createElement("div",{className:"cart__bottom-buttons"},c.a.createElement(d.b,{to:"/react-pizzaMyVersion"},c.a.createElement("button",{className:"button button--outline button--add go-back-btn"},c.a.createElement("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement("span",null,"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"))),c.a.createElement("div",{className:"button pay-btn"},c.a.createElement("span",null,"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"))))))}function x(){var e=Object(s.c)((function(e){return e.basket||[]}));return Object.values(e).length?c.a.createElement(B,null):c.a.createElement(S,null)}function A(){var e=Object(b.e)().pathname,t=Object(s.c)((function(e){return e||{}})),a=t.basket,r=void 0===a?{}:a,l=t.saveId,i=t.countCards,o=t.totalCount;return Object(n.useEffect)((function(){N({basket:r,saveId:l,countCards:i,totalCount:o})}),[r,l,i,o]),Object(n.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[e]),c.a.createElement("div",{className:"wrapper"},c.a.createElement(p,null),c.a.createElement("div",{className:"content"},c.a.createElement(b.a,{exact:!0,path:"/react-pizzaMyVersion/"},c.a.createElement(k,{className:"animate-start"},c.a.createElement(z,null))),c.a.createElement(b.a,{path:"/react-pizzaMyVersion/card"},c.a.createElement(k,{className:"animate-start"},c.a.createElement(x,null)))))}var I=function(){var e=Object(s.b)();return Object(n.useEffect)((function(){o.a.get("/react-pizzaMyVersion/db.json").then((function(t){var a=t.data;e({type:"SET_STATIC_PIZZAS",pizzas:a.pizzas}),e(u(a.pizzas))}))}),[e]),c.a.createElement("div",{className:"App"},c.a.createElement(A,null))},Z=a(18),R=a(20),D=a(1),H=Object(D.a)({category:"\u0412\u0441\u0435",sort:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438"},N()),P=function(e){var t=Object(D.a)({},e);return t.countCards=Object.keys(t.basket).length,t.totalCount=Object.values(t.basket).reduce((function(e,t){return e+t.price}),0),Object(D.a)({},t)};var W=Object(Z.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PIZZAS":return Object(D.a)(Object(D.a)({},e),{},{pizzas:t.pizzas});case"SET_CATEGORY":return Object(D.a)(Object(D.a)({},e),{},{category:t.category});case"SET_SORT":return Object(D.a)(Object(D.a)({},e),{},{sort:t.sort});case"SET_STATIC_PIZZAS":return Object(D.a)(Object(D.a)({},e),{},{staticPizza:t.pizzas});case"SET_BASKET":var a=Object(D.a)({},e);return a.basket=Object(D.a)(Object(D.a)({},a.basket),{},Object(R.a)({},t.formatId,t.params)),Object(D.a)(Object(D.a)(Object(D.a)({},e),a),P(a));case"SET_IN\u0421REMENT":var n=Object(D.a)({},e);return n.basket[t.id].count=t.IN\u0421REMENT,n.basket[t.id].price=t.price,Object(D.a)(Object(D.a)(Object(D.a)({},e),n),P(n));case"SET_DECREMENT":var c=Object(D.a)({},e);return c.basket[t.id].count=t.DECREMENT,c.basket[t.id].price=t.price,Object(D.a)(Object(D.a)(Object(D.a)({},e),c),P(c));case"SET_DELETE_CARD":var r=Object(D.a)({},e);return delete r.basket[t.key],Object(D.a)(Object(D.a)(Object(D.a)({},e),r),P(r));case"SET_CLEAR_ALL":var l=Object(D.a)({},e);return l.basket={},Object(D.a)(Object(D.a)(Object(D.a)({},e),l),P(l));default:return Object(D.a)({},e)}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),U=a(40);a.n(U).a.polyfill(),l.a.render(c.a.createElement(d.a,null,c.a.createElement(s.a,{store:W},c.a.createElement(I,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.0c66e842.chunk.js.map