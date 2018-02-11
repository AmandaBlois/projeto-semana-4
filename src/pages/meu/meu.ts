import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { HttpClient } from '@angular/common/http';
import { Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-meu',
  templateUrl: 'meu.html',
})
export class MeuPage {
  menu;
  meusItens = [];
  currentUser;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public people: PeopleProvider, public http : HttpClient,
    public events: Events) {
      // sets the inicial page
      this.menu = "comigo";

      // updates user itens array when they change
      events.subscribe('userItensUpdate', (data) => {
        this.meusItens = this.people.getCurrentUserItens();
      });

      this.currentUser = this.people.getUsuarioAtivo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeuPage');
  }

  removerItem(item){
    //todo implement this
  }
}
