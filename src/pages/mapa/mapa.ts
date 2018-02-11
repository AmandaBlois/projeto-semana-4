import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {

  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lat = this.navParams.get('latitude');
    this.lng = this.navParams.get('longitude');
    console.log("showing lat: " +this.lat + " long: " + this.lng);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

}
