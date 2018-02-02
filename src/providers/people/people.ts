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
  itensDisponiveis = [];

  constructor() {
  
  }

  // incializePeople() {
  //   this.people.push(new Person("fopor", "Rodrigo Ceccato", "(11)9999-9999", "São Paulo", 5, "missingImage", "4444-5555-33333-5555", 
  //   [
  //   new Item("Carregador", "Caregador de 3 watts", "imagemNotFound", "3 horas", "5 horas", 250, null, 2.4, true, ""),
  //   new Item("Cabo USB", "Cabo USB-C para celulares legais", "imagemNotFound", "3 horas", "5 horas", 123, null, 50, true, "")
  //   ]));

  //   return this.people;
    
  // }

  // amanda fez isso, perguntar depois
  incializePeople(person) {
    person.itens = [new Item("Carregador", "Caregador de 3 watts", "imagemNotFound", "3 horas", "5 horas", 250, null, 2.4, true, "")];
    person.reputacao = 3.7;

    this.people.push(person);
  }

  listarItensDisponiveis(){
    let i, j;

    this.itensDisponiveis = [];

    for(i = 0; i < this.people.length; i++){

      
      for(j = 0; this.people[i].itens != null && j < this.people[i].itens.length; j++){

        if(this.people[i].itens[j].disp == true) {
          this.people[i].itens[j].dono = this.people[i];
          this.itensDisponiveis.push(this.people[i].itens[j]);
        }
      }
    }

    return this.itensDisponiveis;
  }

}
