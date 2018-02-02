import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';

@IonicPage()
@Component({
  selector: 'page-meu',
  templateUrl: 'meu.html',
})
export class MeuPage {
  meusItens = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public people: PeopleProvider) {
    this.meusItens = people.userItens();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeuPage');
  }

  removerItem(item){
    //todo implement this
  }

}
