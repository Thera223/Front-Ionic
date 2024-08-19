
export interface Produit {
  id: number;
  description: string;
  libelle: string;
  prix: number;
  images: { url: string }[];
  fileInfo: { url: string}[];
}