import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// servicio, no es mas que una clase pero que trabaja con "dependency injection". trabaja el servicio como si fuera un Singleton y se tiene la misma instacia
@Injectable({providedIn: 'root'})
export class DragonballService {

  // lista de personajes
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 5000},
  ]);

// recibimos el personaje en "character: Character" y para insertarlo, listado y esparcimos concatenando el nuevo personaje en nuestra señal list => [ ...list, character]
  // funcion para añadir un personaje
addCharacter(character: Character) {
    this.characters.update(
      list => [ ...list, character]
    )
  }

}

