import {Component, signal} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kike Sanchez';
  counter:number = 0;
  counterSignal = signal(0)

  constructor(){}

  increaseBy(value: number){
    this.counter += value;
    this.counterSignal.update(current=> current + value)
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0)
  }

}
