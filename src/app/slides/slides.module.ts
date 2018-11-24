import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SlidesPage} from './slides.page';
import { ChartsModule } from 'ng2-charts';
const routes: Routes = [
    {
        path: '',
        component: SlidesPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChartsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SlidesPage]
})
export class SlidesPageModule {
}
