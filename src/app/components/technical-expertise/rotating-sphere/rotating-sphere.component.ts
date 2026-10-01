import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import TagCloud from 'TagCloud';


@Component({
  selector: 'app-rotating-sphere',
  templateUrl: './rotating-sphere.component.html',
  styleUrls: ['./rotating-sphere.component.css']
})
export class RotatingSphereComponent implements AfterViewInit, OnDestroy {
  private tagCloudInstance: any;

  tags: string[];
  constructor(private configService: ConfigService) {
    this.tags = this.formatTags(this.configService.getSphereTags());
  }

  ngAfterViewInit(): void {
    const container = document.getElementById('tag-cloud-container');
    if (container) {
      const options = {
        radius: 180,
        maxSpeed: 'fast' as "fast",
        initSpeed: 'normal' as "normal",
        keep: true,
        useHTML: true
      };

      this.tagCloudInstance = TagCloud([container], this.tags, options);
    } else {
      console.error('Tag cloud container not found.');
    }
  }

  ngOnDestroy(): void {
    const container = document.getElementById('tag-cloud-container');
    if (container) {
      container.innerHTML = ''; // Clear the container's content
    }
    if (this.tagCloudInstance) {
      this.tagCloudInstance.destroy();
    }
  }

  formatTags(tags: string[]) {
    return tags.map((tag: string) => `
      <h5 style="
        color: rgb(255, 255, 255); 
        font-family: 'PT Mono', serif; 
        font-size: 1.2rem; 
        text-rendering: optimizeLegibility; 
        backface-visibility: hidden; 
        transform: translate(0, 0) scale(1); 
        -webkit-font-smoothing: antialiased; 
        -moz-osx-font-smoothing: grayscale;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
        position: relative; 
        white-space: nowrap;
      ">${tag}</h5>`);
  }
  
  

}
