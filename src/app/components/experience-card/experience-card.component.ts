import { Component, Input } from '@angular/core';
import { Position } from 'src/app/models/terminal-configuration.model';
import { fadeInAnimation } from 'src/app/services/animation.service';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css'],
  animations: [fadeInAnimation]
})
export class ExperienceCardComponent {
  @Input() logo!: string;
  @Input() organisation!: string;
  @Input() link!: string;
  @Input() positions!: Position[];

}
