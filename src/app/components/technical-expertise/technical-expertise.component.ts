import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-technical-expertise',
  templateUrl: './technical-expertise.component.html',
  styleUrls: ['./technical-expertise.component.css'],
})
export class TechnicalExpertiseComponent {
  linkedin: Observable<string>;
  github: Observable<string>;
  leetcode: Observable<string>;
  codeforces: Observable<string>;
  codechef: Observable<string>;

  constructor(private configService: ConfigService) {
    this.linkedin = this.configService.getLinkedIn();
    this.github = this.configService.getGithub();
    this.leetcode = this.configService.getLeetcode();
    this.codeforces = this.configService.getCodeForces();
    this.codechef = this.configService.getCodeChef();
  }
}
