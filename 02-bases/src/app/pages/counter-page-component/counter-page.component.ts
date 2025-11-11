import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-counter-page-component',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number) {
    this.counter += value;
  }
  decreaseBy(value: number) {
    this.counter -= value;
  }
  resetCounter(){
    this.counter = 10;
  }
}
