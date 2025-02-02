import { Component } from '@angular/core';

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
