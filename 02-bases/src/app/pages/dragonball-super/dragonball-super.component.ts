import {Component, computed, signal} from '@angular/core';
import {CharacterListComponent} from '../../components/dragonball/character-list/character-list.component';
import {CharacterAddComponent} from '../../components/dragonball/character-add/character-add.component';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super.component.html',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
  ],
  styleUrl: './dragonball-super.component.css'
})
export class DragonballSuperComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000}
  ]);


}
