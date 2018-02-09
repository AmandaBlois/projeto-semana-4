import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { TabsPage } from '../../pages/tabs/tabs';
import { PerfilPage } from '../../pages/perfil/perfil';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  person = <any>{};
  retorno = <any>{};
  informacao = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : HttpClient, public peopleSave: PeopleProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logar(){
    this.informacao = "Logando...";
    this.http.post('http://138.68.226.214:3000/login', this.person).subscribe((data) => {
      console.log(data);
      if(!data) {
        this.informacao = "Erro acessando o servidor...";
      } else if(data.hasOwnProperty('nome') == false) {
        this.informacao =  "Usuário ou senha inválidos!";
      } else {
        this.informacao = "Logou, sangue bom!";

        this.peopleSave.updateUserAtual(data);
        this.navCtrl.push(TabsPage);
      }
    });
  }

  cadastrar(){
    this.navCtrl.push(PerfilPage);
  }

}
