import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
// enviar informacion del padre al hijo diciendole que los personajes son obligatorios
  characters = input.required<Character[]>();
  listName = input.required<string>();


 }
