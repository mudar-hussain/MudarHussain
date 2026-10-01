import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project.model';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: Observable<Project[]>;

  constructor(private configService: ConfigService) {
    this.projects = this.configService.getProjects();
  }

}
