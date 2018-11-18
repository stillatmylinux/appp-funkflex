import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Store global variables to use throughout app

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GlobalVars {

  data: any = null;
  useDynamicContentModule: boolean = true; // false when using our builder on remote Ionic builder?
  // url should be WP site with AP installed, dynamically changes based on build form
  appid: string = '17';
  apiurl: string = 'https://myapppresser.com/funkflex/'
  endpoint: string = 'wp-json/ap3/v1/app/17';
  api: string = this.apiurl + this.endpoint;

  constructor( public http: Http ) {}

  getApi() {

    // development API
    if( window.location && window.location.href && window.location.href.indexOf('localhost') >=0 ) {
      return 'https://myapppresser.com/funkflex/wp-json/ap3/v1/app/17'
    }

    return this.api;
  }

  getApiRoot() {
    return this.apiurl;
  }

  getAppId() {
    return this.appid;
  }

  getUseDynamicPageModule() {
    return this.useDynamicContentModule;
  }

}