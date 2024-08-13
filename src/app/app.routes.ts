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
    path: 'confirmation',
    loadComponent: () => import('./confirmation/confirmation.page').then( m => m.ConfirmationPage)
  },
  {
    path: 'livraison',
    loadComponent: () => import('./livraison/livraison.page').then( m => m.LivraisonPage)
  },
  {
    path: 'mode',
    loadComponent: () => import('./mode/mode.page').then( m => m.ModePage)
  },
  {
    path: 'paiement',
    loadComponent: () => import('./paiement/paiement.page').then( m => m.PaiementPage)
  },
];
