import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent {
  optionAnimeBirthday: string = "";
  changeAnime() {
    console.log("Mostra Anime");
    this.optionAnimeBirthday = "Anime";
  }

  changeBirthday() {
    console.log("Mostra Birthday");
    this.optionAnimeBirthday = "Birthday";

  }

  changeCharacter() {
    console.log("Mostra Characters");
    this.optionAnimeBirthday = "Character";

  }
}
