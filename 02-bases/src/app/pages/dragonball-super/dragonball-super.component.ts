import {Component, computed, signal} from '@angular/core';
import {CharacterListComponent} from '../../components/dragonball/character-list/character-list.component';
import {CharacterAddComponent} from '../../components/dragonball/character-add/character-add.component';
import {DragonballService} from '../../services/dragonball.service';
import {inject} from '@angular/core';


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

  public dragonballService = inject(DragonballService);


}
