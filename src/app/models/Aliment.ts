/**
* Modélise un objet aliment (sushi, soupe, etc.).
* @returns Un objet aliment
*/
export class Aliment {
    nom: string;
    quantite: number;
    /**
    * @param {string} nom - Nom de l'aliment
    * @param {number} quantite - Nombre d'aliments placés dans une box
    */
    constructor(nom: string, quantite: number) {
    this.nom = nom;
    this.quantite = quantite;
}
}