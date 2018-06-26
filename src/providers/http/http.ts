import { HttpClient, HttpParams } from '@angular/common/http';
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

}
