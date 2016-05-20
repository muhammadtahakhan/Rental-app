import {Page, MenuController, NavController} from 'ionic-angular';
import {UserPage} from './../user/user';

@Page({
  templateUrl: 'build/pages/signin/signin.html'
})
export class SigninPage {
    nav: any;
  constructor(public menu: MenuController, nav: NavController) {
        this.nav = nav;
  }
  
   openMenu() {
   this.menu.open();
 }
  
 
}
