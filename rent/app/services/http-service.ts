import { Injectable } from '@angular/core';
// import {SERVER_URL} from './config';

import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {Page, Alert, NavController, Storage, LocalStorage} from 'ionic-angular';

import {Inject} from '@angular/core';


@Injectable()
export class HttpService {
    constructor(public http:Http){}
    loginstatus='hello';
    
    authenticate(name, password)
 {
 var username = name;
  var password = password;
  var creds = "username=" + username + "&password=" + password;

//   var headers = new Headers();
//   headers.append('Content-Type', 'application/json');
 
let headers = new Headers({ 'Content-Type': 'application/json'});
let options = new RequestOptions({ headers: headers });
  var parameter = JSON.stringify({name:username, password:password});

  this.http.post('http://localhost:8080/authenticate', parameter, options)
    .map(res => res.json())
    .subscribe(
      data => this.saveJwt(data),
      err => this.logError(err),
      () => console.log('Authentication Complete')
    );
}


saveJwt(jwt){
    
   if(jwt.success==false){
    //    this.nav.present(alert);
    this.loginstatus='false';
    console.log('in false condition');
    
   }
  if(jwt.token) {
     
    localStorage.setItem("id_token",jwt.token);
     this.loginstatus='true';
    
  }
}


logout(){
    localStorage.removeItem("id_token");
    
    
       }
logError(err) {
  console.error('There was an error: ' + err);
              }

show(){
   alert(localStorage.getItem("id_token"));
}

}