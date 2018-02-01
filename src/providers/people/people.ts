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
    console.log('PeopleProvider loaded!');
    this.incializePeople();
    console.log("people inicialized");
  }

  incializePeople() {
    this.people.push(new Person("fopor", "Rodrigo Ceccato", "(11)9999-9999", "São Paulo", 5, "missingImage", "4444-5555-33333-5555", 
    [
    new Item("Carregador", "Caregador de 3 watts", "imagemNotFound", "3 horas", "5 horas", 234, this.people[this.people.length], 150, true, ""),
    new Item("Cabo USB", "Cabo USB-C para celulares legais", "imagemNotFound", "3 horas", "5 horas", 123, this.people[this.people.length], 50, true, "")
    ]));

    return this.people;
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

  listarItensDisponiveis(){
    let i, j;
    this.itensDisponiveis = [];
    console.log(this.people);
    for(i = 0; i < this.people.length; i++){
      console.log("Searching person: " + this.people[i].nome + ".");
      for(j = 0; this.people[i].itens != null && j < this.people[i].itens.length; j++){
        console.log(this.people[i]);
        if(this.people[i].itens[j].disp == true) {
          this.itensDisponiveis.push(this.people[i].itens[j]);
        }
      }
    }

    return this.itensDisponiveis;
  }

}
