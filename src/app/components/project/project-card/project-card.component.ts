import { Component, Input } from '@angular/core';
import { Project, ProjectStack } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project!: Project;
  stackItems: string[] = [];

  ngOnInit() {
    this.setStackItems(this.project.stack.slice(0, 2));
  }

  setStackItems(stacks: ProjectStack[]) {
    this.stackItems = stacks.map(stack => stack.name);
    if (this.stackItems.length < this.project.stack.length) {
      this.stackItems.push("+" + (this.project.stack.length - this.stackItems.length));
    }
  }

  expandShrinkStackItems(stack: string) {
    if(stack.startsWith("+")) {
      this.setStackItems(this.project.stack);
    } else {
      this.setStackItems(this.project.stack.slice(0, 2));
    }
  }

  openUrl(url?: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

}
