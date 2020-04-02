import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginResult;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signIn(username,password){
    alert("Hello World "+username+" "+password);
    if(password =='1234'){
      this.loginResult = "Welcome "+username;
      this.navCtrl.push("PhoneBookPage");
    }else{
      this.loginResult= "Failed : Try again";
    }
  }
}
