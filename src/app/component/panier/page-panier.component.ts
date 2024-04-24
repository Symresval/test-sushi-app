import { Component } from '@angular/core';
import { ManagerPanierService } from '../../service/manager-panier.service';
import { environment } from '../../../environments/environment';
import { Ligne } from '../../models/Ligne';

@Component({
  selector: 'app-page-panier', // Sélecteur utilisé pour incorporer ce composant dans d'autres composants HTML
  templateUrl: './page-panier.component.html', // URL du fichier HTML associé à ce composant
  styleUrls: ['./page-panier.component.css'] // Tableau de fichiers CSS à appliquer à ce composant
})
export class PagePanierComponent { // Définition de la classe du composant

  panier: Array<Ligne>; // Déclaration d'un tableau de type Ligne pour stocker les articles du panier
  pathImage = environment.apiGetImages; // Déclaration d'une variable pour stocker le chemin vers les images provenant de l'environnement
  total: number = 0; // Déclaration d'une variable pour stocker le total du panier, initialisée à 0

  constructor(private managerPanierService: ManagerPanierService) { // Constructeur du composant, injecte le service ManagerPanierService
    this.panier = managerPanierService.panier; // Initialise le panier en utilisant le panier du service
    this.calculerTotal(); // Appelle la méthode calculerTotal pour calculer le total du panier lors de la création du composant
  }

  ajouterQuantite(ligne: Ligne): void { // Méthode pour ajouter une quantité à une ligne du panier
    ligne.qte += 1; // Incrémente la quantité de 1
    this.managerPanierService.savePanier(); // Enregistre le panier après la modification
  }

  enleverQuantite(ligne: Ligne): void { // Méthode pour enlever une quantité à une ligne du panier
    ligne.qte -= 1; // Décrémente la quantité de 1
    if (ligne.qte < 0) { // Vérifie si la quantité devient négative
      ligne.qte = 0; // Réinitialise la quantité à zéro si elle devient négative
    }
    this.managerPanierService.savePanier(); // Enregistre le panier après la modification
  }

  supprimerLigne(ligne: Ligne): void { // Méthode pour supprimer une ligne du panier
    this.managerPanierService.supprimerLigne(ligne); // Appelle la méthode supprimerLigne du service pour supprimer la ligne spécifiée du panier
    this.panier = this.managerPanierService.panier; // Met à jour le panier après la suppression
  }

  calculerTotal(): void { // Méthode pour calculer le total du panier
    this.total = this.panier.reduce((acc, ligne) => acc + ligne.qte * ligne.box.prix, 0); // Utilise la méthode reduce pour calculer la somme des prix des articles dans le panier
  }
}
