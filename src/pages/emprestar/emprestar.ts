import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Person, Item} from '../../models/person-item';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-emprestar',
  templateUrl: 'emprestar.html',
})
export class EmprestarPage {
  item:Item = new Item('','','','','','','','','','');

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public peopleProvider: PeopleProvider, private photoLibrary: PhotoLibrary, private camera: Camera,
    public http : HttpClient) {
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
    this.item.locador = ' ';
    this.item.imagem = ' ';
    this.item.dono = usuario.username;

    this.http.post('http://159.65.79.228:3000/item', this.item).subscribe((data) => {
      console.log(data);
      
      console.log("Post sucessful!");
      
    });

    // usuario.itens.push(this.item);
    this.item =  new Item('','','','','','','','','','');
    this.item.descricao = '';
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
      this.item.imagem = imageData;

     }, (err) => {
      // Handle error
     });


    
  }
}

