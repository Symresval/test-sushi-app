import { Injectable } from '@angular/core';
import { Box } from '../models/Box';
import { Aliment } from '../models/Aliment';
import { ApiSushiService } from './api-sushi.service';
import { Ligne } from '../models/Ligne';

@Injectable({
  providedIn: 'root'
})
export class ManagerPanierService {

  panier: Array<Ligne>;
  CLE_PANIER: string = "panier";    // Nom de la clé pour localstorage.
  managerPanierService: any;
  

  constructor(private apiSushiService: ApiSushiService) {
    this.panier = JSON.parse(localStorage.getItem(this.CLE_PANIER) || "[]");
  }

  addBox(addQte: number, newBox: Box): void {   
    let ligne = new Ligne(addQte, newBox); 
    let estPresent = false;
  
    for (const uneLigne of this.panier) {
      if (uneLigne.box.id == newBox.id) {
        estPresent = true;
        uneLigne.qte += addQte;
        // TODO si qte = 0 il faut supprimer la ligne du panier
      }
    }

    if (!estPresent) {
      this.panier.push(ligne);
    }
  
    this.savePanier();  
  }

  ajouterQuantite(ligne: Ligne): void {
    ligne.qte += 1;
    this.savePanier();
  }

  enleverQuantite(ligne: Ligne): void {
    ligne.qte -= 1;
    // Si la quantité est inférieure à zéro, la réinitialiser à zéro
    if (ligne.qte < 0) {
      ligne.qte = 0;
    }
    this.savePanier();
  }

  supprimerLigne(ligne: Ligne): void {
    this.panier = this.panier.filter(item => item !== ligne);
    this.savePanier(); // Assurez-vous que savePanier() est correctement appelée ici
  }

  savePanier(): void {
    localStorage.setItem(this.CLE_PANIER, JSON.stringify(this.panier));  
  }


}
