import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmprestarPage } from './emprestar';

@NgModule({
  declarations: [
    EmprestarPage,
  ],
  imports: [
    IonicPageModule.forChild(EmprestarPage),
  ],
})
export class EmprestarPageModule {}
