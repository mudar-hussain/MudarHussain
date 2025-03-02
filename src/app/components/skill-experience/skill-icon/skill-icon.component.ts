import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-icon',
  templateUrl: './skill-icon.component.html',
  styleUrls: ['./skill-icon.component.css']
})
export class SkillIconComponent {
  @Input() icon!: string;
  @Input() name!: string;
}
