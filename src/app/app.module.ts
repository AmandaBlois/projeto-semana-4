import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { PhotoLibrary } from '@ionic-native/photo-library';

import { TabsPage } from '../pages/tabs/tabs';
import { PegarPage } from '../pages/pegar/pegar';
import { EmprestarPage } from '../pages/emprestar/emprestar';
import { MeuPage } from '../pages/meu/meu';
import { MapaPage } from '../pages/mapa/mapa';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PeopleProvider } from '../providers/people/people';
// importando o mapa (mike)
import { MapaPageModule } from '../pages/mapa/mapa.module';
import { PerfilPage } from '../pages/perfil/perfil';

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
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PegarPage,
    EmprestarPage,
    MeuPage,
    TabsPage,
    MapaPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleProvider,
    Camera,
    PhotoLibrary
  ]
})
export class AppModule {}
