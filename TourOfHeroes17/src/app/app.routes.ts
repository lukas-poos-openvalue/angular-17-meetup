import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent,
      ),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./hero-detail/hero-detail.component').then(
        (m) => m.HeroDetailComponent,
      ),
  },
  {
    path: 'heroes',
    loadComponent: () =>
      import('./heroes/heroes.component').then((m) => m.HeroesComponent),
  },
];
