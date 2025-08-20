import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-home',
  imports: [
    Hero
  ],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {

}
