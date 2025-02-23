import { Component, HostListener, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isWindow: boolean = window.innerWidth > 1130 ? true : false;
  resume!: string;

  constructor(private configService: ConfigService) {
    this.resume = this.configService.getResume();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isWindow = event.target.innerWidth > 1130 ? true : false;
  }
}
