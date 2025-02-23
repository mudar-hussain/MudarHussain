import { Component } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  linkedin: string;
  currentYear: number = new Date().getFullYear();
  
  constructor(private configService: ConfigService) {
    this.linkedin = this.configService.getLinkedIn();
  }
}
