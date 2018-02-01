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
  }

  incializePeople() {
    let itens = [];
    this.people.push("fopor", "Rodrigo Ceccato", "(11)9999-9999", "São Paulo", 5, "missingImage", "4444-5555-33333-5555", itens);
    itens.push(new Item("Carregador", "Caregador de 3 watts", "imagemNotFound", "3 horas", "5 horas", 234, this.people[this.people.length], 150, true, ""));
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
    this.itensDisponiveis = [];
    for(let i = 0; i < this.people.length; i++){
      for(let j = 0; j < this.people[i].itens.length; j++){
        if(this.people[i].itens[j].disp == true) {
          this.itensDisponiveis.push(this.people[i].itens[j]);
        }
      }
    }
  }

}
