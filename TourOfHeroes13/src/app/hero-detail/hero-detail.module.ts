import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailResolver } from './hero-detail.resolver';

const routes: Routes = [
    {
        path: '',
        component: HeroDetailComponent,
        resolve: {
            hero: HeroDetailResolver,
        },
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
    ],
    declarations: [HeroDetailComponent],
    providers: [HeroDetailResolver],
})
export class HeroDetailModule { }
