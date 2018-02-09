import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { HttpClientModule } from '@angular/common/http';


import { TabsPage } from '../pages/tabs/tabs';
import { PegarPage } from '../pages/pegar/pegar';
import { EmprestarPage } from '../pages/emprestar/emprestar';
import { MeuPage } from '../pages/meu/meu';
import { MapaPage } from '../pages/mapa/mapa';
import { PersonDetailPage } from '../pages/person-detail/person-detail';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PeopleProvider } from '../providers/people/people';
// importando o mapa (mike)
import { PerfilPage } from '../pages/perfil/perfil';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PegarPage,
    EmprestarPage,
    MeuPage,
    MapaPage,
    PerfilPage,
    PersonDetailPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALixsuuHy_8BLqB2WSIOsw_kOEBM2cp0s'
    }),
    IonicModule.forRoot(MyApp),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PegarPage,
    EmprestarPage,
    MeuPage,
    TabsPage,
    MapaPage,
    PerfilPage,
    PersonDetailPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleProvider,
    Camera,
    PhotoLibrary,
    Geolocation
  ]
})
export class AppModule {}
