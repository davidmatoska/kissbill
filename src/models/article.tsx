export default class Article {
    // 1. Typage des propiétés d'un ticket modèle.
    reference: string;
    quantite: number;
    prix: number;
    created: Date;
     
    // 2. Définition des valeurs par défaut des propriétés d'un ticket modèle.
    constructor(
     reference: string,
     quantite: number = 1,
     prix: number = 1,
     created: Date = new Date()
    ) {
     // 3. Initialisation des propiétés d'un ticket modèle.
     this.reference = reference;
     this.quantite = quantite;
     this.prix = prix;
     this.created = created;
    }
   }