import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'hero-page',
  templateUrl: 'hero-page.component.html',
  standalone: true,
  imports: [UpperCasePipe],
  styleUrl: 'hero-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroPageComponent {

  name = signal('Ironman')
  age = signal(45)

  constructor(){
  }

  heroDescription = computed(()=>{
    const description = `${this.name()} - ${this.age()}`;
    return description;
  })

  capitalizedName = computed(()=>{
    const name = this.name();
    return name.toUpperCase();
  })

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(){
    this.age.set(60);
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }

}
