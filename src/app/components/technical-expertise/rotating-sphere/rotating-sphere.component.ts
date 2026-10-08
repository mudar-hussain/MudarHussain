import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';
import TagCloud from 'TagCloud';


@Component({
  selector: 'app-rotating-sphere',
  templateUrl: './rotating-sphere.component.html',
  styleUrls: ['./rotating-sphere.component.css']
})
export class RotatingSphereComponent implements OnInit, OnDestroy {
  private tagCloudInstance: any;
  private subscription: Subscription | undefined;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.subscription = this.configService.getSphereTags().subscribe((tags: string[]) => {
      if (Array.isArray(tags) && tags.length > 0) {
        this.initializeTagCloud(this.formatTags(tags));
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    const container = document.getElementById('tag-cloud-container');
    if (container) {
      container.innerHTML = '';
    }
    if (this.tagCloudInstance?.destroy) {
      this.tagCloudInstance.destroy();
    }
  }

  private initializeTagCloud(tags: string[]) {
    const container = document.getElementById('tag-cloud-container');
    if (!container) {
      console.error('Tag cloud container not found.');
      return;
    }
    container.innerHTML = '';
    const options = {
      radius: 180,
      maxSpeed: 'fast' as "fast",
      initSpeed: 'normal' as "normal",
      keep: true,
      useHTML: true
    };
    this.tagCloudInstance = TagCloud([container], tags, options);
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
