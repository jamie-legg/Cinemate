import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }


  getPostcode(lat, long) {
    let url = 'http://api.postcodes.io/postcodes'
    return this.http.get( url, {
      params: {
        'lat': lat,
        'lon': long
      }
    });
  }

  getCinemas(postcode) {

    var httpheaders = new HttpHeaders();
    httpheaders.append('Access-Control-Allow-Origin' , '*');
    httpheaders.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    httpheaders.append('Accept','application/json');
    httpheaders.append('content-type','application/json');
     //let options = new RequestOptions({headers: httpheaders,withCredentials:true})
     
     
    let url = 'http://moviesapi.herokuapp.com/cinemas/find/'+postcode;
    return this.http.get(url, {})
  }

}
