import {Page, MenuController, Platform, Config} from 'ionic-angular';
import {Geolocation, GoogleMaps} from 'ionic-native';


@Page({
  templateUrl: 'build/pages/map/map.html'
})
export class MapPage {
    
    map;
   
 constructor(public platform: Platform) {
    //  this.initializeMap();
    // this.watch();
  }
  
  
  location(){
      Geolocation.getCurrentPosition().then((resp) => {
          alert(resp.coords.latitude);
          alert(resp.coords.longitude);
 //resp.coords.latitude
 //resp.coords.longitude
 
})

  }
  
  
 
  
  
  watch(){
  let watch = Geolocation.watchPosition();
watch.subscribe((data) => {
 console.log(data.coords.latitude);
 console.log(data.coords.longitude);
})
}
 
 
 
 
//  initializeMap() {
 
//         this.platform.ready().then(() => {
//             var minZoomLevel = 12;
 
//             this.map = new google.maps.Map(document.getElementById('map_canvas'), {
//                 zoom: minZoomLevel,
//                 center: new google.maps.LatLng(38.50, -90.50),
//                 mapTypeId: google.maps.MapTypeId.ROADMAP
//             });
//         });
//     }  
 
  
}
  

