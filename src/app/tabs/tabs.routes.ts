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
          import('../tab1/tab1.page').then((m) => m.HomePage),
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
        path: 'settings',
        loadComponent: () =>
          import('../settings/settings.page').then((m) => m.SettingsPage),
      },

      {
        path: 'notifications',
        loadComponent: () =>
          import('../notifications/notifications.page').then(
            (m) => m.NotificationsPage
          ),
      },

      {
        path: 'historiques',
        loadComponent: () =>
          import('../historiques/historiques.page').then(
            (m) => m.HistoriquesPage
          ),
      },

      {
        path: 'modifiermotdepass',
        loadComponent: () =>
          import('../modifermotdepass/modifermotdepass.page').then(
            (m) => m.ModifermotdepassPage
          ),
      },

      {
        path: 'deconnexion',
        loadComponent: () =>
          import('../deconnexion/deconnexion.page').then(
            (m) => m.DeconnexionPage
          ),
      },

      {
        path: 'recu',
        loadComponent: () =>
          import('../recu/recu.page').then((m) => m.RecuPage),
      },
      {
        path: 'modifie-mot-de-passe',
        loadComponent: () =>
          import('../modifie-mot-de-passe/modifie-mot-de-passe.page').then((m) => m.ModifieMotDePassePage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'grid',
    redirectTo: 'categorie/categorie',
    pathMatch: 'full',
  },
];
