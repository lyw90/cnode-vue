webpackJsonp([5],{105:function(t,e,n){var i=n(82);"string"==typeof i&&(i=[[t.i,i,""]]),n(4)(i,{}),i.locals&&(t.exports=i.locals)},45:function(t,e,n){var i,o;n(105),i=n(72);var a=n(95);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.name=o.name||"index",o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},61:function(t,e,n){"use strict";e.default={data:function(){return{topicstran:[]}},props:["topics","hideCount"],mounted:function(){this.topicstran=[].concat(this.topics)},watch:{topics:function(){this.topicstran=[].concat(this.topics)}}}},62:function(t,e,n){e=t.exports=n(2)(),e.push([t.i,"\n.topic {\n  border-top: 1px solid #f0f0f0;\n  padding: 10px 0;\n}\n.topic:nth-of-type(1) {\n    border-top: none;\n    padding-top: 0;\n}\n.topic .creater-avatar {\n    display: inline-block;\n}\n.topic .creater-avatar img {\n      width: 30px;\n      height: 30px;\n}\n.topic .count {\n    font-size: 10px;\n    width: 70px;\n    display: inline-block;\n    text-align: center;\n}\n.topic .count .reply {\n      font-size: 14px;\n      color: #9e78c0;\n}\n.topic .count .seperator {\n      margin: 0 -3px;\n}\n.topic .type {\n    padding: 2px 4px;\n    border-radius: 3px;\n    font-size: 12px;\n}\n.topic .type.hasColor {\n      background: #80bd01;\n      color: #fff;\n}\n.topic .type.noColor {\n      background-color: #e5e5e5;\n      color: #999;\n}\n.topic .title {\n    max-width: 70%;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 16px;\n    line-height: 30px;\n    margin-left: 10px;\n}\n.topic .last-reply-time {\n    float: right;\n    text-align: right;\n    min-width: 50px;\n    display: inline-block;\n    white-space: nowrap;\n    color: #778087;\n    font-size: 11px;\n}\n",""])},64:function(t,e,n){var i,o;n(66),i=n(61);var a=n(65);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.name=o.name||"list",o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},65:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"articles"},[_h("section",{staticClass:"article-list"},[_l(topicstran,function(t,e){return topics?_h("article",{key:e,staticClass:"topic"},[_h("router-link",{staticClass:"creater-avatar avatar",attrs:{to:{name:"user",params:{name:t.author.loginname}}}},[_h("img",{attrs:{src:t.author.avatar_url,alt:""}})])," ",hideCount?_e():_h("span",{staticClass:"count"},[_h("span",{staticClass:"reply",domProps:{textContent:_s(t.reply_count||0)}})," ",_m(0,!0)," ",_h("span",{staticClass:"visit",domProps:{textContent:_s(t.visit_count||0)}})])," ",t.typeClass?_h("el-tag",{class:t.typeClass,attrs:{type:t.typeClass,hit:!1}},[_s(_f("getArticleType")(t.top,t.good,t.tab))]):_e()," ",_h("router-link",{staticClass:"title",attrs:{to:{name:"topic",params:{id:t.id}}},domProps:{textContent:_s(t.title)}})," ",t.create_at?_h("span",{staticClass:"last-reply-time"},["发布于 "+_s(_f("getDateFromNow")(t.create_at))]):_e()]):_e()})])])},staticRenderFns:[function(){with(this)return _h("span",{staticClass:"seperator"},["/"])}]}},66:function(t,e,n){var i=n(62);"string"==typeof i&&(i=[[t.i,i,""]]),n(4)(i,{}),i.locals&&(t.exports=i.locals)},72:function(t,e,n){"use strict";(function(t){var i=n(14),o=n.n(i),a=n(64),s=n.n(a);e.default={data:function(){return{topics:[],activeTopics:[],curTab:this.$route.query.tab||"all",queryData:{page:1,tab:"all",limit:20,mdrender:!0},loading:!1,scrollLock:!1,transition:"slide-left"}},computed:{tab:function(){return this.$route.query.tab||"all"}},watch:{tab:function(t,e){this.fetchTopics(),this.transition=this.checkDirecition(t,e)>0?"slide-left":"slide-right"}},mounted:function(){var e=this;sessionStorage.queryData&&sessionStorage.curTab===this.curTab?!function(){e.topics=JSON.parse(sessionStorage.topics||"[]"),e.queryData=JSON.parse(sessionStorage.queryData||e.queryData);var n=sessionStorage.scrollTop||0;e.$nextTick(function(){t(window).scrollTop(n)})}():this.fetchTopics(),t(window).on("scroll",function(t){e.scrollLoad()}),sessionStorage.removeItem("curTab"),sessionStorage.removeItem("topics"),sessionStorage.removeItem("queryData"),sessionStorage.removeItem("scrollTop")},beforeRouteLeave:function(e,n,i){"user"!==e.name&&"topic"!==e.name||(sessionStorage.curTab=n.query.tab||"all",sessionStorage.topics=JSON.stringify(this.topics),sessionStorage.queryData=JSON.stringify(this.queryData),sessionStorage.scrollTop=t(window).scrollTop()),t(window).off("scroll"),i()},methods:{fetchTopics:function(){var e=this;this.setLoading(!0),this.scrollLock=!0;var n=this.$route.query.tab||"all",i=n===this.queryData.tab;this.queryData.tab=n,t.ajax({url:"https://cnodejs.org/api/v1/topics",type:"GET",data:this.queryData}).done(function(t){e.setLoading(!1),e.scrollLock=!1,t&&t.success&&(t.data.forEach(function(t,n){t.typeClass=e.getTypeClass(t.top,t.good,t.tab)}),i||(e.activeTopics=[]),e.curTab=e.$route.query.tab,e.activeTopics=e.activeTopics.concat(t.data),e.topics=e.activeTopics)}).fail(function(t){e.setLoading(!1)})},getTypeClass:function(t,e,n){return t?"success":e?"danger":"ask"==n?"primary":"job"==n?"warning":"share"==n?"gray":(t||e||n)&&this.$route.query.tab!==n?"":"hidden"},scrollLoad:function(){if(!this.scrollLock){var t=document.body,e=t.clientHeight+t.scrollTop,n=t.scrollHeight;e>n-10&&(this.scrollLock=!1,this.queryData.page++,this.fetchTopics())}},checkDirecition:function(t,e){var n=["all","good","share","ask","job"];return n.indexOf(t)-n.indexOf(e)>0?1:-1},setLoading:function(t){this.$store.commit("setLoading",t)}},components:{cvHead:o.a,cvList:s.a}}}).call(e,n(3))},82:function(t,e,n){e=t.exports=n(2)(),e.push([t.i,"\n#content .index .el-card__header {\n  padding: 0;\n  background-color: #eff2f7;\n}\n.grid-content {\n  position: relative;\n}\n.el-card {\n  border: none;\n  border-radius: 0;\n}\n.index .el-card__body {\n  padding: 0;\n}\n.articles-lists {\n  position: absolute;\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #fff;\n  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);\n}\n",""])},95:function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"container"}},[_h("main",{attrs:{id:"main"}},[_h("el-row",{attrs:{gutter:20,id:"container"}},[_h("el-col",{staticClass:"cv cv-100",attrs:{span:18,id:"content",offset:3}},[_h("div",{staticClass:"grid-content bg-purple"},[_h("el-card",{staticClass:"box-card index"},[_h("div",{slot:"header",staticClass:"clearfix index-nav"},[_h("el-menu",{staticClass:"el-menu-demo",attrs:{id:"navbar",theme:"light","default-active":curTab,mode:"horizontal",router:""}},[_h("el-menu-item",{attrs:{index:"all",route:{name:"index",query:{tab:"all"}}}},["全部"])," ",_h("el-menu-item",{attrs:{index:"good",route:{name:"index",query:{tab:"good"}}}},["精华"])," ",_h("el-menu-item",{attrs:{index:"share",route:{name:"index",query:{tab:"share"}}}},["分享"])," ",_h("el-menu-item",{attrs:{index:"ask",route:{name:"index",query:{tab:"ask"}}}},["问答"])," ",_h("el-menu-item",{attrs:{index:"job",route:{name:"index",query:{tab:"job"}}}},["招聘"])])])," ",_h("transition",{attrs:{name:transition}},[_h("div",{key:curTab,staticClass:"articles-lists"},[_h("cvList",{attrs:{topics:topics}})])])])])])])])])},staticRenderFns:[]}}});