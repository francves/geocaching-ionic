import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient, public afDB: AngularFireDatabase,
  	public afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  loginWithFacebook(){
  	return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout(){
  	return this.afAuth.auth.signOut();
  }

}
