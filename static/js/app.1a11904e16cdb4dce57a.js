webpackJsonp([1],{"1ktH":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var i=a("VU/8")({name:"App",created:function(){this.$store.dispatch("income/loadData"),this.$store.dispatch("expense/loadData")}},n,!1,function(t){a("oOG/")},null,null).exports,o=a("/ocq"),r=a("mvHQ"),c=a.n(r),l=a("Zrlr"),u=a.n(l),m=a("wxAW"),d=a.n(m),p=a("2fyi"),v=a.n(p),h=a("BzvE"),f=a.n(h),g=new(function(){function t(){u()(this,t),this.auth0=new v.a.WebAuth({domain:"ainguyen.auth0.com",clientID:"a0eeLVH59XqqNdDkRSafx9X1tbHFa8d1",redirectUri:"http://budget.statnlp.org/callback",audience:"https://ainguyen.auth0.com/userinfo",responseType:"token id_token",scope:"openid"}),this.authenticated=this.isAuthenticated(),this.authNotifier=new f.a,this.login=this.login.bind(this),this.setSession=this.setSession.bind(this),this.logout=this.logout.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this)}return d()(t,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var t=this;this.auth0.parseHash(function(e,a){a&&a.accessToken&&a.idToken?(t.setSession(a),Z.replace("home")):e&&(Z.replace("error"),console.log(e))})}},{key:"setSession",value:function(t){var e=c()(1e3*t.expiresIn+(new Date).getTime());localStorage.setItem("access_token",t.accessToken),localStorage.setItem("id_token",t.idToken),localStorage.setItem("expires_at",e),this.authNotifier.emit("authChange",{authenticated:!0})}},{key:"logout",value:function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),this.userProfile=null,this.authNotifier.emit("authChange",!1),Z.replace("login")}},{key:"isAuthenticated",value:function(){var t=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<t}}]),t}()),_=a("thjQ"),C=a.n(_),A=function(t,e){var a=e||"SUCCESS !";C()({title:a,text:t,icon:"success"})},b={name:"Navbar",data:function(){return{}},mounted:function(){$(".nav li a").on("click",function(){$(".collapse").collapse("hide")})},computed:{currentPath:function(){return this.$route.path}},methods:{logout:function(){g.logout()},saveData:function(){this.$store.dispatch("income/saveData"),this.$store.dispatch("expense/saveData"),A("Save data successfully !")}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header collapse d-lg-flex p-0",attrs:{id:"headerMenuCollapse"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-3 ml-auto text-right"},[a("a",{staticClass:"mr-4",attrs:{href:"#"},on:{click:t.saveData}},[t._v("\n            Save\n          ")]),t._v(" "),a("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("\n            Sign out\n          ")])]),t._v(" "),a("div",{staticClass:"col-lg order-lg-first"},[a("ul",{staticClass:"nav nav-tabs border-0 flex-column flex-lg-row"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:"/"==t.currentPath?"active":"",attrs:{to:"/"}},[a("i",{staticClass:"fe fe-activity"}),t._v("Summary")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:"/income"==t.currentPath?"active":"",attrs:{to:"/income"}},[a("i",{staticClass:"fe fe-dollar-sign"}),t._v("Income")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:"/expense"==t.currentPath?"active":"",attrs:{to:"/expense"}},[a("i",{staticClass:"fe fe-users"}),t._v("Expenses")])],1)])])])])])])},staticRenderFns:[]};var x={name:"Footer",data:function(){return{}},mounted:function(){["./static/js/core.js"].forEach(function(t){var e=document.createElement("script");e.setAttribute("src",t),document.body.appendChild(e)})}},w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-footer"},[e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mt-3 mt-lg-0 text-center"},[this._v("\n          Copyright © 2018 "),e("a",{attrs:{href:"http://www.statnlp.org"}},[this._v("STATNLP")]),this._v(". All rights reserved.\n        ")])])])])])}]};var k={components:{Navbar:a("VU/8")(b,y,!1,function(t){a("fZyy")},"data-v-6dcc1daf",null).exports,Footer:a("VU/8")(x,w,!1,function(t){a("lO1j")},"data-v-46576490",null).exports},name:"MainLayout",data:function(){return{}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("div",{staticClass:"page-main"},[e("Navbar"),this._v(" "),e("div",{staticClass:"my-3 my-md-5"},[e("router-view")],1)],1),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var P=a("VU/8")(k,S,!1,function(t){a("UxS6")},"data-v-18d363f6",null).exports,E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row row-cards"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Estimated Income")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("S$"+t._s(t._f("currency")(t.income.estimated)))]),t._v(" "),a("div",{staticClass:"progress progress-sm"},[a("div",{staticClass:"progress-bar bg-green",style:"width: 100%"})])])])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Actual Income")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("S$"+t._s(t._f("currency")(t.income.actual)))]),t._v(" "),a("div",{staticClass:"progress progress-sm"},[a("div",{staticClass:"progress-bar bg-green",style:"width: 100%"})])])])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Estimated Expenses")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("S$"+t._s(t._f("currency")(t.expense.estimated)))]),t._v(" "),a("div",{staticClass:"progress progress-sm"},[a("div",{staticClass:"progress-bar bg-orange",style:"width: 100%"})])])])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Actual Expenses")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("S$"+t._s(t._f("currency")(t.expense.actual)))]),t._v(" "),a("div",{staticClass:"progress progress-sm"},[a("div",{staticClass:"progress-bar bg-orange",style:"width: 100%"})])])])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Estimated Profit")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("S$"+t._s(t._f("currency")(t.profit.estimated)))]),t._v(" "),t._m(0)])])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Actual Profit")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("S$"+t._s(t._f("currency")(t.profit.actual)))]),t._v(" "),t._m(1)])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress progress-sm"},[e("div",{staticClass:"progress-bar bg-blue",staticStyle:{width:"100%"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress progress-sm"},[e("div",{staticClass:"progress-bar bg-blue",staticStyle:{width:"100%"}})])}]};var G=a("VU/8")({name:"HelloWorld",data:function(){return{}},computed:{income:function(){return this.$store.getters["income/getTotal"]},expense:function(){return this.$store.getters["expense/getTotal"]},profit:function(){var t=this.$store.getters["income/getTotal"],e=this.$store.getters["expense/getTotal"];return{estimated:t.estimated-e.estimated,actual:t.actual-e.actual}}}},E,!1,function(t){a("umrc")},"data-v-58c614df",null).exports,I={name:"CircleProgress",props:{percentValue:{default:.8},percent:{default:80}},data:function(){return{}},methods:{loadCircle:function(){$(this.$el).circleProgress({value:this.percentValue?this.percentValue:0,thickness:3,fill:{color:tabler.colors.blue||tabler.colors.blue},size:40,startAngle:-Math.PI/4*2,emptyFill:"#F4F4F4",lineCap:"round"})}},mounted:function(){this.loadCircle()},watch:{percent:function(t){this.loadCircle()}}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mx-auto chart-circle chart-circle-xs"},[e("div",{staticClass:"chart-circle-value"},[this._v(this._s(isNaN(this.percent)?0:this.percent)+"%")])])},staticRenderFns:[]};var D=a("VU/8")(I,N,!1,function(t){a("c2eH")},"data-v-6605ed48",null).exports,T=new(function(){function t(){u()(this,t)}return d()(t,[{key:"getGroupAmounts",value:function(t){var e={estimated:0,actual:0};return t.items.forEach(function(t){e.estimated+=parseInt(t.estimatedAmount),e.actual+=parseInt(t.actualAmount)}),e}},{key:"getTotal",value:function(t){var e=this,a=0,s=0;return t.forEach(function(t){var n=e.getGroupAmounts(t);a+=n.estimated,s+=n.actual}),{estimated:a,actual:s}}},{key:"addGroup",value:function(t,e){t.unshift({name:e,items:[]})}},{key:"deleteGroup",value:function(t,e){t.splice(e,1)}},{key:"addItem",value:function(t){t.items.unshift({name:"0",estimatedAmount:0,actualAmount:0,description:""})}},{key:"deleteItem",value:function(t,e){t.items.splice(e,1)}}]),t}()),F={components:{CircleProgress:D},name:"IncomePage",created:function(){this.groups=this.$store.getters["income/getGroups"]},data:function(){return{itemName:"",groups:[]}},methods:{getGroupAmounts:function(t){return T.getGroupAmounts(t)},deleteItem:function(t,e){T.deleteItem(t,e)},addItem:function(t){T.addItem(t)},deleteGroup:function(t){T.deleteGroup(this.groups,t)},submitAdd:function(){this.$store.dispatch("income/addGroup",{itemName:this.itemName})}},computed:{total:function(){return this.$store.getters["income/getTotal"]}}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row row-cards"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("form",{staticClass:"m-item",on:{submit:function(e){return e.preventDefault(),t.submitAdd(e)}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Item Name")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemName,expression:"itemName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter name",minlength:"2",required:""},domProps:{value:t.itemName},on:{input:function(e){e.target.composing||(t.itemName=e.target.value)}}}),t._v(" "),t._m(0)])])])])])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Estimated Income")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("S$"+t._s(t._f("currency")(t.total.estimated)))]),t._v(" "),a("div",{staticClass:"progress progress-sm"},[a("div",{staticClass:"progress-bar bg-green",style:"width: 100%"})])])])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Actual Income")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("S$"+t._s(t._f("currency")(t.total.actual)))]),t._v(" "),a("div",{staticClass:"progress progress-sm"},[a("div",{staticClass:"progress-bar bg-green",style:"width: 100%"})])])])])])]),t._v(" "),t._l(t.groups,function(e,s){return a("div",{key:s,staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("button",{staticClass:"btn btn-icon btn-primary mr-4",attrs:{type:"button"},on:{click:function(a){t.addItem(e)}}},[a("i",{staticClass:"fe fe-plus"})]),t._v(" "),a("button",{staticClass:"btn btn-icon btn-danger mr-4",attrs:{type:"button"},on:{click:function(e){t.deleteGroup(s)}}},[a("i",{staticClass:"fe fe-trash"})]),t._v(" "),a("h4",{staticClass:"card-title"},[t._v(t._s(e.name))])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table card-table table-vcenter text-nowrap",attrs:{id:"tbl-orgs"}},[t._m(1,!0),t._v(" "),a("tbody",[t._l(e.items,function(s,n){return a("tr",{key:n},[a("td",[a("span",{staticClass:"text-muted"},[t._v(t._s(n+1))])]),t._v(" "),a("td",[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.name,expression:"item.name"}],staticClass:"form-control",attrs:{type:"text",name:"example-text-input",placeholder:"Text.."},domProps:{value:s.name},on:{input:function(e){e.target.composing||t.$set(s,"name",e.target.value)}}})]),t._v(" "),a("span",{attrs:{hidden:""}},[t._v(t._s(s.name))])]),t._v(" "),a("td",{staticClass:"m-amount"},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("S$"),a("span",{attrs:{hidden:""}},[t._v(t._s(s.estimatedAmount))])])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.estimatedAmount,expression:"item.estimatedAmount"}],staticClass:"form-control text-right",attrs:{type:"number",min:"0","aria-label":"Amount (to the nearest dollar)"},domProps:{value:s.estimatedAmount},on:{input:function(e){e.target.composing||t.$set(s,"estimatedAmount",e.target.value)}}})])]),t._v(" "),a("td",{staticClass:"m-amount"},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("S$ "),a("span",{attrs:{hidden:""}},[t._v(t._s(s.actualAmount))])])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.actualAmount,expression:"item.actualAmount"}],staticClass:"form-control text-right",attrs:{type:"number",min:"0","aria-label":"Amount (to the nearest dollar)"},domProps:{value:s.actualAmount},on:{input:function(e){e.target.composing||t.$set(s,"actualAmount",e.target.value)}}})])]),t._v(" "),a("td",{staticClass:"text-center"},[a("CircleProgress",{attrs:{percent:t._f("limit")(s.actualAmount/t.getGroupAmounts(e).actual*100,4),percentValue:s.actualAmount/t.getGroupAmounts(e).actual}})],1),t._v(" "),a("td",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:s.description,expression:"item.description"}],staticClass:"form-control",attrs:{rows:"2",placeholder:"Enter description",value:"Mike"},domProps:{value:s.description},on:{input:function(e){e.target.composing||t.$set(s,"description",e.target.value)}}}),t._v(" "),a("span",{attrs:{hidden:""}},[t._v(t._s(s.description))])]),t._v(" "),a("td",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-icon btn-danger",attrs:{type:"button"},on:{click:function(a){t.deleteItem(e,n)}}},[a("i",{staticClass:"fe fe-trash"})])])])}),t._v(" "),a("tr",[a("td"),t._v(" "),t._m(2,!0),t._v(" "),a("td",{staticClass:"text-right"},[a("strong",[t._v("S$"+t._s(t._f("currency")(t.getGroupAmounts(e).estimated)))])]),t._v(" "),a("td",{staticClass:"text-right"},[a("strong",[t._v("S$"+t._s(t._f("currency")(t.getGroupAmounts(e).actual)))])]),t._v(" "),a("td",{staticClass:"text-center"},[a("CircleProgress",{attrs:{percent:t._f("limit")(t.getGroupAmounts(e).actual/t.total.actual*100,4),percentValue:t.getGroupAmounts(e).actual/t.total.actual}})],1),t._v(" "),a("td"),t._v(" "),a("td")])],2)])])])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Add")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"w-1"},[t._v("#")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Estimated Amount")]),t._v(" "),a("th",[t._v("Actual Amount")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Percentage")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("strong",[this._v("Total")])])}]};var V=a("VU/8")(F,U,!1,function(t){a("1ktH")},"data-v-b262190c",null).exports,R={components:{CircleProgress:D},name:"ExpensePage",created:function(){this.groups=this.$store.getters["expense/getGroups"]},data:function(){return{itemName:"",groups:[]}},methods:{getGroupAmounts:function(t){return T.getGroupAmounts(t)},deleteItem:function(t,e){T.deleteItem(t,e)},addItem:function(t){T.addItem(t)},deleteGroup:function(t){T.deleteGroup(this.groups,t)},submitAdd:function(){this.$store.dispatch("expense/addGroup",{itemName:this.itemName})}},computed:{total:function(){return this.$store.getters["expense/getTotal"]}}},q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row row-cards"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("form",{staticClass:"m-item",on:{submit:function(e){return e.preventDefault(),t.submitAdd(e)}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Item Name")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.itemName,expression:"itemName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter name",minlength:"2",required:""},domProps:{value:t.itemName},on:{input:function(e){e.target.composing||(t.itemName=e.target.value)}}}),t._v(" "),t._m(0)])])])])])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Estimated Expenses")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("S$"+t._s(t._f("currency")(t.total.estimated)))]),t._v(" "),a("div",{staticClass:"progress progress-sm"},[a("div",{staticClass:"progress-bar bg-green",style:"width: 100%"})])])])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Actual Expenses")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("S$"+t._s(t._f("currency")(t.total.actual)))]),t._v(" "),a("div",{staticClass:"progress progress-sm"},[a("div",{staticClass:"progress-bar bg-green",style:"width: 100%"})])])])])])]),t._v(" "),t._l(t.groups,function(e,s){return a("div",{key:s,staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("button",{staticClass:"btn btn-icon btn-primary mr-4",attrs:{type:"button"},on:{click:function(a){t.addItem(e)}}},[a("i",{staticClass:"fe fe-plus"})]),t._v(" "),a("button",{staticClass:"btn btn-icon btn-danger mr-4",attrs:{type:"button"},on:{click:function(e){t.deleteGroup(s)}}},[a("i",{staticClass:"fe fe-trash"})]),t._v(" "),a("h4",{staticClass:"card-title"},[t._v(t._s(e.name))])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table card-table table-vcenter text-nowrap",attrs:{id:"tbl-orgs"}},[t._m(1,!0),t._v(" "),a("tbody",[t._l(e.items,function(s,n){return a("tr",{key:n},[a("td",[a("span",{staticClass:"text-muted"},[t._v(t._s(n+1))])]),t._v(" "),a("td",[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.name,expression:"item.name"}],staticClass:"form-control",attrs:{type:"text",name:"example-text-input",placeholder:"Text.."},domProps:{value:s.name},on:{input:function(e){e.target.composing||t.$set(s,"name",e.target.value)}}})]),t._v(" "),a("span",{attrs:{hidden:""}},[t._v(t._s(s.name))])]),t._v(" "),a("td",{staticClass:"m-amount"},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("S$"),a("span",{attrs:{hidden:""}},[t._v(t._s(s.estimatedAmount))])])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.estimatedAmount,expression:"item.estimatedAmount"}],staticClass:"form-control text-right",attrs:{type:"number",min:"0","aria-label":"Amount (to the nearest dollar)"},domProps:{value:s.estimatedAmount},on:{input:function(e){e.target.composing||t.$set(s,"estimatedAmount",e.target.value)}}})])]),t._v(" "),a("td",{staticClass:"m-amount"},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("S$ "),a("span",{attrs:{hidden:""}},[t._v(t._s(s.actualAmount))])])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.actualAmount,expression:"item.actualAmount"}],staticClass:"form-control text-right",attrs:{type:"number",min:"0","aria-label":"Amount (to the nearest dollar)"},domProps:{value:s.actualAmount},on:{input:function(e){e.target.composing||t.$set(s,"actualAmount",e.target.value)}}})])]),t._v(" "),a("td",{staticClass:"text-center"},[a("CircleProgress",{attrs:{percent:t._f("limit")(s.actualAmount/t.getGroupAmounts(e).actual*100,4),percentValue:s.actualAmount/t.getGroupAmounts(e).actual}})],1),t._v(" "),a("td",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:s.description,expression:"item.description"}],staticClass:"form-control",attrs:{rows:"2",placeholder:"Enter description",value:"Mike"},domProps:{value:s.description},on:{input:function(e){e.target.composing||t.$set(s,"description",e.target.value)}}}),t._v(" "),a("span",{attrs:{hidden:""}},[t._v(t._s(s.description))])]),t._v(" "),a("td",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-icon btn-danger",attrs:{type:"button"},on:{click:function(a){t.deleteItem(e,n)}}},[a("i",{staticClass:"fe fe-trash"})])])])}),t._v(" "),a("tr",[a("td"),t._v(" "),t._m(2,!0),t._v(" "),a("td",{staticClass:"text-right"},[a("strong",[t._v("S$"+t._s(t._f("currency")(t.getGroupAmounts(e).estimated)))])]),t._v(" "),a("td",{staticClass:"text-right"},[a("strong",[t._v("S$"+t._s(t._f("currency")(t.getGroupAmounts(e).actual)))])]),t._v(" "),a("td",{staticClass:"text-center"},[a("CircleProgress",{attrs:{percent:t._f("limit")(t.getGroupAmounts(e).actual/t.total.actual*100,4),percentValue:t.getGroupAmounts(e).actual/t.total.actual}})],1),t._v(" "),a("td"),t._v(" "),a("td")])],2)])])])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Add")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"w-1"},[t._v("#")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Estimated Amount")]),t._v(" "),a("th",[t._v("Actual Amount")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Percentage")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("strong",[this._v("Total")])])}]};var H=a("VU/8")(R,q,!1,function(t){a("Qpl8")},"data-v-10ce1dfd",null).exports,O={name:"LoginPage",created:function(){g.login()},data:function(){return{}},methods:{submitLogin:function(){g.login()}}},j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col col-login mx-auto"},[e("div",{staticClass:"text-center mb-6"})])])])}]};var M=a("VU/8")(O,j,!1,function(t){a("U5Fy")},"data-v-5e117fce",null).exports,L={name:"CallbackPage",created:function(){g.handleAuthentication()},data:function(){return{}}},Q={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hello"})},staticRenderFns:[]};var B=a("VU/8")(L,Q,!1,function(t){a("ekI9")},"data-v-5c944264",null).exports,W={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row p-5 justify-content-center"},[e("h2",[this._v("\n      Your account does not have the permission !\n    ")]),this._v(" "),e("h2",[this._v("\n       Please send the request to "),e("a",{attrs:{href:"mailto:ainguyenkaka@gmail.com"}},[this._v("ainguyenkaka@gmail.com")]),this._v(" !\n    ")])]),this._v(" "),e("div",{staticClass:"row justify-content-center"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"/login"}},[this._v("Sign In")])])])}]};var z=a("VU/8")({name:"ErrorPage",data:function(){return{}}},W,!1,function(t){a("Tqo+")},"data-v-d930b780",null).exports;s.a.use(o.a);var J=new o.a({mode:"history",routes:[{path:"/",component:P,children:[{path:"/",name:"IndexPage",component:G},{path:"/home",name:"HomePage",component:G},{path:"/income",name:"IncomePage",component:V},{path:"/expense",name:"ExpensePage",component:H}],meta:{requiresAuth:!0}},{path:"/login",name:"LoginPage",component:M},{path:"/callback",name:"CallbackPage",component:B},{path:"/error",name:"ErrorPage",component:z}]});J.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresAuth})&&!g.isAuthenticated()?a({path:"/login",query:{redirect:t.fullPath}}):a()});var Z=J,X=a("NYxO"),Y=new(function(){function t(){u()(this,t)}return d()(t,[{key:"saveIncome",value:function(t){this.saveData("statnlp-income",t)}},{key:"saveExpense",value:function(t){this.saveData("statnlp-expense",t)}},{key:"loadIncome",value:function(){return this.loadData("statnlp-income")}},{key:"loadExpense",value:function(){return this.loadData("statnlp-expense")}},{key:"loadData",value:function(t){try{return JSON.parse(localStorage.getItem(t))}catch(t){return[]}}},{key:"saveData",value:function(t,e){localStorage.setItem(t,c()(e))}}]),t}()),K={namespaced:!0,state:{groups:[{name:"Admissions",items:[{name:"Participants @",estimatedAmount:0,actualAmount:0,description:""}]},{name:"Ads in program",items:[]},{name:"Exhibitors/vendors",items:[{name:"Alibaba @",estimatedAmount:18e3,actualAmount:18e3,description:""},{name:"SG Innovate @",estimatedAmount:15e3,actualAmount:15e3,description:""},{name:"Small booths @",estimatedAmount:0,actualAmount:0,description:""}]},{name:"Sale of items",items:[]}]},getters:{getGroups:function(t){return t.groups},getTotal:function(t){return T.getTotal(t.groups)}},mutations:{getGroups:function(t){t.groups=[]},addGroup:function(t,e){T.addGroup(t.groups,e.itemName)},saveData:function(t){Y.saveIncome(t.groups)},loadData:function(t){var e=Y.loadIncome();e&&e.length>0&&(t.groups=e)}},actions:{getGroups:function(t){t.commit("getGroups")},addGroup:function(t,e){t.commit("addGroup",e)},saveData:function(t){t.commit("saveData")},loadData:function(t){t.commit("loadData")}}},tt={namespaced:!0,state:{groups:[{name:"Site",items:[{name:"Room and hall fees",estimatedAmount:0,actualAmount:0,description:""},{name:"Site staff",estimatedAmount:0,actualAmount:0,description:""},{name:"Equipment",estimatedAmount:0,actualAmount:0,description:""},{name:"Tables and chairs",estimatedAmount:0,actualAmount:0,description:""}]},{name:"Refreshments",items:[{name:"Food",estimatedAmount:2e3,actualAmount:0,description:""},{name:"Drinks",estimatedAmount:800,actualAmount:0,description:""},{name:"Tissues & others",estimatedAmount:200,actualAmount:0,description:""}]},{name:"Decorations",items:[{name:"Flowers",estimatedAmount:0,actualAmount:0,description:""},{name:"Paper supplies",estimatedAmount:0,actualAmount:0,description:""},{name:"Background",estimatedAmount:0,actualAmount:0,description:""}]},{name:"Program",items:[{name:"Goodie Bags",estimatedAmount:3200,actualAmount:0,description:""},{name:"Token of Appreciation",estimatedAmount:0,actualAmount:0,description:""}]},{name:"Publicity",items:[{name:"Graphics work",estimatedAmount:0,actualAmount:0,description:""},{name:"Photocopying/Printing",estimatedAmount:0,actualAmount:0,description:""},{name:"Cameraman",estimatedAmount:0,actualAmount:0,description:""}]},{name:"Miscellaneous",items:[]},{name:"NUS",items:[{name:"Flights",estimatedAmount:0,actualAmount:0,description:""},{name:"Accommodation",estimatedAmount:0,actualAmount:0,description:""},{name:"Per-diem",estimatedAmount:0,actualAmount:0,description:""}]},{name:"NTU",items:[{name:"Flights",estimatedAmount:0,actualAmount:0,description:""},{name:"Accommodation",estimatedAmount:0,actualAmount:0,description:""},{name:"Per-diem",estimatedAmount:0,actualAmount:0,description:""}]},{name:"SMU",items:[{name:"Flights",estimatedAmount:0,actualAmount:0,description:""},{name:"Accommodation",estimatedAmount:0,actualAmount:0,description:""},{name:"Per-diem",estimatedAmount:0,actualAmount:0,description:""}]},{name:"SUTD",items:[{name:"Flights",estimatedAmount:0,actualAmount:0,description:""},{name:"Accommodation",estimatedAmount:0,actualAmount:0,description:""},{name:"Per-diem",estimatedAmount:0,actualAmount:0,description:""}]},{name:"I2R",items:[{name:"Flights",estimatedAmount:0,actualAmount:0,description:""},{name:"Accommodation",estimatedAmount:0,actualAmount:0,description:""},{name:"Per-diem",estimatedAmount:0,actualAmount:0,description:""}]},{name:"Others",items:[{name:"Pre-event Dinner",estimatedAmount:0,actualAmount:0,description:""}]}]},getters:{getGroups:function(t){return t.groups},getTotal:function(t){return T.getTotal(t.groups)}},mutations:{getGroups:function(t){t.groups=[]},addGroup:function(t,e){T.addGroup(t.groups,e.itemName)},saveData:function(t){Y.saveExpense(t.groups)},loadData:function(t){var e=Y.loadExpense();e&&e.length>0&&(t.groups=e)}},actions:{getGroups:function(t){t.commit("getGroups")},addGroup:function(t,e){t.commit("addGroup",e)},saveData:function(t){t.commit("saveData")},loadData:function(t){t.commit("loadData")}}};s.a.use(X.a);var et=new X.a.Store({modules:{income:K,expense:tt},state:{},getters:{},mutations:{},actions:{}}),at=(a("Q6tO"),a("pSRl"),function(t){return t.toUpperCase()}),st=function(t,e,a){return void 0===a&&(a=""),void 0===t&&(t=""),t.toString().substring(0,e)+a},nt=function(t){return(t/1).toFixed(0).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},it={install:function(t){t.filter("uppercase",at),t.filter("limit",st),t.filter("currency",nt)}};s.a.use(it),s.a.config.productionTip=!1,new s.a({el:"#app",router:Z,store:et,components:{App:i},template:"<App/>"})},Q6tO:function(t,e){},Qpl8:function(t,e){},"Tqo+":function(t,e){},U5Fy:function(t,e){},UxS6:function(t,e){},c2eH:function(t,e){},ekI9:function(t,e){},fZyy:function(t,e){},lO1j:function(t,e){},"oOG/":function(t,e){},pSRl:function(t,e){},umrc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1a11904e16cdb4dce57a.js.map