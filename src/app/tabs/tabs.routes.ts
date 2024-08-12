import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'grid',
        loadComponent: () =>
          import('../categorie/categorie.page').then((m) => m.categoriePage),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'person',
        loadComponent: () =>
          import('../tab4/tab4.page').then((m) => m.Tab4Page),
      },
      {
        path: '',
        redirectTo: 'categorie/categorie',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'categorie/categorie',
    pathMatch: 'full',
  },
];
