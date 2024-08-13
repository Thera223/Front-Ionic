import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then((m) => m.Tab4Page),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings.page').then((m) => m.SettingsPage),
  },
  {
    path: 'notifications',
    loadComponent: () => import('./notifications/notifications.page').then( m => m.NotificationsPage)
  },
  {
    path: 'modifermotdepass',
    loadComponent: () => import('./modifermotdepass/modifermotdepass.page').then( m => m.ModifermotdepassPage)
  },
  {
    path: 'historiques',
    loadComponent: () => import('./historiques/historiques.page').then( m => m.HistoriquesPage)
  },
  {
    path: 'deconnexion',
    loadComponent: () => import('./deconnexion/deconnexion.page').then( m => m.DeconnexionPage)
  },
];
