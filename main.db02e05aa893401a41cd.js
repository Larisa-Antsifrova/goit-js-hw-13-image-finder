(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{N1H9:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var l,r=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,i="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="photo-card">\r\n  <img class="picture" src="'+c(typeof(l=null!=(l=u(n,"webformatURL")||(null!=t?u(t,"webformatURL"):t))?l:s)===i?l.call(r,{name:"webformatURL",hash:{},data:o,loc:{start:{line:3,column:28},end:{line:3,column:44}}}):l)+'" alt="'+c(typeof(l=null!=(l=u(n,"tags")||(null!=t?u(t,"tags"):t))?l:s)===i?l.call(r,{name:"tags",hash:{},data:o,loc:{start:{line:3,column:51},end:{line:3,column:59}}}):l)+'" data-source="'+c(typeof(l=null!=(l=u(n,"largeImageURL")||(null!=t?u(t,"largeImageURL"):t))?l:s)===i?l.call(r,{name:"largeImageURL",hash:{},data:o,loc:{start:{line:3,column:74},end:{line:3,column:91}}}):l)+'" />\r\n\r\n  <div class="stats">\r\n    <p class="stats-item">\r\n      <i class="material-icons">thumb_up</i>\r\n      '+c(typeof(l=null!=(l=u(n,"likes")||(null!=t?u(t,"likes"):t))?l:s)===i?l.call(r,{name:"likes",hash:{},data:o,loc:{start:{line:8,column:6},end:{line:8,column:15}}}):l)+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">visibility</i>\r\n      '+c(typeof(l=null!=(l=u(n,"views")||(null!=t?u(t,"views"):t))?l:s)===i?l.call(r,{name:"views",hash:{},data:o,loc:{start:{line:12,column:6},end:{line:12,column:15}}}):l)+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">comment</i>\r\n      '+c(typeof(l=null!=(l=u(n,"comments")||(null!=t?u(t,"comments"):t))?l:s)===i?l.call(r,{name:"comments",hash:{},data:o,loc:{start:{line:16,column:6},end:{line:16,column:18}}}):l)+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">cloud_download</i>\r\n      '+c(typeof(l=null!=(l=u(n,"downloads")||(null!=t?u(t,"downloads"):t))?l:s)===i?l.call(r,{name:"downloads",hash:{},data:o,loc:{start:{line:20,column:6},end:{line:20,column:19}}}):l)+"\r\n    </p>\r\n  </div>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var l;return null!=(l=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:24,column:9}}}))?l:""},useData:!0})},OPH6:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("OPH6");var a={galleryListRef:document.querySelector(".gallery"),searchFormRef:document.getElementById("search-form"),loadMoreBtnRef:document.querySelector('[data-action="load-more"]'),modalContainer:document.querySelector("div.lightbox"),modalCloseBtn:document.querySelector('button[data-action="close-lightbox"]'),modalImageElement:document.querySelector(".lightbox__image"),overlay:document.querySelector("div.lightbox__overlay")},o=n("N1H9"),l=n.n(o),r=(n("JBxO"),n("FdtR"),{searchQuery:"",pageNumber:1,perPage:12,totalPages:0,isLastPage:!1,fetchImages:function(){var e=this,t="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+this.searchQuery+"&page="+this.pageNumber+"&per_page="+this.perPage+"&key=19692208-b21bb8a95ceb217f14156bc9c";return fetch(t).then((function(e){return e.json()})).then((function(t){var n=t.hits,a=t.totalHits;return e.totalPages=Math.ceil(a/e.perPage),e.totalPages===e.pageNumber?e.isLastPage=!0:e.isLastPage=!1,e.totalPages?(e.incrementPage(),n):Promise.reject("No matches were found! Try again :)")}))},resetPage:function(){this.pageNumber=1},incrementPage:function(){this.pageNumber+=1},get query(){return this.searchQuery},set query(e){this.searchQuery=e}});var s=function(e,t){t.insertAdjacentHTML("beforeend",e)},i=function(e){e.innerHTML=""},c=a.loadMoreBtnRef,u=function(){c.classList.remove("is-hidden")},m=function(){c.classList.add("is-hidden")},d=function(){c.disabled=!1,c.textContent="Load more"},p=function(){c.disabled=!0,c.textContent="On the way..."},f=n("dIfx"),h=(n("mNaS"),n("UOjr"),{dir1:"up",dir2:"left",firstpos1:25,firstpos2:25,spacing1:36,spacing2:36,push:"top",context:document.body});var g=a.galleryListRef,y=a.searchFormRef,v=a.loadMoreBtnRef,b=s,w=i;function L(){r.fetchImages().then((function(e){return l()(e)})).then((function(e){b(e,g),r.pageNumber>2&&window.scrollBy({top:window.innerHeight-110,behavior:"smooth"}),r.isLastPage?m():(u(),d())})).catch((function(e){var t;m(),t=e,f.a.error({text:t,title:"Oops!",delay:4e3,stack:h})}))}m(),y.addEventListener("submit",(function(e){e.preventDefault(),r.query=y.elements.query.value,w(g),r.resetPage(),L(),y.reset()})),v.addEventListener("click",(function(){p(),L()}));n("dcBu");var P=a.modalContainer,k=a.modalCloseBtn,x=a.modalImageElement,R=a.overlay;function E(){x.setAttribute("src",""),P.classList.remove("is-open"),window.removeEventListener("keydown",q)}function q(e){"Escape"===e.code&&E()}a.galleryListRef.addEventListener("click",(function(e){if(e.preventDefault(),"IMG"!==e.target.nodeName)return;var t=e.target.dataset.source;x.setAttribute("src",t),P.classList.add("is-open"),window.addEventListener("keydown",q)})),k.addEventListener("click",E),R.addEventListener("click",E)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.db02e05aa893401a41cd.js.map