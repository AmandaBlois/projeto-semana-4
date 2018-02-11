import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { setDOM } from '@angular/platform-browser/src/dom/dom_adapter';

@IonicPage()
@Component({
  selector: 'page-emprestar',
  templateUrl: 'emprestar.html',
})
export class EmprestarPage {
  item = <any>{};
  currentUser;
  loading;
  fotoTirada = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public people: PeopleProvider, private camera: Camera, 
    public http : HttpClient, private alertCtrl: AlertController, public events: Events,
    public loadingCtrl: LoadingController) { 
      this.currentUser = this.people.getUsuarioAtivo();

      // default item settings
      this.item.disp = true;
      this.item.locador = ' ';
      this.item.dono = this.currentUser.username;
      this.resetItemForm();

      // listen to item insert reponse
      this.events.subscribe('insertItemStatus', (status) => {
        this.loading.dismiss();
      
      // all fine with the insert   
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
            title: 'Item inserido',
            subTitle: 'Logo alguém irá emprestá-lo :)',
            buttons: ['Okay']
          });
          alert.present();

          this.resetItemForm();

        } else if(status.mongo == 1 && status.userInput == 0) {
          // database rejected input 
          let alert = this.alertCtrl.create({
            title: 'Erro ao inserir',
            subTitle: 'Erro ao conectar com o banco de dados...',
            buttons: ['Okay']
          });
          alert.present();
        }
      }

      });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmprestarPage');
  }

  resetItemForm(){
    // reset item form
    this.item.nome = '';
    this.item.descricao = '';
    this.item.preco = '';
    this.item.multa = '';
    this.item.imagem = 'ho'; // enable this to test in browser
    this.fotoTirada = false;

    // set inicial data
    // TODO add time validator
    let myDate = new Date();
    let nowHours = myDate.getHours();
    let nowMinutes = myDate.getMinutes();
    let nowString = String(nowHours) + ':' + String(nowMinutes);

    this.item.tempoInicio = nowString;
    this.item.tempoFim = nowString;
  }

  inserir(){
    this.people.insertItem(this.item);

    //calls a loading screen while we wait for response from the API
    this.loading = this.loadingCtrl.create({
      content: 'Conectando com o servidor...'
    });
    this.loading.present();
  }
  
  takeItemPicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 128
    }

    this.camera.getPicture(options).then((imageData) => {
      this.item.imagem = imageData;
      this.fotoTirada = true;

     }, (err) => {
      // Handle error
      // TODO add handler
      this.fotoTirada = false;
     }); 
  }
}
