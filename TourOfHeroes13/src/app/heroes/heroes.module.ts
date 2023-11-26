import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroListItemComponent } from '../hero-list-item/hero-list-item.component';

const routes: Routes = [
    {
        path: '',
        component: HeroesComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        MatIconModule,
        MatListModule,
        MatInputModule,
        MatButtonModule,
    ],
    declarations: [HeroesComponent, HeroListItemComponent],
})
export class HeroesModule { }
