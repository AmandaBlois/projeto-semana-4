import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Person, Item} from '../../models/person-item';

@IonicPage()
@Component({
  selector: 'page-emprestar',
  templateUrl: 'emprestar.html',
})
export class EmprestarPage {
  item:Item = new Item('','','','','','','','','','');

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public peopleProvider: PeopleProvider, private photoLibrary: PhotoLibrary, private camera: Camera) {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmprestarPage');
  }

  inserir(){
    let usuario = this.peopleProvider.getUsuarioAtivo();
    this.item.disp = true;
    usuario.itens.push(this.item);
    this.item =  new Item('','','','','','','','','','');
  }
  
  takeItemPicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      //img is a file uri
      this.item.img = imageData;

     }, (err) => {
      // Handle error
     });


    
  }
}

