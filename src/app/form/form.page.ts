import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {UsersService} from '../users.service';

@Component({
    selector: 'app-form',
    templateUrl: 'form.page.html',
    styleUrls: ['form.page.scss'],
})
export class FormPage implements OnInit {
    public countryList: Array<any>;

    constructor(private navCtrl: NavController, private usersService: UsersService) {

    }

    ngOnInit() {
        this.initializeItems();
    }

    initializeItems(): void {
        this.countryList = ['Abc', 'Cde'];
    }

    getItems(searchbar) {
        // Reset items back to all of the items
        this.initializeItems();

        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;

        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }

        this.countryList = this.countryList.filter((v) => {
            if (v) {
                if (v.toLowerCase().indexOf(q.toLowerCase()) >= 0) {
                    return true;
                }
                return false;
            }
        });

        console.log(q, this.countryList.length);

    }

    buttonClick(country) {
        console.log('Clicked: ' + country);
        this.navCtrl.navigateForward('slides');
    }

}
