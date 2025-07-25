import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project, ProjectStack } from 'src/app/models/project.model';

declare var bootstrap: any;

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit, AfterViewInit {
  @Input() project!: Project;
  @Output() close = new EventEmitter<void>();
  stackItems: string[] = [];

  ngOnInit(): void {
    if(this.project && this.project.stack) {
    this.setStackItems(this.project.stack.slice(0, 5));
    }
  }

  ngAfterViewInit() {
    const carouselEl = document.getElementById('carouselExample');
    if (carouselEl) {
      new bootstrap.Carousel(carouselEl, {
        interval: 3000,
        ride: 'carousel'
      });
    }
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
        this.setStackItems(this.project.stack.slice(0, 5));
      }
    }

  onClose(): void {
    this.close.emit();
  }

}
