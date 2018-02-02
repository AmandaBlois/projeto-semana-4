import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { Person, Item} from '../../models/person-item';
import { PeopleProvider } from '../../providers/people/people';
import { PerfilPage } from '../perfil/perfil';

/**
 * Generated class for the PegarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pegar',
  templateUrl: 'pegar.html',
})
export class PegarPage {
  items; // nosso vetor de itens
  userInput:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleProv: PeopleProvider) {
    this.items = peopleProv.listarItensDisponiveis();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PegarPage');
    
  }

  getItems(ev) {
    // updates userInput variable
    this.userInput = ev.target.value;

    // Reset items back to all of the items
    // this.initializeItems();

    // set val to the value of the ev target
    // var val = ev.target.value;

    // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
      // this.items = this.items.filter((item) => {
        // return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
    // }
  }

  mapClick(){
    this.items = this.peopleProv.listarItensDisponiveis();
    this.navCtrl.push(MapaPage);
  }

}
