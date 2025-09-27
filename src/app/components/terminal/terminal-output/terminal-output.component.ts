import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Response } from 'src/app/models/response.model';

@Component({
  selector: 'app-terminal-output',
  templateUrl: './terminal-output.component.html',
  styleUrls: ['./terminal-output.component.css']
})
export class TerminalOutputComponent implements AfterViewInit{
  @Input() terminal_username: string = 'root';
  @Input() response: Response = { username: 'root', command: '', response: '', isInvalidCommand: false };
  @Output() focusInput: EventEmitter<Event> = new EventEmitter<Event>();

  ngAfterViewInit(): void {
    this.focusInput.emit(new Event('focus'));
  }

  get isRoot(): boolean {
    return this.response.username === 'root';
  }
}
