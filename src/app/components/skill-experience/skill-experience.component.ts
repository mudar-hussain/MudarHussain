import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { Skill } from 'src/app/models/skill.model';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-skill-experience',
  templateUrl: './skill-experience.component.html',
  styleUrls: ['./skill-experience.component.css']
})
export class SkillExperienceComponent {
  skills: Skill[];
  experiences: Experience[];

  constructor(private configService: ConfigService) {
    this.skills = this.configService.getSkills();
    this.experiences = this.configService.getExperience();
  }
}
