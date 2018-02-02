import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { TabsPage } from '../../pages/tabs/tabs';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleSave: PeopleProvider, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  inserir(){
    this.person.foto = this.fotoURI;
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
