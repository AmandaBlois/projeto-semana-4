import { Injectable } from '@angular/core';
import { Person, Item} from '../../models/person-item';

/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleProvider {
  people = [];

  constructor() {
    console.log('PeopleProvider loaded!');
    
  }

  incializePeople(person) {
    person.itens = [];

    this.people.push(person);
    console.log(person);
  }

  encontraPessoaNome(nomeProcurado){
    for(let i = 0; i < this.people.length; i++){
      if(nomeProcurado == this.people[i].nome) {
        return this.people[i];
      }
    }

    return "-1";
  }

  encontraPessoaUser(nomeProcurado){
    for(let i = 0; i < this.people.length; i++){
      if(nomeProcurado == this.people[i].user) {
        return this.people[i];
      }
    }

    return "-1";
  }



}
