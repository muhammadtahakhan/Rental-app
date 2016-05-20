import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {MapPage} from './pages/map/map';
import {StartPage} from './pages/start/start'

MapPage 
@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = StartPage;
//    rootPage: any = MapPage;
   
  constructor(platform: Platform) {
   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.backgroundColorByHexString('#f2b632')
    });
  }
}
