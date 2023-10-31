import{_ as z,h as b,j as C,o as p,c as f,k as d,p as U,m as Q,a as A,d as I,V as D,e as M,K as Y,u as B,a1 as J,x as N,O as W,b as j,l as E,Q as X,C as Z,H as _,a2 as tt,w as k,a3 as P,s as S,a4 as et,a5 as nt,a6 as st,a7 as ot,a8 as at,a9 as it,aa as rt,ab as ut,ac as ct,ad as pt,y as lt,ae as dt,af as ht,ag as mt}from"./chunks/framework.3cdd69ff.js";import{t as $}from"./chunks/theme.cb391902.js";function T(){return T=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s},T.apply(this,arguments)}var ft={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(s){},onComplete:function(s){},preStringTyped:function(s,e){},onStringTyped:function(s,e){},onLastStringBackspaced:function(s){},onTypingPaused:function(s,e){},onTypingResumed:function(s,e){},onReset:function(s){},onStop:function(s,e){},onStart:function(s,e){},onDestroy:function(s){}},yt=new(function(){function s(){}var e=s.prototype;return e.load=function(t,n,o){if(t.el=typeof o=="string"?document.querySelector(o):o,t.options=T({},ft,n),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(y){return y.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var i=Array.prototype.slice.apply(t.stringsElement.children),a=i.length;if(a)for(var r=0;r<a;r+=1)t.strings.push(i[r].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var n="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+n+"]")){var o=document.createElement("style");o.setAttribute(n,"true"),o.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(o)}},e.appendFadeOutAnimationCss=function(t){var n="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+n+"]")){var o=document.createElement("style");o.setAttribute(n,"true"),o.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(o)}},s}()),L=new(function(){function s(){}var e=s.prototype;return e.typeHtmlChars=function(t,n,o){if(o.contentType!=="html")return n;var i=t.substring(n).charAt(0);if(i==="<"||i==="&"){var a;for(a=i==="<"?">":";";t.substring(n+1).charAt(0)!==a&&!(1+ ++n>t.length););n++}return n},e.backSpaceHtmlChars=function(t,n,o){if(o.contentType!=="html")return n;var i=t.substring(n).charAt(0);if(i===">"||i===";"){var a;for(a=i===">"?"<":"&";t.substring(n-1).charAt(0)!==a&&!(--n<0););n--}return n},s}()),gt=function(){function s(t,n){yt.load(this,n,t),this.begin()}var e=s.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,n){var o=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),a=1;this.pause.status!==!0?this.timeout=setTimeout(function(){n=L.typeHtmlChars(t,n,o);var r=0,u=t.substring(n);if(u.charAt(0)==="^"&&/^\^\d+/.test(u)){var y=1;y+=(u=/\d+/.exec(u)[0]).length,r=parseInt(u),o.temporaryPause=!0,o.options.onTypingPaused(o.arrayPos,o),t=t.substring(0,n)+t.substring(n+y),o.toggleBlinking(!0)}if(u.charAt(0)==="`"){for(;t.substring(n+a).charAt(0)!=="`"&&(a++,!(n+a>t.length)););var O=t.substring(0,n),G=t.substring(O.length+1,n+a),K=t.substring(n+a+1);t=O+G+K,a--}o.timeout=setTimeout(function(){o.toggleBlinking(!1),n>=t.length?o.doneTyping(t,n):o.keepTyping(t,n,a),o.temporaryPause&&(o.temporaryPause=!1,o.options.onTypingResumed(o.arrayPos,o))},r)},i):this.setPauseStatus(t,n,!0)},e.keepTyping=function(t,n,o){n===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var i=t.substring(0,n+=o);this.replaceText(i),this.typewrite(t,n)},e.doneTyping=function(t,n){var o=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){o.backspace(t,n)},this.backDelay))},e.backspace=function(t,n){var o=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=L.backSpaceHtmlChars(t,n,o);var a=t.substring(0,n);if(o.replaceText(a),o.smartBackspace){var r=o.strings[o.arrayPos+1];o.stopNum=r&&a===r.substring(0,n)?n:0}n>o.stopNum?(n--,o.backspace(t,n)):n<=o.stopNum&&(o.arrayPos++,o.arrayPos===o.strings.length?(o.arrayPos=0,o.options.onLastStringBackspaced(),o.shuffleStringsIfNeeded(),o.begin()):o.typewrite(o.strings[o.sequence[o.arrayPos]],n))},i)}else this.setPauseStatus(t,n,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,n,o){this.pause.typewrite=o,this.pause.curString=t,this.pause.curStrPos=n},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(n){t.stop()}),this.el.addEventListener("blur",function(n){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},s}();const vt=s=>(U("data-v-1aa27614"),s=s(),Q(),s),_t={class:"middle"},bt=vt(()=>d("div",{class:"title animate__animated animate__bounceInDown"},[A(" Guys,"),d("br"),A(" Nice to meet U ")],-1)),Ct={class:"typed"},kt={__name:"Middle",setup(s){const e=b(null),t=b([]);C(()=>{n()});async function n(){for(let r=0;r<3;r++){const u=await i();t.value.push(u)}o()}function o(){console.log(t.value),new gt(e.value,{strings:t.value,typeSpeed:100,startDelay:100,backSpeed:100,smartBackspace:!0,stringsElement:null,fadeOut:!0,loop:!0,loopCount:1/0,fadeOutClass:"typed-fade-out",showCursor:!0,cursorChar:"🖌",autoInsertCss:!0,bindInputFocusEvents:!0})}async function i(){const r=await fetch("https://v1.hitokoto.cn"),{hitokoto:u}=await r.json();return u}function a(){}return(r,u)=>(p(),f("div",_t,[bt,d("div",Ct,[d("span",{class:"text",ref_key:"typed",ref:e},null,512)]),d("a",{href:"blogs/other/about.html"},[d("div",{class:"btn",onClick:a},"开始 🎉")])]))}},wt=z(kt,[["__scopeId","data-v-1aa27614"]]),Et=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],Pt=I({__name:"Giscus",props:{id:{},host:{},repo:{},repoId:{},category:{},categoryId:{},mapping:{},term:{},theme:{},strict:{},reactionsEnabled:{},emitMetadata:{},inputPosition:{},lang:{},loading:{}},setup(s){const e=b(!1);return C(()=>{e.value=!0,D(()=>import("./chunks/giscus-2a044aea.497f0bd4.js"),[])}),(t,n)=>e.value?(p(),f("giscus-widget",{key:0,id:t.id,host:t.host,repo:t.repo,repoid:t.repoId,category:t.category,categoryid:t.categoryId,mapping:t.mapping,term:t.term,strict:t.strict,reactionsenabled:t.reactionsEnabled,emitmetadata:t.emitMetadata,inputposition:t.inputPosition,theme:t.theme,lang:t.lang,loading:t.loading},null,8,Et)):M("",!0)}}),St={class:"comments"},H=I({__name:"giscus",setup(s){const e=Y(),{isDark:t}=B(),n=J({repo:"ppc-chen822/repo",repoId:"R_kgDOKfV9jA",category:"Q&A",categoryId:"DIC_kwDOKfV9jM4Cae0Y",mapping:"title",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",lang:"zh-CN",loading:"lazy"}),o=b(!0);return N(()=>e.path,()=>{o.value=!1,W(()=>{o.value=!0})},{immediate:!0}),(i,a)=>(p(),f("div",St,[o.value?(p(),j(E(Pt),{key:0,repo:n.repo,"repo-id":n.repoId,category:n.category,"category-id":n.categoryId,mapping:n.mapping,"reactions-enabled":n.reactionsEnabled,"emit-metadata":n.emitMetadata,"input-position":n.inputPosition,theme:E(t)?"dark":"light",lang:n.lang,loading:n.loading},null,8,["repo","repo-id","category","category-id","mapping","reactions-enabled","emit-metadata","input-position","theme","lang","loading"])):M("",!0)]))}});function Tt(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var F,h,c,R,w,x,l,g=!1,v=[];typeof document<"u"&&(R=function(s){return g||document.readyState==="interactive"||document.readyState==="complete"?s.call(document):v.push(function(){return s.call(this)}),this},x=function(){for(var s=0,e=v.length;s<e;s++)v[s].apply(document);v=[]},l=function(){g||(g=!0,x.call(window),document.removeEventListener?document.removeEventListener("DOMContentLoaded",l,!1):document.attachEvent&&(document.detachEvent("onreadystatechange",l),window==window.top&&(clearInterval(w),w=null)))},document.addEventListener?document.addEventListener("DOMContentLoaded",l,!1):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){/loaded|complete/.test(document.readyState)&&l()}),window==window.top&&(w=setInterval(function(){try{g||document.documentElement.doScroll("left")}catch{return}l()},5))));F={fetch:function(s,e){var t="BusuanziCallback_"+Math.floor(1099511627776*Math.random());s=s.replace("=BusuanziCallback","="+t),c=document.createElement("SCRIPT"),c.type="text/javascript",c.defer=!0,c.src=s,document.getElementsByTagName("HEAD")[0].appendChild(c),window[t]=this.evalCall(e)},evalCall:function(s){return function(e){R(function(){try{s(e),c&&c.parentElement&&c.parentElement.removeChild&&c.parentElement.removeChild(c)}catch(t){console.log(t),h.hides()}})}}};const q=()=>{h&&h.hides(),F.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",function(s){h.texts(s),h.shows()})};h={bszs:["site_pv","page_pv","site_uv"],texts:function(s){this.bszs.map(function(e){var t=document.getElementById("busuanzi_value_"+e);t&&(t.innerHTML=s[e])})},hides:function(){this.bszs.map(function(s){var e=document.getElementById("busuanzi_container_"+s);e&&(e.style.display="none")})},shows:function(){this.bszs.map(function(s){var e=document.getElementById("busuanzi_container_"+s);e&&(e.style.display="inline")})}};typeof document<"u"&&q();var It={fetch:q},Bt=It;const Ot=Tt(Bt),At={class:"busuanzi"},Lt=X('<span id="busuanzi_container_site_pv" style="display:none;"> 本站总访问量 <span id="busuanzi_value_site_pv"></span>次 <span class="post-meta-divider">|</span></span><span id="busuanzi_container_site_uv" style="display:none;"> 本站访客数 <span id="busuanzi_value_site_uv"></span>人 </span>',2),xt=[Lt],zt={__name:"Busuanzi",setup(s){return C(()=>{Ot.fetch()}),(e,t)=>(p(),f("div",At,xt))}},Dt={components:{Busuanzi:zt}},Mt={class:"layout_bot"};function Nt(s,e,t,n,o,i){const a=Z("Busuanzi");return p(),f("div",Mt,[_(a)])}const jt=z(Dt,[["render",Nt]]),$t={__name:"Layout",setup(s){tt();const{Layout:e,Nav:t}=$;return B(),(n,o)=>(p(),j(E(e),null,{"home-hero-before":k(()=>[_(wt)]),"layout-bottom":k(()=>[_(jt)]),"doc-after":k(()=>[_(H)]),_:1}))}},Ht={...$,Layout:()=>P($t,null,{"doc-after":()=>P(H)}),enhanceApp({app:s,router:e,siteData:t}){typeof window<"u"&&N(()=>e.route.data.relativePath,()=>Ft(location.pathname==="/repo/"),{immediate:!0})}};function Ft(s){let e="";if(s){if(e)return;e=document.createElement("style"),e.innerHTML=`
	  :root {
		animation: rainbow 12s linear infinite !important;
	  }`,document.body.appendChild(e)}else{if(!e)return;e.remove(),e=void 0}}function V(s){if(s.extends){const e=V(s.extends);return{...e,...s,async enhanceApp(t){e.enhanceApp&&await e.enhanceApp(t),s.enhanceApp&&await s.enhanceApp(t)}}}return s}const m=V(Ht),Rt=I({name:"VitePressApp",setup(){const{site:s}=B();return C(()=>{lt(()=>{document.documentElement.lang=s.value.lang,document.documentElement.dir=s.value.dir})}),dt(),ht(),mt(),m.setup&&m.setup(),()=>P(m.Layout)}});async function qt(){const s=Gt(),e=Vt();e.provide(nt,s);const t=st(s.route);return e.provide(ot,t),e.component("Content",at),e.component("ClientOnly",it),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),m.enhanceApp&&await m.enhanceApp({app:e,router:s,siteData:rt}),{app:e,router:s,data:t}}function Vt(){return ut(Rt)}function Gt(){let s=S,e;return ct(t=>{let n=pt(t),o=null;return n&&(s&&(e=n),(s||e===n)&&(n=n.replace(/\.js$/,".lean.js")),o=D(()=>import(n),[])),S&&(s=!1),o},m.NotFound)}S&&qt().then(({app:s,router:e,data:t})=>{e.go().then(()=>{et(e.route,t.site),s.mount("#app")})});export{qt as createApp};
