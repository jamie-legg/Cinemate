import { HttpProvider } from '../../providers/http/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '../../../node_modules/@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public http: HttpProvider,
    private geolocation: Geolocation) {

  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      console.log(resp)
      // resp.coords.longitude
      let long = resp.coords.longitude;
      let lat = resp.coords.latitude;
      let seq = this.http.getPostcode(lat,long)
      seq.subscribe((res: any) => {
        console.log(res)
      })
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

}
