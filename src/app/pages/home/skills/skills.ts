import { Component } from '@angular/core';
import { Skill } from "./skill/skill";

@Component({
  selector: 'app-skills',
  imports: [
    Skill
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.sass'
})
export class Skills {

}
