import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';

import { LugaresProvider } from '../../providers/lugares/lugares';

//import { Rx } from 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	lugares: any = [];
  constructor(public navCtrl: NavController, public lugaresProvider: LugaresProvider) {
    console.log("Home page");
  	//Subscribiendonos a valuechanges podremos ver cuando se agregue
  	//un nuevo lugar sin necesidad de hacer refresh
  	this.lugaresProvider.getLugares().valueChanges()
  		.subscribe( (lugaresFB) => {
  			this.lugares = lugaresFB;
        this.lugares = Object.keys(this.lugares).map((key) => this.lugares[key]);
        console.log("Estos son los lugares: ");
        console.log(this.lugares);
        }, error => {//En javascript el primer callback se ejecuta si todo 
        //sale bien, si hay algún error se ejecuta el segundo
        console.log(error);
  		});
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
