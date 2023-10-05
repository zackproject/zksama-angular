import { Component, Input } from '@angular/core';
import { AnimeCharacter } from 'src/app/models/characters.models';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() character!: AnimeCharacter;

}
