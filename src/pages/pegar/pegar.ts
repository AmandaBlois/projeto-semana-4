import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { Person, Item} from '../../models/person-item';
import { PeopleProvider } from '../../providers/people/people';
import { PerfilPage } from '../perfil/perfil';
import { PersonDetailPage } from '../person-detail/person-detail';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-pegar',
  templateUrl: 'pegar.html',
})
export class PegarPage {
  items; // nosso vetor de itens
  resultadoBusca = [];
  userInput:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public peopleProv: PeopleProvider, public http : HttpClient) {
    //todo: change the inicialization
    this.resultadoBusca = this.peopleProv.listarItensDisponiveis();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PegarPage');
    this.items = this.peopleProv.listarItensDisponiveis();
    
  }

  getItems(ev) {  
    // updates the itens list
    // this.items = this.peopleProv.listarItensDisponiveis();
    this.http.get<any>('http://http://138.68.226.214:3000/getItens/').subscribe(
      (dados) => {
        console.log(dados);
        this.items = dados;
      }
    );

    // updates userInput variable
    this.userInput = ev.target.value;

    // Reset items back to all of the items
    this.resultadoBusca = [];
    for(let item of this.items){
      console.log(this.items);
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
      latitude: local.latitude,
      longitude: local.longitude
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
