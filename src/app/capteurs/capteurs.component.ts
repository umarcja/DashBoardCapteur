import { Component, OnInit } from '@angular/core';
import { Capteur } from './capteur.model';

@Component({
  selector: 'app-capteurs',
  templateUrl: './capteurs.component.html',
  styleUrls: ['./capteurs.component.css']
})
export class CapteursComponent implements OnInit {
  selectedCapteur: Capteur
  constructor() { }

  ngOnInit() {
  }

}
