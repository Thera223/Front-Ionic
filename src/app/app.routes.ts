import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  },
  {
    path: 'recu',
    loadComponent: () => import('./recu/recu.page').then( m => m.RecuPage)
  },
  {
    path: 'recu',
    loadComponent: () => import('./recu/recu.page').then( m => m.RecuPage)
  },
  {
    path: 'modifie-mot-de-passe',
    loadComponent: () => import('./modifie-mot-de-passe/modifie-mot-de-passe.page').then( m => m.ModifieMotDePassePage)
  },
];
