import { Injectable } from '@angular/core';
import { Person, Item} from '../../models/person-item';

@Injectable()
export class PeopleProvider {
  people = [];
  itensDisponiveis = [];
  usuarioIndex = -1;

  constructor() {
  
  }

  incializePeople(person) {
    person.itens = [];
    person.reputacao = -1;

    this.usuarioIndex = this.people.length; // guarda a posicao do usuario
    this.people.push(person); // esse eh o usuario
    
  }

  getUsuarioAtivo(){
    return this.people[this.usuarioIndex];
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

  userItens(){
    let meusItens = [];

    meusItens = this.people[this.usuarioIndex].itens;

    return meusItens;
  }

}
