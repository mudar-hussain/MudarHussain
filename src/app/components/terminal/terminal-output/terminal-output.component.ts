import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-terminal-output',
  templateUrl: './terminal-output.component.html',
  styleUrls: ['./terminal-output.component.css']
})
export class TerminalOutputComponent {
  @Input() terminal_username: string = 'root';
  @Input() response: { command: string; response: string, isInvalidCommand: boolean; } = { command: '', response: '', isInvalidCommand: false };
  
  get isRoot(): boolean {
  return this.terminal_username === 'root';
}

}
