import { Component, Input } from '@angular/core';
import { fadeInAnimation } from 'src/app/services/animation.service';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css'],
  animations: [fadeInAnimation]
})
export class SkillCardComponent {
  @Input() title!: string;
  @Input() items!: any[];

}
