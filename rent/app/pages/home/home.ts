import {Page, MenuController, NavController} from 'ionic-angular';
import {UserPage} from './../user/user';
import {TestService} from './../../services/test-service';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    nav: any;
  constructor(public menu: MenuController, nav: NavController, public ts: TestService) {
        this.nav = nav;
  }
  
   openMenu() {
   this.menu.open();
 }
 

   test(){
     this.ts.test();
   }
  
  user(){
      alert('hello');
      // this.nav.push(UserPage);
      
  }
}
