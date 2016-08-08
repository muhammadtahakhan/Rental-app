import {Page, MenuController, NavController} from 'ionic-angular';
import {HomePage} from './../home/home';
import {SigninPage} from './../signin/signin';

@Page({
  templateUrl: 'build/pages/user/user.html'
})
export class UserPage {
    
  constructor(public menu: MenuController, public nav: NavController ) {
       
  }
  
   openMenu() {
   this.menu.open();
 }
  
  goToHome(){
        this.nav.setRoot(HomePage);
    }
  
  signin(){
      alert('hello');
       this.nav.setRoot(SigninPage);
  }
  
}
