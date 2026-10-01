import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  resume: Observable<string>;
  
  constructor(private configService: ConfigService) {
      this.resume = this.configService.getResume();
  }
}
