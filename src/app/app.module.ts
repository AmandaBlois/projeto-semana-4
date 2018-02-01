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


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PegarPage,
    EmprestarPage,
    MeuPage,
    MapaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
