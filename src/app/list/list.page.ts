import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    private selectedItem: any;

    private icons = [
        'flask',
        'wifi',
        'beer',
        'football',
        'basketball',
        'paper-plane',
        'american-football',
        'boat',
        'bluetooth',
        'build'
    ];

    public items: Array<{ id: string; test: string; icon: string }> = [];

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        this.fetchData();
    }

    private fetchData() {
        this.usersService.getRequest().subscribe(data => {
            if (data != null) {
                this.populateList(data);
            }
        });
    }

    private populateList(data) {
        for (let i in data) {
            const person = data[i];
            console.log(person);

            this.items.push({
                id: person.id,
                test: person.test,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
}
