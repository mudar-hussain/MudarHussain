import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { PortfolioConfig } from 'src/app/models/portfolio-config';
import { ConfigService } from 'src/app/services/config.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  config!: Subscription;
  resume!: string;
  linkedin!: string;
  github!: string;
  leetcode!: string;
  email!: string;
  emailUsername!: string;
  emailDomain!: string;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private fb: FormBuilder, private configService: ConfigService, private contactService: ContactService) {
    // this.config = this.configService.getConfig();
    // this.resume = this.configService.getResume();
    // this.linkedin = this.configService.getLinkedIn();
    // this.github = this.configService.getGithub();
    // this.leetcode = this.configService.getLeetcode();
    // this.emailWithoutDomain = this.configService.getEmail().split('@')[0];
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      subject: [''],
      message: ['', Validators.required]
    });

    this.config = this.configService.getConfig().subscribe(config => {
      if (config) {
        this.resume = config.resume;
        this.linkedin = config.linkedin;
        this.github = config.github;
        this.leetcode = config.leetcode;
        this.email = config.email;
        this.emailUsername = this.email.split('@')[0];
        this.emailDomain = this.email.split('@')[1];
      }
  });
  }

  ngOnDestroy(): void {
    if (this.config) {
      this.config.unsubscribe();
    }
  }

  sendMessage(): void {
    this.submitted = true; 

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formData: Contact = this.contactForm.value;

    this.contactService.sendMessage(formData)
      .then(() => {
        console.log('Message sent successfully!');
        alert('Your message has been sent!');
        this.submitted = false;
        this.contactForm.reset();
      })
      .catch(error => {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again.');
      });
  }

}
