import { Injectable } from '@angular/core';
import { Person, Item} from '../../models/person-item';

@Injectable()
export class PeopleProvider {
  people = [];
  itensDisponiveis = [];
  usuarioIndex = -1;

  constructor() {
  
  }

  // amanda fez isso, perguntar depois
  incializePeople(person) {
    person.itens = [new Item("Carregador", "Caregador de 3 watts", "imagemNotFound", "3 horas", "5 horas", 250, null, 2.4, true, "")];
    person.reputacao = -1;

    this.usuarioIndex = this.people.length; // guarda a posicao do usuario
    this.people.push(person); // esse eh o usuario
    
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
