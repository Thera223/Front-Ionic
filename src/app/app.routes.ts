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
    path: 'panier',
    loadComponent: () => import('./panier/panier.page').then( m => m.PanierPage)
  },
 
  {
    path: 'panier-accueil',
    loadComponent: () => import('./panier-accueil/panier-accueil.page').then( m => m.PanierAcuueilPage)
  },

];
