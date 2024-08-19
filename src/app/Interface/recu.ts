export interface Produit {
    id: number;
    nom: string;
    prix: number;
    libelle: string;
    quantite: number;
  }
  
  export interface Commande {
    id: number;
    produitCommandees: { produit: Produit; quantite: number }[];
    client: { id: number; username: string ; prenom: string; nom: string; adresse: string; telephone: string}; // Changer de client à client
  }


//   export interface client {
//     id: number;
//     username: string;

//   }
  
  export interface Payement { // Changer de Payment à Payement
    id: number;
    commande: Commande;
  }
  
  export interface Recu {
    id: number;
    date: Date;
    total: number;
    payement: Payement; // Changer de payment à payement
  }
  