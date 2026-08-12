import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'João Pedro Bandeira — Design e código na mesma pessoa',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  },
  { path: '**', redirectTo: '' },
];
