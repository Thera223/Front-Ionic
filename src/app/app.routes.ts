import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab1',
    loadComponent: () => import('./tab1/tab1.page').then((m) => m.HomePage),
  },
  {
    path: 'souscategorie',
    loadComponent: () =>
      import('./souscategorie/souscategorie.page').then(
        (m) => m.SouscategoriePage
      ),
  },
  {
    path: 'categorie/:id', // Route with parameter
    loadComponent: () =>
      import('./souscategorie/souscategorie.page').then(
        (m) => m.SouscategoriePage
      ),
  },
];
