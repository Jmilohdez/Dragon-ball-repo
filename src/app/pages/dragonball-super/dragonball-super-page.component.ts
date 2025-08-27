// import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {

  // inyeccion de dependicenias tradicional
  // constructor (
  //   public DragonballService: DragonballService
  // ) {}

          // inyeccion de dependencias del servcio y las clase DragonballService
  public DragonballService = inject(DragonballService)




}
