import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
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
    path: 'connexion',
    loadComponent: () => import('./connexion/connexion.page').then( m => m.ConnexionPage)
  },
  {
    path: 'inscription',
    loadComponent: () => import('./inscription/inscription.page').then( m => m.InscriptionPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cover',
    loadComponent: () => import('./cover/cover.page').then( m => m.CoverPage)
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
    path: 'produit/detail/:id', // Route with parameter
    loadComponent: () =>
      import('./detail/detail.page').then(
        (m) => m.DetailPage
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
    path: 'detail',
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
  {
    path: 'historiques',
    loadComponent: () => import('./historiques/historiques.page').then( m => m.HistoriquesPage)
  },
  {
    path: 'deconnexion',
    loadComponent: () => import('./deconnexion/deconnexion.page').then( m => m.DeconnexionPage)
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
  {
    path: 'souscategorie',
    loadComponent: () => import('./souscategorie/souscategorie.page').then(m => m.SouscategoriePage)
  },
  {
    path: 'detail',
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
    
    {
      path: 'recu/:id',
    loadComponent: () => import('./recu/recu.page').then((m) => m.RecuPage),
    },
  {
    path: 'modifie-mot-de-passe',
    loadComponent: () => import('./modifie-mot-de-passe/modifie-mot-de-passe.page').then( m => m.ModifieMotDePassePage)
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
