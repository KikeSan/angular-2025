import { Routes } from '@angular/router';
import {HeroPageComponent} from './pages/hero/hero-page.component';
import {CounterPageComponent} from './pages/counter-page-component/counter-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
  /*{
    path: '',
    redirectTo: '/hero',
    pathMatch: 'full'
  }*/
];
