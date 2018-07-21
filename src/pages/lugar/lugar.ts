import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LugaresProvider } from '../../providers/lugares/lugares';

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {

	lugar: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public lugaresProvider: LugaresProvider) {
  	this.lugar = navParams.get('lugar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }

  guardarLugar(){
    if(!this.lugar.id){
      this.lugar.id = Date.now();
    }
  	this.lugaresProvider.createLugar(this.lugar);
    this.navCtrl.pop();
  }

}
