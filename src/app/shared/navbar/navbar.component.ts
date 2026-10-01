import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isWindow: boolean = window.innerWidth > 1130;
  resume: Observable<string>;
  github: Observable<string>;
  blogs: Observable<string>;
  linkedIn: Observable<string>;

  constructor(private configService: ConfigService) {
    this.resume = this.configService.getResume();
    this.github = this.configService.getGithub();
    this.blogs = this.configService.getBlogs();
    this.linkedIn = this.configService.getLinkedIn();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isWindow = event.target.innerWidth > 1130;
  }
}
