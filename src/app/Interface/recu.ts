export interface Produit {
  id: number;
  nom: string;
  prix: number;
  libelle: string;
  quantite: number;
}

export interface ProduitCommande {
  produit: Produit;
  quantite: number;
}

export interface Client {
  id: number;
  username: string;
  prenom: string;
  nom: string;
  adresse: string;
  telephone: string;
}

export interface Commande {
  id: number;
  produitCommandees: ProduitCommande[];
  client: Client;
}

export interface Payement {
  id: number;
  commande: Commande;
}

export interface Recu {
  id: number;
  date: Date;
  total: number;
  payement: Payement;
}
