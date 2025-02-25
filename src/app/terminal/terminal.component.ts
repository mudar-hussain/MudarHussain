import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TerminalCommandsService } from '../services/terminal-commands.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
})
export class TerminalComponent {
  @ViewChild('inputRef') inputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('terminal') terminalElement!: ElementRef<HTMLDivElement>;

  term_username: string;
  term_welcome_message: string;
  input: string = '';
  output: { command: string; response: string | string[] }[] = [];

  constructor(
    private commandService: TerminalCommandsService,
    private cdr: ChangeDetectorRef,
    private configService: ConfigService
  ) {
    this.term_username = this.configService.getTerminalUsername();
    this.term_welcome_message = this.configService.getWelcomeMessage();
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.processCommand(this.input.trim());
      this.input = '';
      this.scrollToBottom();
    }
  }

  // Process the entered command
  processCommand(command: string): void {
    if (command.toLowerCase() === 'clear') {
      // Clear terminal output
      this.output = [];
    } else {
      // Find response for the command or display "Command not found"
      const response = this.commandService.getResponseForCommand(
        command.toLowerCase()
      );
      this.output.push({ command, response });
    }
  }

  focusInput(): void {
    // Focus the input field and select its text
    if (this.inputElement) {
      this.inputElement.nativeElement.focus();
      this.inputElement.nativeElement.select();
    }
  }

  scrollToBottom(): void {
    if (this.terminalElement) {
      const terminal = this.terminalElement.nativeElement;
      terminal.scrollTop = terminal.scrollHeight;
    }
  }
}
