import {Page, MenuController, NavController} from 'ionic-angular';
import {HomePage} from './../home/home';

@Page({
  templateUrl: 'build/pages/start/start.html'
})
export class StartPage {
    
  constructor(public menu: MenuController, public nav: NavController ) {
       
  }
  
   openMenu() {
   this.menu.open();
 }
  
  goToHome(){
        this.nav.setRoot(HomePage);
    }
  
}
