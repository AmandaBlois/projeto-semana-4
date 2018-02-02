import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { TabsPage } from '../../pages/tabs/tabs';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  //todo: import proper class
  person = <any>{};
  fotoURI:string;
  fotoTirada = false;
  latitude;
  longitude;

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleSave: PeopleProvider, private camera: Camera, private geolocation: Geolocation) {
    this.person.local = <any>{};
    this.person.local.latitude = 0;
    this.person.local.longitude = 0;

    geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  inserir(){
    this.person.foto = this.fotoURI;
    this.person.local.longitude = this.longitude;
    this.person.local.latitude = this.latitude;
    console.log(this.person.local);
    this.peopleSave.incializePeople(this.person);
    this.navCtrl.push(TabsPage);
    
  }

  takeProfilePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      //img is a file uri
      this.fotoURI = imageData;
      this.fotoTirada = true;

     }, (err) => {
      // Handle error
     });

  
  }

}
