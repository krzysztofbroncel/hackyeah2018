import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: 'form.page.html',
  styleUrls: ['form.page.scss'],
})
export class FormPage {
  
  username: string;
  password: string;

  constructor(public navCtrl: NavController) {

  }

  login() {
    console.log(`Logging with user ${this.username} and password ${this.password}`);
  }

  goHome() {
    this.navCtrl.navigateForward('home');
  }

}
