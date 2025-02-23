import { Component, Input } from '@angular/core';
import { Position } from 'src/app/models/experience.model';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent {
  @Input() logo!: string;
  @Input() organisation!: string;
  @Input() link!: string;
  @Input() positions!: Position[];

}
