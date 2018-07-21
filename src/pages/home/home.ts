import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';

import { LugaresProvider } from '../../providers/lugares/lugares';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	lugares: any = [];
  constructor(public navCtrl: NavController, public lugaresProvider: LugaresProvider) {
  	//Subscribiendonos a valuechanges podremos ver cuando se agregue
  	//un nuevo lugar sin necesidad de hacer refresh
  	this.lugaresProvider.getLugares().valueChanges()
  		.subscribe( (lugaresFB) => {
  			this.lugares = lugaresFB;
  		})
  }
  abrirLugar(){
  	this.navCtrl.push(LugarPage, {});
  }

  irAVistaDeDetalle(){
  	this.navCtrl.push(LugarPage, {lugar: {}});
  }

  irAVistaDeDetalleExistente(lugar){
  	this.navCtrl.push(LugarPage, {lugar: lugar});
  }

  deleteLugar(lugar){
  	if(confirm('Seguro que desea borrar este lugar?')){
  		return this.lugaresProvider.deleteLugar(lugar).then( () =>{
  			alert('Lugar eliminado correctamente');
  		});
  	}
  }

}
