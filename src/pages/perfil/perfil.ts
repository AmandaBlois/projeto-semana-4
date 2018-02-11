import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';

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
  gotLocation = false;
  latitude;
  longitude;
  informacao = '';
  loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, public People : PeopleProvider, 
    private camera: Camera, private geolocation: Geolocation, public http: HttpClient, 
    private alertCtrl: AlertController, public events: Events, public loadingCtrl: LoadingController ) {

    this.person.local = <any>{};
    this.person.local.lat = 0;
    this.person.local.lng = 0;

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.gotLocation = true;
     }).catch((error) => {
       console.log('Error getting location', error);
       this.gotLocation = false;
     });

     // registers for register status
    this.events.subscribe('registerStatus', (status) => {
      this.loading.dismiss();

      // TODO IF gotLocatiton is now TRUE
      // all fine with the register   
      if(status.connection != 0) {
        // got a problem with the connection
        let alert = this.alertCtrl.create({
          title: 'Erro ao registrar',
          subTitle: 'Erro de conexão!',
          buttons: ['Okay']
        });

        //TODO add more errors message
        if(status.connection == 400) alert.setSubTitle('Preencha todos os campos!');
        if(status.connection == 413) alert.setSubTitle('Tentativa de envio de arquivo muito grande!');
        else if(status.connection == -1) alert.setSubTitle('Impossível alcançar o servidor!');

        alert.present();
      } else {
        // connection is okay
        if(status.mongo == 0 && status.userInput == 0){
          // user created
          let alert = this.alertCtrl.create({
            title: 'Cadastro feito',
            subTitle: 'Faça login para entrar!',
            buttons: ['Okay']
          });
          alert.present();
          this.navCtrl.pop();

        } else if(status.mongo == 1 && status.userInput == 0) {
          // database rejected input
          this.informacao = 'Nome de usuário já está em uso';
        }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  ngOnDestroy() {
    console.log('Unsubscribing events...');
    this.events.unsubscribe('registerStatus');
  }

  inserir(){
    this.person.foto = this.fotoURI;
    this.person.local.lng = this.longitude;
    this.person.local.lat = this.latitude;

    console.log(this.person);
    this.People.newRegister(this.person);    

    //calls a loading screen while we wait for response from the API
    this.loading = this.loadingCtrl.create({
      content: 'Conectando com o servidor...'
    });
    this.loading.present();
  }

  takeProfilePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 256
    }

    this.camera.getPicture(options).then((imageData) => {
      //img is a file uri
      this.fotoURI = imageData;
      this.fotoTirada = true;

     }, (err) => {
      // Handle error
      // TODO add error handler
     });

  
  }

}
