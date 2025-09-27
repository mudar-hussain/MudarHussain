import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TerminalCommandsService } from '../../services/terminal-commands.service';
import { Subscription } from 'rxjs';
import { Response } from 'src/app/models/response.model';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
})
export class TerminalComponent implements OnInit, OnDestroy {
  @ViewChild('inputRef') inputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('terminal') terminal!: ElementRef<HTMLDivElement>;
  terminal_username: string = 'root';
  private usernameSubscription?: Subscription;
  input: string = '';
  responseHistory: Response[] = [];

  constructor(private commandService: TerminalCommandsService) {}

  ngOnInit(): void {
    // Subscribe to username changes if commandService supports it
    this.usernameSubscription =
      this.commandService.currentUsernameObservable.subscribe(
        (newUsername: string) => {
          this.terminal_username = newUsername;
        }
      );
  }

  get isRoot() {
    return this.terminal_username === 'root';
  }

  ngOnDestroy(): void {
    if (this.usernameSubscription) {
      this.usernameSubscription.unsubscribe();
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
      const username: string = this.terminal_username;
      // Find response for the command or display "Command not found"
      const response = this.commandService.getResponseForCommand(
        command.toLowerCase()
      );
      const isInvalidCommand = response.toString().toLowerCase().includes('command not found');
      this.addOutput({username, command, response, isInvalidCommand });
    }
  }

  addOutput(response: Response): void {
    this.responseHistory.push(response);
  }

  public focusInput(el: HTMLElement): void {
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      this.inputElement.nativeElement.focus();
    }
    
  }
}
