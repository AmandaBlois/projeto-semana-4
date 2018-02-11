import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from 'ionic-angular';


@Injectable()
export class PeopleProvider {
  itensFeed = [];
  userAtual;
  userItens = [];

  // TODO move this to a CONST files
  API_ENDPOINT = 'http://159.65.79.228:3000';

  constructor(public http : HttpClient, public events: Events) {  }

  updateUserItens(){
    this.http.get<any>(this.API_ENDPOINT + '/getMeusItens/'+this.userAtual.username).subscribe(
      (data) => {
        this.userItens = data.slice();
        this.events.publish('userItensUpdate', this.userItens);
      });
  }

  updateItensFeed() {
    //TODO remove currentUser itens from feed
    //TODO get itens current location to filter
    //TODO pass owner details
    this.http.get<any>(this.API_ENDPOINT + '/getItens/').subscribe(
      (data) => {
        this.itensFeed = data.slice();
        this.events.publish('itensFeedUpdate', this.itensFeed);
    });
  }

  insertItem(item){
    //todo: move this model to a models file
    let status = {
      mongo: 0,
      connection: 0,
      userInput: 0
    };

    this.http.post<any>(this.API_ENDPOINT + '/item', item).subscribe((data) => {
      // handles mongodb error
      if(data.hasOwnProperty('code') == true) {
      if(data.code = 11000){
        status.mongo = 1;
      } else {
        status.mongo = 1;
        console.log('Unhandled mongo error> ' + data.code);
      }
    } 
      // no mongodb error
      else {
        status.mongo = 0;
      }

      this.events.publish('insertItemStatus', status);
    }, (err) => {
      console.log(err.status);
      // 0 means no connection
      // but our page treats '0' as sucess
      // TODO: re-name errors numbers
      if(err.status != 0) status.connection = err.status;
      else status.connection = -1;

      this.events.publish('insertItemStatus', status);
    });
  }

  newRegister(person){
    //todo: move this model to a models file
    let status = {
      mongo: 0,
      connection: 0,
      userInput: 0
    };

    this.http.post<any>(this.API_ENDPOINT + '/cadastro', person).subscribe((data) => {      
      if(!data) {
        //TODO check if its even possible to get here...
        console.log('Got no return data...');
      }
      
      // handles mongodb error
      if(data.hasOwnProperty('code') == true) {
        if(data.code = 11000){
          status.mongo = 1;
        } else {
          status.mongo = 1;
          console.log('Unhandled mongo error> ' + data.code);
        }
      } 
      
      // no mongodb error
      else {
        status.mongo = 0;
      }

      this.events.publish('registerStatus', status);
    }, (err) => {
      console.log(err.status);
      // 0 means no connection
      // but our page treats '0' as sucess
      // TODO: re-name errors numbers
      if(err.status != 0) status.connection = err.status;
      else status.connection = -1;

      this.events.publish('registerStatus', status);
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
