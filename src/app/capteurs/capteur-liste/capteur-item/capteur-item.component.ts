import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Capteur } from '../../capteur.model';

@Component({
  selector: 'app-capteur-item',
  templateUrl: './capteur-item.component.html',
  styleUrls: ['./capteur-item.component.css']
})
export class CapteurItemComponent implements OnInit {
  @Input() capteur: Capteur;
  @Output() capteurSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.capteurSelected.emit(); 
  }

}
