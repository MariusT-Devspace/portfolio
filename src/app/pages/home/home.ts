import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Hero } from './hero/hero';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Skills
  ],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {

}
