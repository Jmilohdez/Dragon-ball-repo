import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// carga y manteniendo los datos en local storage
const loadFromLocalStorage = (): Character[] => {
                                                      // null coalescing ?? [] con ?? [] sabememos si la instruccion es nula o undefined
  const characters = localStorage.getItem('characters')

  return characters ? JSON.parse(characters):[];

}

// servicio, no es mas que una clase pero que trabaja con "dependency injection". trabaja el servicio como si fuera un Singleton y se tiene la misma instacia
@Injectable({providedIn: 'root'})
export class DragonballService {
  // incializacion de la señal
  // Lista y carga de personajes
  characters = signal<Character[]>(loadFromLocalStorage())

  // efecto: es una funcion que recibe un callback, ese callback es otra funcion que vamos a disparar cada que algo suced

  saveToLocalStorage = effect(() => {
                    // serializar un aerrlgo como un string uso JSON.stringify el valor de la señal
    localStorage.setItem('characters', JSON.stringify (this.characters()));  // grabamos en localstorage
  });

// recibimos el personaje en "character: Character" y para insertarlo, listado y esparcimos concatenando el nuevo personaje en nuestra señal list => [ ...list, character]
  // funcion para añadir un personaje
addCharacter(character: Character) {
    this.characters.update(
      list => [ ...list, character]
    )
  }

}

