import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { TabsPage } from '../../pages/tabs/tabs';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

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
  informacao = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleSave: PeopleProvider, private camera: Camera, private geolocation: Geolocation, public http: HttpClient, private alertCtrl: AlertController) {
    this.person.local = <any>{};
    this.person.local.lat = 0;
    this.person.local.lng = 0;

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
    this.person.local.lng = this.longitude;
    this.person.local.lat = this.latitude;
    console.log(this.person.local);

    this.person.foto = 'ha!'; //REMOVE THIS PLS, ONLY FOR BRWOSER TESTING
    this.http.post<any>('http://138.68.226.214:3000/cadastro', this.person).subscribe((data) => {
      console.log(data);
      if(data.hasOwnProperty('code') == true) {
        console.log("Erro com o login...");
        if(data.code = 11000){
          this.informacao = 'Nome de usuário já está em uso';
        } 
        
      } else {
        let alert = this.alertCtrl.create({
          title: 'Cadastro feito',
          subTitle: 'Faça login para entrar!',
          buttons: ['Okay']
        });
        alert.present();
        console.log("Post sucessful!");
        this.peopleSave.incializePeople(this.person);
        this.navCtrl.pop();
      }
    });

    
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
