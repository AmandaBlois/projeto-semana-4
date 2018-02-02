import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person-detail',
  templateUrl: 'person-detail.html',
})
export class PersonDetailPage {
  // todo: type this
  person = <any>{};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("pagina de datalhes do usuario construioda");
    this.person = this.navParams.get('personObj');
    console.log(this.person);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonDetailPage');
  }

}
