import {Component, computed, signal} from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css'
})
export class DragonballSuperComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000}
  ]);

  addCharacter(){
   if(!this.name() || !this.power || this.power() <= 0){
     return;
   }
   const newCharacter: Character = {
     id: this.characters().length + 1,
     name: this.name(),
     power: this.power()
   }
   this.characters.update(characters => [...characters, newCharacter]);
   this.resetFields();
   console.log(this.characters())
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

}
