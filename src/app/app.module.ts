import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { PegarPage } from '../pages/pegar/pegar';
import { EmprestarPage } from '../pages/emprestar/emprestar';
import { MeuPage } from '../pages/meu/meu';
import { MapaPage } from '../pages/mapa/mapa';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PeopleProvider } from '../providers/people/people';
// importando o mapa (mike)
import { PerfilPage } from '../pages/perfil/perfil';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PegarPage,
    EmprestarPage,
    MeuPage,
    MapaPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALixsuuHy_8BLqB2WSIOsw_kOEBM2cp0s'
    }),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PegarPage,
    EmprestarPage,
    MeuPage,
    TabsPage,
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleProvider
  ]
})
export class AppModule {}
