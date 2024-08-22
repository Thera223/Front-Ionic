import { RoleType } from "./user";

export interface Client {
    id: number;
    nom:string;
    prenom:string;
    adresse:string;
    telephone:string;
  email: string; // Notez l'utilisation de Email[]
  username: string;
  motDePasse: string;
  // roleType: RoleType;
  
}
