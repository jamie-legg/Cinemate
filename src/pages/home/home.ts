import { HttpProvider } from '../../providers/http/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '../../../node_modules/@ionic-native/geolocation';
import { postcodeResponse } from '../../models/postcodeResponse'

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
      this.getPostcode(resp.coords.latitude, resp.coords.longitude)
      }).catch((error) => {
       console.error('Error getting location', error);
     });

  }

  getPostcode(lat, long) {
    let seq = this.http.getPostcode(lat,long)
      seq.subscribe((res: any) => {
        console.log(res)
        if (res.status == 200)
        {
          this.getCinemas(res.result[0].postcode)
        }
      })
  }

  getCinemas(postcode) {
    let seq = this.http.getCinemas(postcode)
    seq.subscribe((res:any) => {
      console.log(res)
    })
  }

}
