import { Component, input } from '@angular/core';
import { MatCard, MatCardContent, MatCardFooter } from '@angular/material/card';

@Component({
  selector: 'app-skill',
  imports: [
    MatCard,
    MatCardContent,
    MatCardFooter
],
  templateUrl: './skill.html',
  styleUrl: './skill.sass'
})
export class Skill {
  icon = input.required<string>();
}
