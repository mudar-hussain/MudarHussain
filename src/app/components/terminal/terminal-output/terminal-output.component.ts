import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-terminal-output',
  templateUrl: './terminal-output.component.html',
  styleUrls: ['./terminal-output.component.css']
})
export class TerminalOutputComponent {
  @Input() terminalUsername: string = '';
  @Input() command: string = '';
  @Input() response: string | string[] = '';
}
