"use strict";(self.webpackChunkTeamB_UI=self.webpackChunkTeamB_UI||[]).push([[823],{5823:(Z,u,a)=>{a.r(u),a.d(u,{LoginModule:()=>g});var c=a(6895),r=a(4006),m=a(3930),e=a(4650),p=a(8368),h=a(5863);function f(t,l){1&t&&(e.TgZ(0,"small"),e._uU(1,"Enter Your Email ID"),e.qZA())}function b(t,l){1&t&&(e.TgZ(0,"small"),e._uU(1,"Enter Valid Email Id"),e.qZA())}function _(t,l){if(1&t&&(e.TgZ(0,"div",13),e.YNc(1,f,2,0,"small",21),e.YNc(2,b,2,0,"small",21),e.qZA()),2&t){const n=e.oxw();let o,i;e.xp6(1),e.Q6J("ngIf",null==(o=n.loginForm.get("email"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=n.loginForm.get("email"))||null==i.errors?null:i.errors.email)}}function v(t,l){1&t&&(e.TgZ(0,"small"),e._uU(1," Enter valid Password"),e.qZA())}function M(t,l){if(1&t&&(e.TgZ(0,"div",13),e._uU(1),e.YNc(2,v,2,0,"small",21),e.qZA()),2&t){const n=e.oxw();let o;e.xp6(1),e.hij(" ",n.errorMessage," "),e.xp6(1),e.Q6J("ngIf",null==(o=n.loginForm.get("password"))||null==o.errors?null:o.errors.minlength)}}class d{constructor(l,n,o){this.fb=l,this.auth=n,this.data=o,this.errorMessage="",this.submitted=!1,this.password="",this.currentuser=null}ngOnInit(){this.loginForm=this.fb.group({email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required,r.kI.minLength(6)]]})}onSubmit(l){this.submitted=!0,this.auth.loginmethod(l.value).subscribe({next:n=>{console.log(n,"data");let o=n.email;this.loggedName=o,console.log(o,"userMail"),localStorage.setItem("userMail",this.loggedName),this.loggedName=localStorage.getItem("userMail"),this.auth.setTokenMethod(n.idToken),this.auth.canAuthenticated(),this.newMessage(),this.auth.login(),console.log(this.loggedName,"loggedName")},error:n=>{this.errorMessage=n.error.error.message,console.log(this.errorMessage,"wrong Pass")}})}newMessage(){this.loggedName=localStorage.getItem("userMail"),this.data.shareUsername(this.loggedName),console.log(this.loggedName,"lN")}}d.\u0275fac=function(l){return new(l||d)(e.Y36(r.QS),e.Y36(p.e),e.Y36(h.D))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-login"]],decls:33,vars:5,consts:[[1,"navlink"],[1,"navbar"],["routerLink","/register",1,"btn","btn-primary","nav-btn"],["routerLink","/login",1,"btn","btn-primary","nav-btn"],[1,"imge"],[1,"container"],[1,"home_page"],["id","centerCard",1,"col-md-6"],[1,"card","mx-auto"],[1,"text-center"],[3,"formGroup"],[1,"form-group","mb-3"],["for","exampleInputEmail1"],[1,"text-danger"],["type","email","formControlName","email","id","exampleInputEmail1","aria-describedby","emailHelp","placeholder","Enter email",1,"form-control"],["class"," text-danger",4,"ngIf"],["for","exampleInputPassword1"],["type","password","formControlName","password","id","exampleInputPassword1","placeholder","Password",1,"form-control",3,"ngModel","ngModelChange"],["class","text-danger",4,"ngIf"],["type","submit",1,"btn","btn-primary","logIn",3,"disabled","click"],["routerLink","/register",2,"color","rgb(52, 58, 241)","margin-top","10px"],[4,"ngIf"]],template:function(l,n){if(1&l&&(e.TgZ(0,"nav",0)(1,"div",1)(2,"button",2),e._uU(3,"Register"),e.qZA(),e.TgZ(4,"button",3),e._uU(5,"logIn"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"h1"),e._uU(13,"LogIn Page"),e.qZA(),e.TgZ(14,"h6"),e._uU(15," Please Enter UserName & Password"),e.qZA()(),e.TgZ(16,"form",10)(17,"div",11)(18,"label",12),e._uU(19,"Email address "),e.TgZ(20,"span",13),e._uU(21,"*"),e.qZA()(),e._UZ(22,"input",14),e.YNc(23,_,3,2,"div",15),e.qZA(),e.TgZ(24,"div",11)(25,"label",16),e._uU(26,"Password"),e.qZA(),e.TgZ(27,"input",17),e.NdJ("ngModelChange",function(i){return n.password=i}),e.qZA(),e.YNc(28,M,3,2,"div",18),e.qZA(),e.TgZ(29,"button",19),e.NdJ("click",function(){return n.onSubmit(n.loginForm)}),e._uU(30,"Submit"),e.qZA()(),e.TgZ(31,"a",20),e._uU(32," New user? Click here Register "),e.qZA()()()()()()),2&l){let o,i;e.xp6(16),e.Q6J("formGroup",n.loginForm),e.xp6(7),e.Q6J("ngIf",!(null!=(o=n.loginForm.get("email"))&&o.valid)&&(null==(o=n.loginForm.get("email"))?null:o.touched)),e.xp6(4),e.Q6J("ngModel",n.password),e.xp6(1),e.Q6J("ngIf",!(null!=(i=n.loginForm.get("password"))&&i.valid)&&(null==(i=n.loginForm.get("password"))?null:i.touched)),e.xp6(1),e.Q6J("disabled",!n.loginForm.valid)}},dependencies:[m.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,c.O5],styles:[".navbar[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-direction:row-reverse}#centerCard[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:90vh}.home_page[_ngcontent-%COMP%]{background-image:url(73810-business-idea-animation.c91031e461095656.gif);background-repeat:no-repeat;background-size:auto;height:100%;width:100%}.card[_ngcontent-%COMP%]{border:none;width:500px;padding:40px;position:absolute;left:55%;background:rgb(185,191,196);background:linear-gradient(90deg,rgb(162,128,230),rgb(18,150,245) 100%)}.card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff}.logIn[_ngcontent-%COMP%]{margin-left:80%}nav[_ngcontent-%COMP%]{position:relative;width:100%;height:50px;padding-left:3%;background:rgb(185,191,196);background:linear-gradient(90deg,rgb(162,128,230),rgb(118,248,161) 100%)}.nav-btn[_ngcontent-%COMP%]{margin:5px 10px 0}"]});const C=[{path:"",component:d}];class s{}s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[m.Bz.forChild(C),m.Bz]});class g{}g.\u0275fac=function(l){return new(l||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[s,r.u5,r.UX,c.ez]})}}]);