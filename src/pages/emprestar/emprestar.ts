import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { Person, Item} from '../../models/person-item';

/**
 * Generated class for the EmprestarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emprestar',
  templateUrl: 'emprestar.html',
})
export class EmprestarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public people: PeopleProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmprestarPage');
  }

  inserir(){
    let person = this.people.people[this.people.usuarioIndex]
    this.person.item.push(this.people.item);
  }


}
}
