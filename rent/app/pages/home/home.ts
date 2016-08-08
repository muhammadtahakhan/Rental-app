import {Page, MenuController, NavController} from 'ionic-angular';
import {UserPage} from './../user/user';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    nav: any;
  constructor(public menu: MenuController, nav: NavController) {
        this.nav = nav;
  }
  
   openMenu() {
   this.menu.open();
 }
  
  user(){
      alert('hello');
      // this.nav.push(UserPage);
      
  }
}
