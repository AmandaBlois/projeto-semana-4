import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { Person, Item} from '../../models/person-item';
import { PeopleProvider } from '../../providers/people/people';
import { PerfilPage } from '../perfil/perfil';
import { PersonDetailPage } from '../person-detail/person-detail';

@IonicPage()
@Component({
  selector: 'page-pegar',
  templateUrl: 'pegar.html',
})
export class PegarPage {
  items; // nosso vetor de itens
  resultadoBusca = [];
  userInput:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleProv: PeopleProvider) {
    //todo: change the inicialization
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PegarPage');
    this.items = this.peopleProv.listarItensDisponiveis();
    
  }

  getItems(ev) {

    // updates the itens list
    this.items = this.peopleProv.listarItensDisponiveis();

    // updates userInput variable
    this.userInput = ev.target.value;

    // Reset items back to all of the items
    this.resultadoBusca = [];
    for(let item of this.items){
      this.resultadoBusca.push(item);
    }

    // set val to the value of the ev target
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.resultadoBusca = this.resultadoBusca.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
     }

     console.log(this.resultadoBusca);
  }

  mapClick(local){
    let parametro = {
      latitude: 0,
      longitude: 0
    };
    
    this.items = this.peopleProv.listarItensDisponiveis();
    this.navCtrl.push(MapaPage, parametro);
  }

  pessoaClick(person) {
    let parametro = {
      personObj: person
    };

    this.navCtrl.push(PersonDetailPage, parametro);
  }

}
