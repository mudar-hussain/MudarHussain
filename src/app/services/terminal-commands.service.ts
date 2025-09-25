import { Injectable, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { TerminalCommand } from '../models/terminal-command.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TerminalCommandsService {
  private term_commands: TerminalCommand;
  private welcome_message: string;
  private terminal_username = new BehaviorSubject<string>('root');

  //Observable for components to subscribe to 
  currentUsernameObservable = this.terminal_username.asObservable();

  constructor(private configService: ConfigService) {
    this.term_commands = this.configService.getTerminalCommands();
    this.welcome_message = this.configService.getWelcomeMessage();
    this.getTerminalUsername();
  }

  // Current value (if you just need to read once)
  getTerminalUsername() {
    try {
      let terminal_username = localStorage.getItem('terminal_username');
      if (terminal_username) {
        this.terminal_username.next(terminal_username);
      }
    } catch (e) {
      this.terminal_username.next('root');
    }
  }

  // Method to change username dynamically
  changeTerminalUsername(newUsername: string) {
    localStorage.setItem('terminal_username', newUsername);
    this.terminal_username.next(newUsername);
  }

  // Get the response for a specific command
  getResponseForCommand(command: string): string | string[] {
    switch (command.toLowerCase()) {
      case 'whoami':
        return this.formatResponse(this.term_commands.whoami);

      case 'experience':
      case 'experiences':
        return this.formatResponse(this.term_commands.experience);

      case 'education':
        return this.formatResponse(this.term_commands.education);

      case 'skill':
      case 'skills':
        return this.formatResponse(this.term_commands.skills);

      case 'project':
      case 'projects':
        return this.formatResponse(this.term_commands.projects);

      case 'code':
        return this.formatResponse(this.term_commands.code);

      case 'blog':
      case 'blogs':
        return this.formatResponse(this.term_commands.blogs);

      case 'github':
        return this.formatResponse(this.term_commands.github);

      case 'linkedin':
        return this.formatResponse(this.term_commands.linkedIn);

      case 'contact':
        return this.formatResponse(this.term_commands.contact);

      case 'help':
      case 'ls':
        return this.formatResponse(this.term_commands.help);

      default:
        return (
          this.formatResponse('Command not found') +
          ` <br/><b style="font-size: 1em; font-weight: 450; color: var(--terminal-command); margin: 0.5em 1.4em;">${this.welcome_message}</b>`
        );
    }
  }

  private formatResponse(data: any): string {
    if (typeof data === 'string') {
      return this.formatKey(data);
    }

    if (Array.isArray(data)) {
      // Handle array of objects (like projects)
      if (
        data.every((item) => typeof item === 'object' && !Array.isArray(item))
      ) {
        return data.map((item) => this.formatObject(item)).join('<br/><br/>'); // Separate objects with extra spacing
      }

      // Handle array of strings or other primitive types
      return data.map((val) => this.formatValue(val)).join('<br/>');
    }

    return Object.entries(data)
      .map(([key, value]) => {
        const formattedKey = this.formatKey(key);
        const formattedValue = Array.isArray(value)
          ? value.map((val) => this.formatValue(val)).join('<br/>')
          : this.formatValue(value);
        return `${formattedKey} ${formattedValue}`;
      })
      .join('<br/>');
  }

  private formatKey(key: string): string {
    return `<b><b style="color: var(--terminal-resp-heading)">${key} : </b></b>`;
  }

  private formatValue(value: any): string {
    if (typeof value === 'string' && this.isValidUrl(value)) {
      return `<a href="${value}" target="_blank">${value}</a>`;
    } else if (Array.isArray(value)) {
      return '<br/>' + value.map((val) => '<b style="color: var(--terminal-resp-heading)">></b> ' + this.formatValue(val)).join('<br/>');
    }
    return `<b style="color: var(--terminal-resp)"> ${value}</b>`;
  }

  private formatObject(obj: Record<string, any>): string {
    return Object.entries(obj)
      .map(([key, value]) => {
        const formattedKey = this.formatKey(key);
        const formattedValue = this.formatValue(value);
        return `${formattedKey} ${formattedValue}`;
      })
      .join('<br/>');
  }

  private isValidUrl(url: string): boolean {
    const urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,}\/?/i;
    return urlPattern.test(url);
  }
}
