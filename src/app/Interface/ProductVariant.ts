export interface ProductVariant {
  id: number;
  attributes: { [key: number]: string }; // Utilisation d'un objet avec des clés numériques pour les attributs
}
