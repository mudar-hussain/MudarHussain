import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TerminalCommandsService } from '../../services/terminal-commands.service';
import { ConfigService } from '../../services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
})
export class TerminalComponent implements AfterViewChecked, OnInit, OnDestroy {
  @ViewChild('inputRef') inputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('terminal') terminal!: ElementRef<HTMLDivElement>;
  isRoot: boolean = true;
  terminal_username: string = 'root';
  private usernameSubscription?: Subscription;
  term_welcome_message: string;
  input: string = '';
  responseHistory: { command: string; response: string, isInvalidCommand: boolean }[] = [];
  // Keep track if we need to focus after view updates
  private shouldScroll = false;

  constructor(
    private commandService: TerminalCommandsService,
    private configService: ConfigService
  ) {
    // this.terminal_username = this.configService.getTerminalUsername();
    this.term_welcome_message = this.configService.getWelcomeMessage();
  }

  ngOnInit(): void {
    // Subscribe to username changes if commandService supports it
    this.usernameSubscription = this.commandService.currentUsernameObservable.subscribe((newUsername: string) => {
      this.terminal_username = newUsername;
      this.isRoot = this.terminal_username === 'root';
    });
    // Optionally, set focus to input on init
    setTimeout(() => this.focusInput(), 0);
  }

  ngOnDestroy(): void {
    if (this.usernameSubscription) {
      this.usernameSubscription.unsubscribe();
    }
  }

  ngAfterViewChecked() {
    if (this.shouldScroll) {
      this.scrollTerminalToBottom();
      this.focusInput();
      this.shouldScroll = false;
    }
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.processCommand(this.input.trim());
      this.input = '';
    }
  }

  // Process the entered command
  processCommand(command: string): void {
    if (command.toLowerCase() === 'clear') {
      // Clear terminal output
      this.responseHistory = [];
    } else {
      // Find response for the command or display "Command not found"
      const response = this.commandService.getResponseForCommand(
        command.toLowerCase()
      );
      this.addOutput({ command, response, isInvalidCommand: response.toString().toLowerCase().includes('command not found')});
    }
  }

  addOutput(cmd: { command: string; response: string; isInvalidCommand: boolean }): void {
    this.responseHistory.push(cmd);
    // Trigger focus after the view updates
    this.shouldScroll = true;
  }

  focusInput(): void {
      this.inputElement.nativeElement.focus();
  }

  scrollTerminalToBottom() {
    const container = this.terminal.nativeElement;
    container.scrollTop = container.scrollHeight;
  }
}
