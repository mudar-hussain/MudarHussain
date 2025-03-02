import { Component } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  linkedin: string;
  github: string;
  leetcode: string;
  projects: Project[];

  constructor(private configService: ConfigService) {
    this.linkedin = this.configService.getLinkedIn();
    this.github = this.configService.getGithub();
    this.leetcode = this.configService.getLeetcode();
    this.projects = this.configService.getProjects();
  }

}
