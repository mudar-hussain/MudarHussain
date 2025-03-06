import { Component } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-technical-expertise',
  templateUrl: './technical-expertise.component.html',
  styleUrls: ['./technical-expertise.component.css'],
})
export class TechnicalExpertiseComponent {
  linkedin: string;
  github: string;
  leetcode: string;
  codeforces: string;
  hackerrank: string;
  geeksforgeeks: string;

  constructor(private configService: ConfigService) {
    this.linkedin = this.configService.getLinkedIn();
    this.github = this.configService.getGithub();
    this.leetcode = this.configService.getLeetcode();
    this.codeforces = this.configService.getCodeForces();
    this.hackerrank = this.configService.getHackerRank();
    this.geeksforgeeks = this.configService.getGeeksForGeeks();
  }
}
