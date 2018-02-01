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
import { PerfilPage } from '../pages/perfil/perfil';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PegarPage,
    EmprestarPage,
    MeuPage,
<<<<<<< HEAD
    MapaPage
=======
    PerfilPage

>>>>>>> d99ea4dd8f579470365e3b8540cb404659465040
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
<<<<<<< HEAD
    MapaPage
=======
    PerfilPage
>>>>>>> d99ea4dd8f579470365e3b8540cb404659465040
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleProvider
  ]
})
export class AppModule {}
