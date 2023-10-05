import { Component, Input, Output,inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Character, SearchResults, AnimeCharacter } from 'src/app/models/characters.models';
import { environment } from 'src/environment/environment';
@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent {
  optionAnimeBirthday: string = "";
  // != I promised you, on the future must be not null
  //@Input() character!: Character;

  //crea una llista de productes buida
  characters: AnimeCharacter[] = [];
  //fica  el OBJ HTTPClient en la variable http
  http = inject(HttpClient);

  day: number = 1
  month: number = 12

  website: string = environment.website;
  //website: string = "https://api.escuelajs.co/api/v1/products";

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


  makeRequest(website: string, params: string, header: Object): void {
    // The first response is a SearchResults interface structure
    this.http.get<SearchResults>(website + params, header)
      .subscribe((data) => {
        // The seconds response is a AnimeCharacter interface structure
        this.characters = data.search_results;
      });
  }

  ngOnInit() {
    const headers = new HttpHeaders({
      'X-Client-Info': 'MiApp/1.0'  // Aquí puedes establecer el valor que desees
    });

    const httpOptions = {
      headers: headers
    };

    // fa un fetch de la api, saben que tindra la estructura de [Product,Product] id, title,etc
    //this.makeRequest(this.website, `?month=${this.month}&day=${this.day}`, httpOptions);
    //this.makeRequest(this.website, `?character_q=konata`, httpOptions);
    this.makeRequest(this.website, `?anime_q=attack`, httpOptions);

  }
}
