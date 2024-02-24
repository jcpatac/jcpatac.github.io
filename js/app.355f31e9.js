(function(){"use strict";var t={9707:function(t,e,a){var o=a(2856),s=function(){var t=this,e=t._self._c;return e("div",{class:{"text-dark":!t.darkMode,"text-light":t.darkMode,"bg-dark":t.darkMode},attrs:{id:"app"}},[e("Navbar",{attrs:{"dark-mode":t.darkMode},on:{scroll:t.scrollTo,darkMode:t.switchMode}}),e("div",{staticClass:"parent"},[e("Home",{attrs:{darkMode:t.darkMode}}),e("About",{attrs:{id:"about",darkMode:t.darkMode}}),e("Skills",{attrs:{id:"skills",darkMode:t.darkMode}}),e("Footer")],1)],1)},i=[],n=(a(4114),function(){var t=this,e=t._self._c;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top p-st",class:{"bg-light":!t.darkMode,"navbar-blur":t.navbarSetting,"bg-dark2":t.darkMode}},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","home")}}},[e("Logo",{attrs:{"dark-mode":t.darkMode}})],1),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item mx-2"},[e("a",{staticClass:"nav-link",class:{"text-light":t.darkMode},attrs:{href:"/about"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","about")}}},[t._v(" About ")])]),e("li",{staticClass:"nav-item mx-2"},[e("a",{staticClass:"nav-link",class:{"text-light":t.darkMode},attrs:{href:"/skills"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","skills")}}},[t._v(" Skills ")])]),e("li",{staticClass:"nav-item mx-2"},[e("a",{staticClass:"nav-link",class:{"text-light":t.darkMode},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.switchMode.apply(null,arguments)}}},[e("i",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.darkMode?"Light Mode":"Dark Mode",expression:"darkMode ? 'Light Mode' : 'Dark Mode'",modifiers:{bottom:!0}}],class:{"fas fa-moon":t.darkMode,"far fa-moon":!t.darkMode}})])])])])])])])}),r=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticStyle:{color:"gray","font-size":"23px"}},[e("i",{staticClass:"fas fa-bars"})])])}],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo-div"},[e("span",{staticClass:"logo-title-name",class:{pgray:!t.darkMode,"text-light":t.darkMode}},[t._v(" "+t._s(t.name)+" ")])])},d=[],c={name:"Logo",props:{darkMode:{type:Boolean,required:!0}},data(){return{name:"johncaesarpatac"}},computed:{},mounted(){},methods:{}},u=c,p=a(1656),m=(0,p.A)(u,l,d,!1,null,null,null),f=m.exports,v={name:"Navbar",components:{Logo:f},props:{darkMode:{type:Boolean,required:!0}},data(){return{navbarSetting:!1,localDarkMode:this.darkMode}},computed:{},mounted(){},methods:{switchMode(){this.localDarkMode=!this.localDarkMode,this.$emit("darkMode",this.localDarkMode)}}},b=v,h=(0,p.A)(b,n,r,!1,null,"2d02d2a6",null),k=h.exports,g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-5 p-st",class:{"bg-white":!t.darkMode,"bg-dark":t.darkMode}},[e("div",{staticClass:"container",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center"},[e("img",{attrs:{src:t.picture}})]),e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5"},[e("span",{staticClass:"home-title",class:{pgray:!t.darkMode,"text-light":t.darkMode}},[t._v(" Hello! ")]),e("div",{staticClass:"description"},[e("p",{domProps:{innerHTML:t._s(t.description)}})]),e("div",{staticClass:"text-center pb-4"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"LinkedIn",expression:"'LinkedIn'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2"},[e("i",{staticClass:"fab fa-linkedin"})]),e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"GitHub",expression:"'GitHub'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2"},[e("i",{staticClass:"fab fa-github"})]),e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"Resume",expression:"'Resume'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2"},[e("i",{staticClass:"fa fa-file"})])])])])])])},C=[],M={name:"Home",props:{darkMode:{type:Boolean,required:!0}},data(){return{picture:a(5419),description:"\n                I am Caesar, a Full Stack Developer that brings superior frontend and backend design to promote quality software. Thorough comprehension of JavaScript and Python programming languages to generate custom software designs. Extensive collaboration with different teams to ascertain client expectations and oversee software creation from initial planning through roll-out and support. Detail-oriented approach to maintaining application responsiveness, effectiveness, and security.\n            "}},computed:{},mounted(){},methods:{}},y=M,x=(0,p.A)(y,g,C,!1,null,"705ae2e4",null),w=x.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.darkMode,"bg-dark2":t.darkMode,"text-light":t.darkMode}},[e("div",{staticClass:"container"},[e("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("span",{staticClass:"title text-center",class:{pgray:!t.darkMode,"text-light":t.darkMode}},[t._v(" About Me ")])]),e("hr",{class:{pgray:!t.darkMode,"text-light":t.darkMode},attrs:{width:"50%"}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[e("Timeline",{attrs:{data:t.experience,"dark-mode":t.darkMode}})],1),e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[e("Timeline",{attrs:{data:t.education,"dark-mode":t.darkMode}})],1)])])])},S=[],A=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"mx-3 mt-3 mb-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-bg-12 col-md-12 col-sm-12"},[e("p",{staticClass:"title1",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"1000"}},[t._v(" "+t._s(t.data.title)+" ")]),t._l(t.data.data,(function(a,o){return e("ul",{key:a.name,staticClass:"timeline m-0 pt-1",style:{"transition-delay":o/4.2+"s"},attrs:{"data-aos":"fade-up","data-offset":"10","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"500"}},[e("li",{staticClass:"m-0 pb-2"},[e("div",[e("div",{staticClass:"px-2 title2"},[t._v(t._s(a.name)+", "+t._s(a.place))]),e("div",{staticClass:"px-2 title3"},[t._v(" "+t._s(a.degree||a.position)+" "+t._s(a.gpa?"("+a.gpa+")":"")+" ")]),e("div",{staticClass:"px-2 date"},[t._v(t._s(a.date))]),e("div",{staticClass:"px-2 pb-2 pt-2",staticStyle:{"text-align":"justify"}},[e("p",{domProps:{innerHTML:t._s(a.description)}})]),t._l(a.skills,(function(a){return e("span",{key:a,staticClass:"mx-2 badge p-2 mb-2",class:{"bg-dark2":t.darkMode}},[t._v(t._s(a))])})),e("p",{staticClass:"m-2"})],2)])])}))],2)])])])},j=[],D={name:"Timeline",props:{data:{type:Object},darkMode:{type:Boolean}}},P=D,T=(0,p.A)(P,A,j,!1,null,"3fe5f66c",null),L=T.exports,O={name:"About",components:{Timeline:L},props:{darkMode:{type:Boolean,required:!0}},data(){return{education:{title:"Education",data:[{name:"University of the Philippines",place:"Cebu",date:"2015 - 2019",degree:"BS Computer Science",description:"\n                            - Developed certain logical skills<br>\n                            - Improved social and communication skills<br>\n                            - Learned core concepts of software development<br>",skills:["Database","Data structures","Object-Oriented Programming","Project Management","Problem Solving"]},{name:"Firecheck",place:"Cebu, Philippines",date:"June 2018 - August 2018",position:"Intern",description:"\n                            - Developed a mobile application to help achieve the vision of the project<br>\n                            - Applied project management skills to help plan out the steps of the research in a fast-paced environment",skills:["Java","Android"]}]},experience:{title:"Experience",data:[{name:"Growsari",place:"Philippines",date:"April 2022 - Present",position:"Full Stack Developer",description:"\n                            - Coded software changes and alterations based on specific design specifications<br>\n                            - Implemented and updated application modules under the direction of Senior Software Developers<br>\n                            - Worked to solve business-related problems using Python and Flask",skills:["Python","Flask","SQL-ALchemy","MySQL","React JS"]},{name:"BPOSeats",place:"Cebu, Philippines",date:"August 2019 - March 2022",position:"Full Stack Developer",description:"\n                            - Lead and manage the desktop team to create a working user-friendly desktop application<br>\n                            - Worked independently and with a team to research and develop unique features for the web and desktop application<br>\n                            - Work for both frontend and backend in developing websites for the company",skills:["Python","Django","PostgreSQL","Electron JS","VueJS"]}]}}},computed:{},mounted(){},methods:{}},F=O,$=(0,p.A)(F,_,S,!1,null,"5511dcb9",null),B=$.exports,E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-st"},[e("div",{staticClass:"container py-4",class:{"bg-white":!t.darkMode,"bg-dark":t.darkMode}},[e("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("span",{staticClass:"title text-center",class:{pgray:!t.darkMode,"text-light":t.darkMode}},[t._v(" Skills ")])]),e("hr",{class:{pgray:!t.darkMode,"text-light":t.darkMode},attrs:{width:"50%"}}),e("br"),e("div",{staticClass:"row"},t._l(t.skills,(function(a,o){return e("div",{key:o,staticClass:"col-xl-6 xol-bg-6 col-md-6 col-sm-12 text-center pb-5 px-4",style:{"transition-delay":o/4.2+"s"},attrs:{"data-aos":"fade-up","data-aos-offset":"10","data-aos-delay":"30","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[e("div",{staticClass:"bg-div"},[e("i",{class:a.icon})]),e("div",{staticClass:"title2 pt-2"},[t._v(" "+t._s(a.title)+" ")]),e("hr",{class:{pgray:!t.darkMode,"text-light":t.darkMode},attrs:{width:"50%"}}),e("span",{staticClass:"title3"},[t._v(t._s(a.info.join(", ")))])])})),0)])])},H=[],I={name:"Skills",props:{darkMode:{type:Boolean,required:!0}},data(){return{skills:[{title:"Languanges",info:["Python","Javascript"],icon:"fa fa-code"},{title:"Web Technologies",info:["Django","Flask","Vue.js","React.js","Node.js","Electron.js"],icon:"fas fa-laptop-code"},{title:"Databases",info:["MySQL","PostgreSQL"],icon:"fa fa-database"},{title:"OS & Tools",info:["MacOS","Ubuntu","Firebase","AWS S3"],icon:"fas fa-tools"}]}},computed:{},mounted(){},methods:{}},N=I,q=(0,p.A)(N,E,H,!1,null,"49141a4a",null),J=q.exports,Q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-secondary"},[e("div",{staticClass:"container py-3"},[e("div",{staticClass:"row pt-1 align-items-center"},[t._m(0),e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("linkedin")}}},[e("i",{staticClass:"fab fa-linkedin"})]),e("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("github")}}},[e("i",{staticClass:"fab fa-github"})]),e("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("resume")}}},[e("i",{staticClass:"fa fa-file"})])])])])])])},W=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow",staticStyle:{color:"white"}},[e("span",[t._v("caesar.patac@gmail.com")])])}],R={name:"Footer",data(){return{linkedin:"www.linkedin.com",github:"www.github.com/jcpatac",resume:"www.google.com"}},methods:{}},G=R,U=(0,p.A)(G,Q,W,!1,null,"33710c52",null),V=U.exports,z={name:"App",components:{Navbar:k,Home:w,About:B,Skills:J,Footer:V},data(){return{darkMode:!1,config:{use_cookies:!0}}},created(){this.config.use_cookies&&(this.darkMode="true"===this.$cookie.get("darkMode"))},mounted(){["about","contact","skills"].forEach((t=>{if(window.location.href.includes(t)){let e=document.getElementById(t).offsetTop;window.scrollTo({top:e-35,behavior:"smooth"})}}))},methods:{scrollTo(t){if("home"==t)this.$router.push("/"),window.scrollTo({top:-80,behavior:"smooth"});else{let e=document.getElementById(t).offsetTop;window.scrollTo({top:e-35,behavior:"smooth"}),this.$router.history.current.path!=`/${t}`&&this.$router.push(`/${t}`)}},switchMode(t){this.config.use_cookies&&this.$cookie.set("darkMode",t),this.darkMode=t}}},K=z,X=(0,p.A)(K,s,i,!1,null,null,null),Y=X.exports,Z=a(2241),tt=a.n(Z),et=a(3694),at=a(6134),ot=a.n(at),st=a(1594),it=a(4),nt=a(241);o.Ay.use(it.Ay),o.Ay.use(st.Ay),o.Ay.use(nt),o.Ay.use(ot()),o.Ay.use(et.A),o.Ay.config.productionTip=!1;const rt=[{path:"/"}],lt=new st.Ay({mode:"history",routes:rt});new o.Ay({created(){tt().init()},router:lt,render:t=>t(Y)}).$mount("#app")},5419:function(t,e,a){t.exports=a.p+"img/me.17e50413.jpeg"}},e={};function a(o){var s=e[o];if(void 0!==s)return s.exports;var i=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=t,function(){var t=[];a.O=function(e,o,s,i){if(!o){var n=1/0;for(c=0;c<t.length;c++){o=t[c][0],s=t[c][1],i=t[c][2];for(var r=!0,l=0;l<o.length;l++)(!1&i||n>=i)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(r=!1,i<n&&(n=i));if(r){t.splice(c--,1);var d=s();void 0!==d&&(e=d)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,s,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p="/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,i,n=o[0],r=o[1],l=o[2],d=0;if(n.some((function(e){return 0!==t[e]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(l)var c=l(a)}for(e&&e(o);d<n.length;d++)i=n[d],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(c)},o=self["webpackChunkcaesar_personal_website"]=self["webpackChunkcaesar_personal_website"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(9707)}));o=a.O(o)})();
//# sourceMappingURL=app.355f31e9.js.map