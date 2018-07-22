import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { LugarPage } from '../pages/lugar/lugar';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LugaresProvider } from '../providers/lugares/lugares';
import { AuthProvider } from '../providers/auth/auth';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

export const firebaseConfig = {
    apiKey: "AIzaSyBhCugolV85M5LzK4m84ticqZJetIRdzbU",
    authDomain: "ionicbasic-cc5bb.firebaseapp.com",
    databaseURL: "https://ionicbasic-cc5bb.firebaseio.com",
    projectId: "ionicbasic-cc5bb",
    storageBucket: "ionicbasic-cc5bb.appspot.com",
    messagingSenderId: "674783617199"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilPage,
    TabsPage,
    LugarPage,
    AboutPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilPage,
    TabsPage,
    LugarPage,
    AboutPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugaresProvider,
    AuthProvider,
    HttpClient
  ]
})
export class AppModule {}
