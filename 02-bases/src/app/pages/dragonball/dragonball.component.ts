import {Component, computed, signal} from '@angular/core';
import {NgClass} from '@angular/common';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css'
})
export class DragonballComponent {

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000},
    {id: 3, name: 'Trunks', power: 7000},
    {id: 4, name: 'Yamcha', power: 500}
  ]);

  powerClasses = computed(()=>{
    return{
      'text-danger': true,
    }
  })

}
