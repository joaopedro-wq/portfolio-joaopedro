import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'João Pedro Bandeira — Desenvolvedor Full-stack & UI/UX',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
  },
  { path: '**', redirectTo: '' },
];
