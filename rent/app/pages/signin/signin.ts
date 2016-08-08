import {Page, MenuController, NavController} from 'ionic-angular';
import {UserPage} from './../user/user';
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';

@Page({
  templateUrl: 'build/pages/signin/signin.html'
})
export class SigninPage {
    nav: any;
    authForm: ControlGroup;
    username: AbstractControl;
    password: AbstractControl;
 

  constructor(public menu: MenuController, nav: NavController, fb: FormBuilder) {
        this.nav = nav;
        
         this.authForm = fb.group({  
            'username': ['', Validators.compose([Validators.required])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });
 
        this.username = this.authForm.controls['username'];     
        this.password = this.authForm.controls['password'];  
         }
         
      createerror(){
          return false;
      }   
   
   openMenu() {
   this.menu.open();
 }
  
 onSubmit(value: string): void { 
        if(this.authForm.valid) {
            console.log('Submitted value: ', value);
        }
    } 
 
   
 
 
}
