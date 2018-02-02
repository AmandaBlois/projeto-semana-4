import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaPage } from './mapa';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MapaPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALixsuuHy_8BLqB2WSIOsw_kOEBM2cp0s'
    })
  ],
})
export class MapaPageModule {}
