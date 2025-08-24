import { Component } from '@angular/core';
import { Skill } from "./skill/skill";
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-skills',
  imports: [
    Skill,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent
],
  templateUrl: './skills.html',
  styleUrl: './skills.sass'
})
export class Skills {

}
