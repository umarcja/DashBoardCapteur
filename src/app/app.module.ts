import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CapteursComponent } from './capteurs/capteurs.component';
import { CapteurListeComponent } from './capteurs/capteur-liste/capteur-liste.component';
import { CapteurDetailComponent } from './capteurs/capteur-detail/capteur-detail.component';
import { CapteurItemComponent } from './capteurs/capteur-liste/capteur-item/capteur-item.component';
import { QuestionListeComponent } from './question-liste/question-liste.component';
import { QuestionEditComponent } from './question-liste/question-edit/question-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CapteursComponent,
    CapteurListeComponent,
    CapteurDetailComponent,
    CapteurItemComponent,
    QuestionListeComponent,
    QuestionEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
