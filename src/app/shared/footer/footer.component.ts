import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  linkedinProfileUrl: string = "#";
  currentYear: number=new Date().getFullYear();

  // constructor(private configService: ConfigService){}
  
  // ngOnInit(): void {
  //   this.linkedinProfileUrl = this.configService.getLinkedinProfileURL();
  // }

}
