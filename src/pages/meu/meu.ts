import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-meu',
  templateUrl: 'meu.html',
})
export class MeuPage {
  meusItens = [];
  usuario = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public people: PeopleProvider, public http : HttpClient) {
    // this.meusItens = people.userItens();
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeuPage');
  }

  removerItem(item){
    //todo implement this
  }

  atualizarLista(){
    this.usuario = this.people.getUsuarioAtivo().username;
    console.log(this.usuario);

    this.http.get<any>('http://138.68.226.214:3000/getMeusItens/'+this.usuario).subscribe(
      (dados) => {
        console.log(dados);
        this.meusItens = dados;
      }
    );
  }

}
