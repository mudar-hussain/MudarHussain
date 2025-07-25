import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  template: `<h4>
    <i class="fa-solid fa-terminal text-light-beige"></i> {{displayText}}<span class="typewriter-cursor">|</span>
  </h4>`,
  styles: [`
    .typewriter-cursor {
      display: inline-block;
      width: 1ch;
      animation: blink 1s steps(1) infinite;
      color: #ccc;
    }
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
  `]
})

export class TypewriterComponent implements OnInit {
  @Input() strings: string[] = [];
  @Input() typingSpeed = 80;
  @Input() deleteSpeed = 50;
  @Input() loop = true;

  displayText = '';
  private strIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  ngOnInit() {
    this.type();
  }

  type() {
    const current = this.strings[this.strIndex];
    if (this.isDeleting) {
      this.displayText = current.substring(0, this.charIndex--);
    } else {
      this.displayText = current.substring(0, this.charIndex++);
    }

    let timeout = this.isDeleting ? this.deleteSpeed : this.typingSpeed;

    if (!this.isDeleting && this.charIndex > current.length) {
      timeout = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.strIndex = (this.strIndex + 1) % this.strings.length;
    }

    setTimeout(() => this.type(), timeout);
  }
}