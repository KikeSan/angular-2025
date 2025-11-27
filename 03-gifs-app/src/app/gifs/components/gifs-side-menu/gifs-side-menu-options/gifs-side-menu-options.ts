import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

interface MenuOption {
  label: string;
  sublabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './gifs-side-menu-options.html',
  styleUrl: './gifs-side-menu-options.css',
})
export class GifsSideMenuOptions {
  menuOptions:MenuOption[] = [
    {
      label: 'Trending',
      sublabel: 'Gifs de la semana',
      route: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line'
    },
    {
      label: 'Search',
      sublabel: 'Buscar gifs',
      route: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass'
    },
  ]
}
