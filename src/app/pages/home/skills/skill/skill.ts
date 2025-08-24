import { Component, input } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-skill',
  imports: [
    MatCard
],
  templateUrl: './skill.html',
  styleUrl: './skill.sass'
})
export class Skill {
  icon = input.required<string>();
}
