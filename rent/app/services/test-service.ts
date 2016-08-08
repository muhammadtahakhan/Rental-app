import { Injectable } from '@angular/core';
// import {SERVER_URL} from './config';

import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {Page, Alert, NavController, Storage, LocalStorage} from 'ionic-angular';

import {Inject} from '@angular/core';


@Injectable()
export class TestService {
  data:any;
     constructor(public http: Http) {
    this.http = http;
    this.data = null;
  }

  test() {
    //Here, we're going to get a JSON data file, use the `map` call to parse json
    // and finally subscribe to the observable and set our data
    //to the value it provides once the http request is complete.
    this.http.get('http://192.168.2.111:8080/api')
      // .map(res => res.json())
      .subscribe(data => {
        // this.data = data;
        console.log(data);
      }, error => {
        console.log('Error with http.get: ', error);
      });
  }


}