import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';

/*
  Generated class for the LugaresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LugaresProvider {

  constructor(public http: HttpClient, public afDB: AngularFireDatabase) {
    console.log('Hello LugaresProvider Provider');
  }
  public getLugares(){
  	return this.afDB.list('/lugares/');
  }

  public getLugar(id){
  	return this.afDB.object('/lugares/' + id);
  }

  public createLugar(lugar){
  	return this.afDB.database.ref('/lugares/' + lugar.id).set(lugar);
  }

  public editLugar(lugar){
  	return this.afDB.database.ref('/lugares/' + lugar.id).set(lugar);
  }

  public deleteLugar(lugar){
	return this.afDB.database.ref('/lugares/' + lugar.id).remove();
  }

}
