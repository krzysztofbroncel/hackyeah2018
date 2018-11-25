import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {UsersService} from '../users.service';

@Component({
    selector: 'app-form',
    templateUrl: 'form.page.html',
    styleUrls: ['form.page.scss'],
})
export class FormPage implements OnInit {
    public countryList: any[] = ['Barcelona', 'Berlin', 'Budapest', 'Oslo', 'Paris', 'Rome'];

    public startDate: string;
    public endDate: string;
    public numOfPeople: number;
    private filteredCountryList: any[];

    constructor(private navCtrl: NavController, private usersService: UsersService) {
        this.startDate = usersService.startDate;
        this.endDate = usersService.endDate;
        this.numOfPeople = usersService.numOfPeople;
    }

    ngOnInit() {
    }

    getItems(searchbar) {
        // set q to the value of the searchbar
        const q = searchbar.srcElement.value;

        // if the value is an empty string don't filter the items
        if (!q) {
            this.filteredCountryList = [];
            return;
        }
        this.filteredCountryList = this.countryList.filter((v) => {
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
        this.usersService.startDate = this.startDate;
        this.usersService.endDate = this.endDate;
        this.usersService.numOfPeople = this.numOfPeople;
        this.usersService.destination = country;

        console.log('Clicked: ' + country);
        this.filteredCountryList = [];
        this.navCtrl.navigateForward('slides');
    }

}
