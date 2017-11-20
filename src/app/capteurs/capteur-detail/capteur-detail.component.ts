import { Component, OnInit, Input } from '@angular/core';
import { Capteur } from '../capteur.model';

@Component({
  selector: 'app-capteur-detail',
  templateUrl: './capteur-detail.component.html',
  styleUrls: ['./capteur-detail.component.css']
})
export class CapteurDetailComponent implements OnInit {
  @Input() capteur: Capteur;

  constructor() { }

  ngOnInit() {
  }

}
