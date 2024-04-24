// import { Box } from "./Box";


// /**
//  * Modélise les paniers de commande de l'application.
//  * @returns Un objet panier* 
//  */
// export class Panier {
//     //articles: Map<number, Box>; // La clé sera l'ID de la box
//     // Remarque : Les Map ne sont pas JSON friendly en ne sont pas serialisables avec JSON.stringify().
//     // voir article : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Map
//     articles: Box[];
//     validation: boolean;        // Si vrai, commande passée en préparation, si faux commande non terminée
//     surPlace: boolean;          // Si vrai "sur place", si faux "à emporter"

//     constructor(validation: boolean = false, surPlace: boolean = true) {  
//         this.articles = [];
//         this.validation = validation;
//         this.surPlace = surPlace;
//     }

//     /**
//      * Méthode qui prend un objet Box et retourne l'indice de position de l'article dans la liste articles.
//      * @param {Box}article - Article faisant l'objet de la recherche dans liste d'articles du panier.
//      * @returns Le numéro d'indice si la box est présente, en absence la valeur -1 sera retournée.
//      */
//     trouverArticleParId(article: Box): number {
//         let indice = -1;
//         for (let i in this.articles) {
//             if (this.articles[i].id == article.id) {                
//                 return parseInt(i);
//             }
//         }
//         return indice;
//     }

//     /**
//      * Incrémente de 1 la quantité à commander de la box passé en arguement.
//      * @param {Box}box - Box à incrémenter
//      */
//     incNbBox(box: Box) {        
//         box.quantiteCommande += 1;
//         //console.log(`Augmentation à : ${box.quantiteCommande}`);
//     }

//     /**
//      * Décremente de 1 la quantité à commander de la box passée en argument.
//      * @param {Box}box - Box à décrémenter
//      */
//     decNbBox(box: Box) {
//         if(box.quantiteCommande - 1 > 0) box.quantiteCommande -= 1;
//         //console.log(`Baisse à : ${box.quantiteCommande}`);
//     }

//     /**
//      * Supprimer une box du panier à partir de sa référence.
//      * @param {Box}box -Référence de la box à supprimer du panier
//      */
//     supBox(box: Box) {
//         box.quantiteCommande = 0;
//         let i = this.trouverArticleParId(box);        
//         this.articles.splice(i, 1)
//     }

//     /**
//      * Vide tout le contenu du panier.
//      */
//     viderPanier() {
//         // Boucle de suppression des boxes : mettre la quantité à 0 pour chaque box
//         for (let box of this.articles) {
//             box.quantiteCommande = 0;
//         }

//         // Vider la liste articles :
//         this.articles.length = 0;

//         this.articles.length = 0;
//         this.validation = false;
//         this.surPlace = true;
//     }

//     /**
//      * Retourne le nombre de boxes contenu dans le panier.
//      * @returns Le nombre de boxes du panier
//      */
//     nbBox(): number {
//         let n = 0;
//         for(let box of this.articles) {
//             n += box.quantiteCommande;
//         }
//         return n;
//     }

//     /**
//      * Retourne le nombre total de pièces contenu dans le panier.
//      * @returns Le nombre total de pièces
//      */
//     nbPiecesTotal(): number{
//         let nbPieces = 0;
//         for (let box of this.articles) {
//             nbPieces += box.quantiteCommande * box.nbPieces;
//         }
//         return nbPieces;
//     }

//     /**
//      * Calcul la valeur total du panier
//      * @returns Le montant total du panier
//      */
//     montantTotal(): number{
//         let total: number = 0.0;
//             for (let box of this.articles) {
//                 total += box.quantiteCommande * box.prix;
//             }
//         return total;
//     }
// }