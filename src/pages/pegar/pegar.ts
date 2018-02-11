import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { PeopleProvider } from '../../providers/people/people';
import { PersonDetailPage } from '../person-detail/person-detail';
import { HttpClient } from '@angular/common/http';
import { Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pegar',
  templateUrl: 'pegar.html',
})
export class PegarPage {
  items = [];
  lastSearchEv;
  resultadoBusca = [];
  userInput:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public people : PeopleProvider, public http : HttpClient,
    public events: Events) { 
      // updates user itens array when they change
      this.events.subscribe('itensFeedUpdate', (data) => {
        // print the entire feed until the user filter it
        // and then changes the subcrition to the search logic
        this.resultadoBusca = this.people.getItensFeed();

        //changes the subscription
        this.events.unsubscribe('itensFeedUpdate');
        this.events.subscribe('itensFeedUpdate', (data) => {
          this.items = people.getItensFeed();

          // reloads the search
          this.getItems({ target :{value: ''}});
        });
      });

      // gets the feed
      this.people.updateItensFeed();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PegarPage');
  }

  getItems(ev) {
    // TODO check if this should update our list...

    // saves the user search
    this.lastSearchEv = ev;

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
  }

  mapClick(local){
    let parametro = {
      latitude: local.latitude,
      longitude: local.longitude
    };
    
    this.navCtrl.push(MapaPage, parametro);
  }

  pessoaClick(person) {
    let parametro = {
      personObj: person
    };

    this.navCtrl.push(PersonDetailPage, parametro);
  }


}
