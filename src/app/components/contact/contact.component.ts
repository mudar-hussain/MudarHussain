import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
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
  resume: string;
  linkedin: string;
  github: string;
  leetcode: string;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private fb: FormBuilder, private configService: ConfigService, private contactService: ContactService) {
    this.resume = this.configService.getResume();
    this.linkedin = this.configService.getLinkedIn();
    this.github = this.configService.getGithub();
    this.leetcode = this.configService.getLeetcode();
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      subject: [''],
      message: ['', Validators.required]
    });
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
        this.submitted = false; // Reset the form after successful submission
      })
      .catch(error => {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again.');
      });
  }

}
