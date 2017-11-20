import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Capteur } from '../capteur.model';

@Component({
  selector: 'app-capteur-liste',
  templateUrl: './capteur-liste.component.html',
  styleUrls: ['./capteur-liste.component.css']
})
export class CapteurListeComponent implements OnInit {
  @Output() capteurWasSelected = new EventEmitter<Capteur>();
  
  capteurs: Capteur[] = [
    new Capteur('Capteur FLIR 1', 'Description du premier capteur FLIR', 'http://img.directindustry.fr/images_di/projects/images-og/flir-libere-hausses-importantes-aux-capteurs-temperature-formation-images-thermiques-a35-a65-50438-10463882.jpg'),
    new Capteur('Capteur FLIR Numéro 2', 'Description du deuxième capteur', 'https://www.digitalsecuritymagazine.com/wp-content/uploads/2015/12/FLIR-FX.jpg')
  ];
  
  constructor() { }

  onCreateNewCapteur(){
    this.capteurs.push(new Capteur('A test capteur', 'Description', 'http://img.directindustry.fr/images_di/projects/images-og/flir-libere-hausses-importantes-aux-capteurs-temperature-formation-images-thermiques-a35-a65-50438-10463882.jpg'))
  }
  onCapteurSelected(capteur: Capteur){
    this.capteurWasSelected.emit(capteur);
  }
  ngOnInit() {
  }

}
