// import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {

  // inyeccion de dependicenias
  constructor (
    public DragonballService: DragonballService
  ) {}

//   // lista de personajes
//   characters = signal<Character[]>([
//     {id: 1, name: 'Goku', power: 9001},
//     {id: 2, name: 'Vegeta', power: 5000},
//   ]);

// // recibimos el personaje en "character: Character" y para insertarlo, listado y esparcimos concatenando el nuevo personaje en nuestra señal list => [ ...list, character]
//   addCharacter(character: Character) {
//     this.characters.update(
//       list => [ ...list, character]
//     )
//   }


}
