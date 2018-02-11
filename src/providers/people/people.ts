import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from 'ionic-angular';


@Injectable()
export class PeopleProvider {
  itensFeed = [];
  usuarioIndex = -1;
  userAtual;
  userItens = [];

  constructor(public http : HttpClient, public events: Events) { }

  updateUserItens(){
    this.http.get<any>('http://159.65.79.228:3000/getMeusItens/'+this.userAtual.username).subscribe(
      (data) => {
        this.userItens = data.slice();
        this.events.publish('userItensUpdate', this.userItens);
      });
  }

  updateItensFeed() {
    //TODO remove currentUser itens from feed
    //TODO get itens current location to filter
    this.http.get<any>('http://159.65.79.228:3000/getItens/').subscribe(
      (data) => {
        this.itensFeed = data.slice();
        this.events.publish('itensFeedUpdate', this.itensFeed);
    });
  }

  getItensFeed() {
    return this.itensFeed;
  }

  getCurrentUserItens(){
    return this.userItens;
  }

  getUsuarioAtivo(){
    return this.userAtual;
  }

  setCurrentUser(user) {
    this.userAtual = user;
  }

}
