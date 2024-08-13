import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'tab4',
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
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
