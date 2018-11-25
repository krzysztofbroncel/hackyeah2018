import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {UsersService} from '../users.service';

@Component({
    selector: 'app-slides',
    templateUrl: './slides.page.html',
    styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
    public low = [750, 3000, 100, 50, 300];
    public high = [150, 5000, 200, 50, 1000];

    public doughnutChartType = 'doughnut';
    public doughnutChartLabels: string[];
    public doughnutChartData: number[];

    public total: number;
    public numOfPeople: number;
    public currency: string;
    public startDate: string;
    public endDate: string;
    public destination: string;

    public currentColor = 'secondary';

    public selectedIncome;

    constructor(private usersService: UsersService) {
        this.doughnutChartLabels = ['Food & Restaurants', 'Transport', 'Activities & Misc', 'Fees', 'Souvenirs'];
        this.doughnutChartData = this.low;

        this.currency = 'EUR';
        this.updateNumbers();
    }

    public updateNumbers() {
        this.total = this.doughnutChartData.reduce((a, b) => a + b);
        this.numOfPeople = 2;
    }

    ngOnInit() {
        this.startDate = this.usersService.startDate;
        this.endDate = this.usersService.endDate;
        this.numOfPeople = this.usersService.numOfPeople;
        this.destination = this.usersService.destination;
    }

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    public update(event) {
        if (event) {
            this.doughnutChartData = this.high;
        } else {
            this.doughnutChartData = this.low;
        }
        this.updateNumbers();
    }

    public toggleColor() {
        this.currentColor = 'danger';
    }
}
