import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {

    name = signal('')
    power = signal(0)

    // Output componente que emite algo y es de tipo personaje (Character) esto lo hace una funcion generica <Character>
    newCharacter = output<Character>();

   addCharacter() {
    if ( !this.name() || !this.power() || this.power() <= 0 ) {
      return;
    }

    const newCharacter:Character = {
      id: Math.floor(Math.random() * 1000), // Colocamos cualquier ID
      name: this.name(),
      power: this.power(),
  };

    // this.characters.update((list) => [...list, newCharacter]);
    // aqui es donde se agrega el personaje
    this.newCharacter.emit(newCharacter);
    this.resetFields();

  }
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

 }
