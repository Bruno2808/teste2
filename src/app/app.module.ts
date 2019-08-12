import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCnsaqm1N3lUI7asHLZsjxUsKsoD7cbHJA",
   authDomain: "teste-49ca3.firebaseapp.com",
   databaseURL: "https://teste-49ca3.firebaseio.com",
   projectId: "teste-49ca3",
   storageBucket: "teste-49ca3.appspot.com",
   messagingSenderId: "1069279362105",
   appId: "1:1069279362105:web:4c1df2f7cdfd0d5e"
    })
   ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
