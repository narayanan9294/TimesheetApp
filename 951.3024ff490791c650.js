"use strict";(self.webpackChunkTeamB_UI=self.webpackChunkTeamB_UI||[]).push([[951],{8951:(I,p,s)=>{s.r(p),s.d(p,{RegisterModule:()=>g});var c=s(6895),i=s(4006),m=s(3930),e=s(4650),_=s(8368);function v(r,n){1&r&&(e.TgZ(0,"span",19),e._uU(1,"Please Enter Your Name"),e.qZA())}function b(r,n){1&r&&(e.TgZ(0,"small"),e._uU(1,"Enter Your Email ID"),e.qZA())}function h(r,n){1&r&&(e.TgZ(0,"small"),e._uU(1,"Enter Valid Email Id"),e.qZA())}function Z(r,n){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,b,2,0,"small",22),e.YNc(2,h,2,0,"small",22),e.qZA()),2&r){const t=e.oxw();let o,l;e.xp6(1),e.Q6J("ngIf",null==(o=t.registerForm.get("email"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(l=t.registerForm.get("email"))||null==l.errors?null:l.errors.email)}}function x(r,n){1&r&&(e.TgZ(0,"small"),e._uU(1," Enter Password"),e.qZA())}function C(r,n){1&r&&(e.TgZ(0,"small"),e._uU(1," Enter valid Password"),e.qZA())}function T(r,n){if(1&r&&(e.TgZ(0,"div",19),e.YNc(1,x,2,0,"small",22),e.YNc(2,C,2,0,"small",22),e.qZA()),2&r){const t=e.oxw();let o,l;e.xp6(1),e.Q6J("ngIf",null==(o=t.registerForm.get("password"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(l=t.registerForm.get("password"))||null==l.errors?null:l.errors.minlength)}}class u{constructor(n,t,o){this.auth=n,this.fb=t,this.route=o,this.errorMessage="",this.registerForm=this.fb.group({name:["",[i.kI.required]],email:["",i.kI.required],password:["",[i.kI.required]]})}ngOnInit(){}onSubmit(n){this.auth.registerMethod(n.value).subscribe({next:t=>{this.auth.setTokenMethod(t.idToken),this.route.navigate(["/login"])},error:t=>{this.errorMessage=t.error.error.message}})}}u.\u0275fac=function(n){return new(n||u)(e.Y36(_.e),e.Y36(i.QS),e.Y36(m.F0))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-register"]],decls:41,vars:7,consts:[[1,"navlink"],[1,"navbar"],["routerLink","/register",1,"btn","btn-primary","nav-btn"],["routerLink","/login",1,"btn","btn-primary","nav-btn"],[1,"imge"],[1,"container"],[1,"row"],["id","centerCard",1,"col-md-6"],[1,"card"],[1,"text-center"],[3,"formGroup"],[1,"form-group","mb-3"],["for","exampleInputPassword1"],["type","text","formControlName","name","id","exampleInputPassword1","placeholder","Enter Your Name",1,"form-control"],["class","text-danger",4,"ngIf"],["for","exampleInputEmail1"],["type","email","formControlName","email","id","exampleInputEmail1","aria-describedby","emailHelp","placeholder","Enter email",1,"form-control"],["class"," text-danger",4,"ngIf"],["type","password","formControlName","password","id","exampleInputPassword1","placeholder","Password",1,"form-control"],[1,"text-danger"],["type","submit",1,"btn","btn-primary","registerbtn",3,"disabled","click"],["routerLink","/login",2,"color","rgb(59, 56, 232)","margin-top","10px"],[4,"ngIf"]],template:function(n,t){if(1&n&&(e.TgZ(0,"nav",0)(1,"div",1)(2,"button",2),e._uU(3,"Register"),e.qZA(),e.TgZ(4,"button",3),e._uU(5,"logIn"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"h1"),e._uU(13,"Register Page"),e.qZA(),e.TgZ(14,"h5"),e._uU(15,"Register Your self!!"),e.qZA()(),e.TgZ(16,"form",10)(17,"div",11)(18,"label",12),e._uU(19,"Name"),e.qZA(),e._UZ(20,"input",13),e.YNc(21,v,2,0,"span",14),e.qZA(),e.TgZ(22,"div",11)(23,"label",15),e._uU(24,"Email address"),e.qZA(),e._UZ(25,"input",16),e.YNc(26,Z,3,2,"div",17),e.qZA(),e.TgZ(27,"div",11)(28,"label",12),e._uU(29,"Password"),e.qZA(),e._UZ(30,"input",18),e.YNc(31,T,3,2,"div",14),e.qZA(),e.TgZ(32,"b",19),e._uU(33),e.qZA(),e.TgZ(34,"button",20),e.NdJ("click",function(){return t.onSubmit(t.registerForm)}),e._uU(35,"Submit"),e.qZA()(),e._uU(36),e.TgZ(37,"a",21),e._uU(38," Already Have Account ? Click here "),e.TgZ(39,"b"),e._uU(40,"login"),e.qZA()()()()()()()),2&n){let o,l,d,f;e.xp6(16),e.Q6J("formGroup",t.registerForm),e.xp6(5),e.Q6J("ngIf",!(null!=(o=t.registerForm.get("name"))&&o.valid)&&(null==(o=t.registerForm.get("name"))?null:o.touched)),e.xp6(5),e.Q6J("ngIf",!(null!=(l=t.registerForm.get("email"))&&l.valid)&&(null==(l=t.registerForm.get("email"))?null:l.touched)),e.xp6(5),e.Q6J("ngIf",!(null!=(d=t.registerForm.get("password"))&&d.valid)&&(null==(d=t.registerForm.get("password"))?null:d.touched)),e.xp6(2),e.Oqu(t.errorMessage),e.xp6(1),e.Q6J("disabled",!t.registerForm.valid),e.xp6(2),e.hij(" ",null==(f=t.registerForm.get("status"))?null:f.valid," ")}},dependencies:[m.rH,c.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".navbar[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-direction:row-reverse}#centerCard[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:90vh}.card[_ngcontent-%COMP%]{opacity:1;border:none;width:500px;padding:40px;position:absolute;left:30%;background:rgb(185,191,196);background:linear-gradient(90deg,rgb(162,128,230),rgb(18,150,245) 100%)}.card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff}.registerbtn[_ngcontent-%COMP%]{margin-left:80%}nav[_ngcontent-%COMP%]{position:relative;width:100%;height:50px;padding-left:3%;background:rgb(185,191,196);background:linear-gradient(90deg,rgb(162,128,230),rgb(118,248,161) 100%)}.nav-btn[_ngcontent-%COMP%]{margin:5px 10px 0}"]});const A=[{path:"",component:u}];class a{}a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[m.Bz.forChild(A),m.Bz]});class g{}g.\u0275fac=function(n){return new(n||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[a,c.ez,i.UX]})}}]);