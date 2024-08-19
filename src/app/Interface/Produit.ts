import {ProductVariant} from "./ProductVariant";


export interface Produit{
  images: string[];
  id:number;
  description: string
  libelle:string
  prix:number
  variantes: ProductVariant[]; // Liste des variantes
  fileInfo: FileInfo[]
}


export interface FileInfo {
  name: string;
  url: string;
}
