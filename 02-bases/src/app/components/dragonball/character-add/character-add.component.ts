import {Component, signal} from '@angular/core';
import {Character} from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styleUrl: './character-app.component.css'
})
export class CharacterAddComponent {
  name = signal('')
  power = signal(0)

  addCharacter(){
    if(!this.name() || !this.power || this.power() <= 0){
      return;
    }
    const newCharacter: Character = {
      id: 10000,//this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    //this.characters.update(characters => [...characters, newCharacter]);
    console.log(newCharacter)
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

}
