import { Aliment } from "./Aliment";
/**
* Modélise une box qui contient des aliments et qui pourra être placé dans un panier.
* @returns Un objet box
* @param {number} quantiteCommande - Nombre de boxes contenus pour un panier donné
*/
export class Box {
id: number;
nom: string;
nbPieces: number;
prix: number;
image: string;
aliments: Aliment[];
saveurs: string[];

/**
*
* @param {number} id -Identifiant unique de la box
* @param {string} nom - Nom de la box
* @param {number} nbPieces - Nombre de pièces/aliments contenu dans la box
* @param {number} prix - Prix unitaire en € de la box
* @param {string} image - Nom du fichier image de la box
* @param {string[]} aliments - Liste des objets Aliment contenu dans la box
* @param {string[]} saveurs - Liste de string décrivant les saveurs principales
de la box
*/
constructor(id: number = 0,
nom: string = "",
nbPieces: number = 0,
prix: number = 0.0,
image: string = "",
aliments: Aliment[] = [],
saveurs: string[] = []
) {
this.id = id;
this.nom = nom;
this.nbPieces = nbPieces;
this.prix = prix;
this.image = image;
this.aliments = aliments;
this.saveurs = saveurs;
}
}