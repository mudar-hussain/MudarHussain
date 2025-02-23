import { Component } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  };
  resume: string;
  linkedin: string;
  github: string;
  leetcode: string;

  constructor(private configService: ConfigService) {
    this.resume = this.configService.getResume();
    this.linkedin = this.configService.getLinkedIn();
    this.github = this.configService.getGithub();
    this.leetcode = this.configService.getLeetcode();
  }

  sendMessage() {
    if (this.formData.firstName && this.formData.email && this.formData.message) {
      alert('Message sent successfully!');
      console.log('Form Data:', this.formData);
      this.formData = { firstName: '', lastName: '', email: '', subject: '', message: '' };
    } else {
      alert('Please fill in all required fields.');
    }
  }

}
