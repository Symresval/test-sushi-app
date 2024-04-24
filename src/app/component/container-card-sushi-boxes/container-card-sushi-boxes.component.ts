import { Component } from '@angular/core';
import { ApiSushiService } from '../../service/api-sushi.service';
import { Box } from '../../models/Box';
import { Aliment } from '../../models/Aliment';
import { environment } from '../../../environments/environment';
import { ManagerPanierService } from '../../service/manager-panier.service';

@Component({
  selector: 'app-container-card-sushi-boxes',
  templateUrl: './container-card-sushi-boxes.component.html',
  styleUrl: './container-card-sushi-boxes.component.css'
})

export class ContainerCardSushiBoxesComponent {
boxes: Map<number, Box>;
pathImage = environment.apiGetImages;

constructor(private apiSushiService: ApiSushiService,private panierService:ManagerPanierService) {
  this.boxes = new Map;
}

ngOnInit(): void {
  this.getBoxes();
}

getBoxes(): void{
  // La méthode va récupérer une collection de boxes de l'API
  this.apiSushiService.getBoxes().subscribe((res: any)=>{
    // Boucle itérant sur chaque objet de l'API pour instancier et valoriser
    // les boxes de l'application :
    for (let boxApi of res) {
      let box: Box = new Box();
      box.id = boxApi.id;
      box.nom = boxApi.nom;
      box.nbPieces = boxApi.pieces;
      box.prix = boxApi.prix.toFixed(2);
      box.image = boxApi.image;
      box.saveurs = boxApi.saveurs;
      let listeAliments: Aliment[] = [];
      for (let alimentApi of boxApi.aliments) {
        let aliment = new Aliment(alimentApi.nom, alimentApi.quantite);
        listeAliments.push(aliment);
      }
      box.aliments = listeAliments;
      this.boxes.set(boxApi.id, box);
      }
  });
  }

  ajouterAuPanier(uneBox:Box,qte:number){
  
    this.panierService.addBox(1,uneBox)
  }
}