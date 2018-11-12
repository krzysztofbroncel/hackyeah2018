import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form',
  templateUrl: 'form.page.html',
  styleUrls: ['form.page.scss'],
})
export class FormPage {
  
  username: string;
  password: string;

  constructor(private navCtrl: NavController, private usersService: UsersService) {

  }

  login() {
    console.log(`Logging with user ${this.username} and password ${this.password}`);
    this.usersService.putRequest(this.username, this.password).subscribe(data => {
      if (data != null ) {
        console.log('Logged in.');
      }
    });
  }

  goHome() {
    this.navCtrl.navigateForward('home');
  }

}
