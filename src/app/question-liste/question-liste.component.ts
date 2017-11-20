import { Component, OnInit } from '@angular/core';
import { Texte } from '../shared/texte.model';

@Component({
  selector: 'app-question-liste',
  templateUrl: './question-liste.component.html',
  styleUrls: ['./question-liste.component.css']
})
export class QuestionListeComponent implements OnInit {
  textes: Texte[] = [
    new Texte("QUestion 1", 1),
    new Texte("QUestion 2", 2)
  ];

  constructor() { }

  ngOnInit() {
  }

}
