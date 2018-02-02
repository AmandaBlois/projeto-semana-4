import { Component } from '@angular/core';

import { PegarPage } from '../pegar/pegar';
import { EmprestarPage } from '../emprestar/emprestar';
import { MeuPage } from '../meu/meu';
import { PeopleProvider } from '../../providers/people/people';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = PegarPage;
  tab2Root = EmprestarPage;
  tab3Root = MeuPage;

  constructor(public peopleProvider: PeopleProvider) {

  }

  updateContent(){
    this.peopleProvider.listarItensDisponiveis();
  }
}
