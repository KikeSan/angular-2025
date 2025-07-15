import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet],
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Kike Sanchez';

  constructor(){
  }

}
