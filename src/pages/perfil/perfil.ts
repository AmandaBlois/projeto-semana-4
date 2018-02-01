import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  person = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleSave: PeopleProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  inserir(){
    this.peopleSave.incializePeople(this.person);
    
  }

}
