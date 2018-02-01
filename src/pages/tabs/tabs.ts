import { Component } from '@angular/core';

import { PegarPage } from '../pegar/pegar';
import { EmprestarPage } from '../emprestar/emprestar';
import { MeuPage } from '../meu/meu';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = PegarPage;
  tab2Root = EmprestarPage;
  tab3Root = MeuPage;

  constructor() {

  }
}
