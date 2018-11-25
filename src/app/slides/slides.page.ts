import {Component, OnInit} from '@angular/core';

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

    constructor() {
        this.doughnutChartLabels = ['Food & Restaurants', 'Transport', 'Activities & Misc', 'Fees', 'Souvenirs'];
        this.doughnutChartData = this.low;
        this.total = this.doughnutChartData.reduce((a, b) => a + b);
        this.numOfPeople = 2;
        this.currency = "EUR";
        this.startDate = "2018-11-26"
        this.endDate = "2018-12-03"
        this.destination = "Barcelona"
    }

    ngOnInit() {
    }

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    public toggleColor() {
        this.currentColor = 'danger';
    }
}
