(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-294febf4"],{b0c0:function(t,e,c){var a=c("83ab"),l=c("5e77").EXISTS,s=c("9bf2").f,d=Function.prototype,n=d.toString,r=/^\s*function ([^ (]*)/,b="name";a&&!l&&s(d,b,{configurable:!0,get:function(){try{return n.call(this).match(r)[1]}catch(t){return""}}})},d69e:function(t,e,c){"use strict";c.r(e);c("b0c0");var a=c("7a23"),l={class:"orders mt-4"},s={class:"table-responsive-lg mt-4"},d={class:"table table-striped lh-lg"},n=Object(a["h"])("thead",{class:"table-dark"},[Object(a["h"])("tr",{class:"table-nowrap"},[Object(a["h"])("th",{width:"150",class:"text-center"},"購買時間"),Object(a["h"])("th",{width:"200",class:"text-center"},"訂單編號"),Object(a["h"])("th",{width:"200",class:"text-center"},"Email"),Object(a["h"])("th",{class:"text-center"},"購買項目"),Object(a["h"])("th",{width:"150",class:"text-end"},"應付金額"),Object(a["h"])("th",{width:"150",class:"text-center"},"是否付款"),Object(a["h"])("th",{width:"180",class:"text-center"},"編輯")])],-1),r={class:"text-center"},b=["textContent"],o={class:"list-unstyled"},i={class:"text-end"},O={key:0,class:"text-strong"},h={key:1,class:"text-muted"},j=["onClick"],u=["onClick"],p={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"orderModal"},m={class:"modal-dialog",role:"document"},g={class:"modal-content"},f={class:"modal-header bg-dark text-white"},v={class:"modal-title fw-bold",id:"exampleModalLabel"},M=Object(a["j"])("訂單資訊 "),w={class:"fs-6"},k=Object(a["h"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),x={class:"modal-body"},y={class:"mb-3"},L=Object(a["h"])("h5",{class:"fw-bold"},"訂購日期",-1),$=Object(a["h"])("hr",null,null,-1),z={class:"mb-3"},C=Object(a["h"])("h5",{class:"fw-bold"},"商品",-1),E={class:"row"},_={class:"col-6"},J={class:"col-6"},N={class:"text-end"},P={class:"text-end"},T=Object(a["h"])("hr",null,null,-1),H={class:"mb-3"},S=Object(a["h"])("h5",{class:"fw-bold"},"Email",-1),q=Object(a["h"])("hr",null,null,-1),D={class:"mb-3"},F=Object(a["h"])("h5",{class:"fw-bold"},"姓名",-1),I=Object(a["h"])("hr",null,null,-1),U={class:"mb-3"},X=Object(a["h"])("h5",{class:"fw-bold"},"收件人電話",-1),A=Object(a["h"])("hr",null,null,-1),B={class:"mb-3"},G=Object(a["h"])("h5",{class:"fw-bold"},"收件人地址",-1),K=Object(a["h"])("hr",null,null,-1),Q={class:"mb-3"},R=Object(a["h"])("h5",{class:"fw-bold"},"備註",-1),V=Object(a["h"])("div",{class:"modal-footer"},[Object(a["h"])("button",{type:"button",class:"btn btn-dark btn-hover rounded-0","data-bs-dismiss":"modal"},"關閉")],-1),W={class:"modal fade",id:"delOrderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"delOrderModal"},Y={class:"modal-dialog",role:"document"},Z={class:"modal-content border-0"},tt=Object(a["h"])("div",{class:"modal-header bg-dark text-white"},[Object(a["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["h"])("span",null,"刪除訂單")]),Object(a["h"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),et={class:"modal-body"},ct=Object(a["j"])(" 是否刪除 "),at={class:"text-strong"},lt=Object(a["j"])(" 訂單(刪除後將無法恢復)。 "),st={class:"modal-footer"},dt=Object(a["h"])("button",{type:"button",class:"btn btn-outline-dark btn-hover rounded-0","data-bs-dismiss":"modal"},"取消",-1);function nt(t,e,c,nt,rt,bt){var ot=Object(a["J"])("Loading"),it=Object(a["J"])("Pagination");return Object(a["z"])(),Object(a["g"])("div",l,[Object(a["k"])(ot,{active:rt.isLoading,"onUpdate:active":e[0]||(e[0]=function(t){return rt.isLoading=t})},null,8,["active"]),Object(a["h"])("div",s,[Object(a["h"])("table",d,[n,Object(a["h"])("tbody",r,[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(rt.orders,(function(e,c){return Object(a["z"])(),Object(a["g"])("tr",{class:Object(a["s"])(["table-nowrap",{"text-black-50":!e.is_paid}]),key:c},[Object(a["h"])("td",null,Object(a["M"])(t.$filters.date(e.create_at)),1),Object(a["h"])("td",null,Object(a["M"])(e.id),1),Object(a["h"])("td",null,[e.user?(Object(a["z"])(),Object(a["g"])("span",{key:0,textContent:Object(a["M"])(e.user.email)},null,8,b)):Object(a["f"])("",!0)]),Object(a["h"])("td",null,[Object(a["h"])("ul",o,[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(e.products,(function(t,e){return Object(a["z"])(),Object(a["g"])("li",{key:e},Object(a["M"])(t.product.title)+" "+Object(a["M"])(t.qty)+" "+Object(a["M"])(t.product.unit),1)})),128))])]),Object(a["h"])("td",i,"NT$ "+Object(a["M"])(t.$filters.currency(e.total)),1),Object(a["h"])("td",null,[e.is_paid?(Object(a["z"])(),Object(a["g"])("span",O,"已付款")):(Object(a["z"])(),Object(a["g"])("span",h,"尚未付款"))]),Object(a["h"])("td",null,[Object(a["h"])("button",{type:"button",class:"btn btn-dark btn-hover rounded-0 me-2",onClick:function(t){return bt.openOrderModal(e)}}," 查看詳細 ",8,j),Object(a["h"])("button",{type:"button",class:"btn btn-outline-dark btn-hover rounded-0",onClick:function(t){return bt.openDelModal(e)}}," 刪除 ",8,u)])],2)})),128))])])]),Object(a["k"])(it,{pages:rt.pagination,onEmitPages:bt.getOrders},null,8,["pages","onEmitPages"]),Object(a["h"])("div",p,[Object(a["h"])("div",m,[Object(a["h"])("div",g,[Object(a["h"])("div",f,[Object(a["h"])("h4",v,[M,Object(a["h"])("span",w,"( "+Object(a["M"])(rt.tempOrder.id)+" )",1)]),k]),Object(a["h"])("div",x,[Object(a["h"])("div",y,[L,Object(a["h"])("p",null,Object(a["M"])(t.$filters.date(rt.tempOrder.create_at)),1),$]),Object(a["h"])("div",z,[C,(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(rt.tempOrder.products,(function(e){return Object(a["z"])(),Object(a["g"])("div",{key:e.id},[Object(a["h"])("div",E,[Object(a["h"])("div",_,[Object(a["h"])("p",null,Object(a["M"])(e.product.title)+" "+Object(a["M"])(e.qty)+" "+Object(a["M"])(e.product.unit),1)]),Object(a["h"])("div",J,[Object(a["h"])("p",N,"NT$ "+Object(a["M"])(t.$filters.currency(e.final_total))+" 元",1)])])])})),128)),Object(a["h"])("p",P,"總價: NT$ "+Object(a["M"])(t.$filters.currency(rt.tempOrder.total))+" 元",1),T]),Object(a["h"])("div",H,[S,Object(a["h"])("p",null,Object(a["M"])(rt.tempOrder.user.email),1),q]),Object(a["h"])("div",D,[F,Object(a["h"])("p",null,Object(a["M"])(rt.tempOrder.user.name),1),I]),Object(a["h"])("div",U,[X,Object(a["h"])("p",null,Object(a["M"])(rt.tempOrder.user.tel),1),A]),Object(a["h"])("div",B,[G,Object(a["h"])("p",null,Object(a["M"])(rt.tempOrder.user.address),1),K]),Object(a["h"])("div",Q,[R,Object(a["h"])("p",null,Object(a["M"])(rt.tempOrder.message),1)])]),V])])],512),Object(a["h"])("div",W,[Object(a["h"])("div",Y,[Object(a["h"])("div",Z,[tt,Object(a["h"])("div",et,[ct,Object(a["h"])("strong",at,Object(a["M"])(rt.tempOrder.id),1),lt]),Object(a["h"])("div",st,[dt,Object(a["h"])("button",{type:"button",class:"btn btn-dark btn-hover rounded-0",onClick:e[1]||(e[1]=function(){return bt.delOrder&&bt.delOrder.apply(bt,arguments)})},"確認刪除")])])])],512)])}c("99af");var rt=c("7c2b"),bt=c.n(rt),ot=c("1799"),it={name:"Orders",components:{Pagination:ot["a"]},data:function(){return{orders:{},tempOrder:{user:{}},pagination:{},isLoading:!1,isNew:!1,orderModal:"",delOrderModal:""}},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ibike","/admin/orders?page=").concat(e);this.isLoading=!0,this.$http.get(c).then((function(e){e.data.success&&(t.orders=e.data.orders,t.pagination=e.data.pagination,t.isLoading=!1)}))},delOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ibike","/admin/order/").concat(this.tempOrder.id);this.isLoading=!0,this.$http.delete(e).then((function(e){e.data.success&&(t.emitter.emit("message:push",{message:e.data.message,status:"danger"}),t.getOrders(),t.delOrderModal.hide(),t.isLoading=!1)}))},openOrderModal:function(t){this.tempOrder=t,this.orderModal.show()},openDelModal:function(t){this.tempOrder=t,this.delOrderModal.show()}},created:function(){this.getOrders()},mounted:function(){this.orderModal=new bt.a(this.$refs.orderModal),this.delOrderModal=new bt.a(this.$refs.delOrderModal)}},Ot=c("6b0d"),ht=c.n(Ot);const jt=ht()(it,[["render",nt]]);e["default"]=jt}}]);
//# sourceMappingURL=chunk-294febf4.436f4104.js.map