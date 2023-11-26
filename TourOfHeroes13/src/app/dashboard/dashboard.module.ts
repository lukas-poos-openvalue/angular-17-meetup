import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        MatInputModule,
    ],
    declarations: [DashboardComponent, HeroSearchComponent],
})
export class DashboardModule { }
