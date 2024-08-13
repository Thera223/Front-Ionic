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
  {
    path: 'souscategorie',
    loadComponent: () => import('./souscategorie/souscategorie.page').then(m => m.SouscategoriePage)
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./detail/detail.page').then( m => m.DetailPage)
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
