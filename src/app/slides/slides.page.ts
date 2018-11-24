import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slides',
    templateUrl: './slides.page.html',
    styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {


    public doughnutChartType: string = 'doughnut';
    public doughnutChartLabels: string[];
    public doughnutChartData: number[];

    public total: number;
    public numOfPeople: number;
    public currency: string;

    constructor() {
        this.doughnutChartLabels = ['Food & Restaurants', 'Transport', 'Activities & Misc', 'Fees', 'Souvenirs'];
        this.doughnutChartData = [750, 3000, 100, 50, 300];
        this.total = this.doughnutChartData.reduce((a, b) => a + b);
        this.numOfPeople = 2;
        this.currency = "EUR";
    }

    ngOnInit() {
    }

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
