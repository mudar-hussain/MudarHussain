import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { TerminalCommand } from '../models/terminal-command.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TerminalCommandsService {
  private term_commands!: TerminalCommand;
  private terminal_username = new BehaviorSubject<string>('root');

  //Observable for components to subscribe to
  currentUsernameObservable = this.terminal_username.asObservable();

  constructor(private configService: ConfigService) {
    this.term_commands = this.configService.getTerminalCommands();
    this.getTerminalUsername();
  }

  // Current value (if you just need to read once)
  getTerminalUsername() {
    try {
      let stored_username = localStorage.getItem('terminal_username');
      let terminal_username: string = stored_username
        ? JSON.parse(stored_username)
        : 'root';
      this.changeTerminalUsername(terminal_username);
    } catch (e) {
      this.changeTerminalUsername('root');
    }
  }

  // Method to change username dynamically
  changeTerminalUsername(newUsername: string) {
    localStorage.setItem('terminal_username', JSON.stringify(newUsername));
    this.terminal_username.next(newUsername);
  }

  // Get the response for a specific command
  getResponseForCommand(command: string): string {
    const cmd = command.trim();
    if (!cmd) return '';

    const lowerCmd = cmd.toLowerCase();

    switch (true) {
      case lowerCmd === 'whoami':
        return this.formatResponse(this.term_commands.whoami);

      case lowerCmd === 'cv' || lowerCmd === 'resume':
        return this.formatValueHtml(this.openLink(this.configService.getResume()));

      case lowerCmd === 'exp' ||
        lowerCmd === 'experience' ||
        lowerCmd === 'experiences':
        return this.formatResponse(this.term_commands.experience);

      case lowerCmd === 'edu' || lowerCmd === 'education':
        return this.formatResponse(this.term_commands.education);

      case lowerCmd === 'skill' || lowerCmd === 'skills' || lowerCmd === 'techstack':
        return this.formatResponse(this.term_commands.skills);

      case lowerCmd === 'project' || lowerCmd === 'projects':
        return this.formatResponse(this.term_commands.projects);

      case lowerCmd === 'code':
        return this.formatResponse(this.term_commands.code);

      case lowerCmd === 'leetcode':
        return this.openLink(this.configService.getLeetcode());

      case lowerCmd === 'codeforces':
        return this.openLink(this.configService.getCodeForces());

      case lowerCmd === 'email':
        const mailToEmail = 'mailto:' + this.configService.getEmail();
        return this.openLink(mailToEmail);

      case lowerCmd === 'blog' || lowerCmd === 'blogs':
        return this.openLink(this.configService.getBlogs());

      case lowerCmd === 'git' || lowerCmd === 'github':
        return this.openLink(this.configService.getGithub());

      case lowerCmd === 'linkedin':
        return this.openLink(this.configService.getLinkedIn());

      case lowerCmd === 'help' || lowerCmd === 'ls':
        return this.formatResponse(this.term_commands.help);

      case lowerCmd === 'date':
        return this.formatResponse({ Date: new Date().toLocaleString() });
        
      case lowerCmd === 'tree':
        return this.buildCommandTree(this.term_commands);
        // return this.formatResponse(this.buildCommandTree(this.term_commands));


      default:
        // su <user>
        if (lowerCmd.startsWith('su ')) {
          const parts = cmd.split(/\s+/);
          if (parts.length > 1) {
            this.changeTerminalUsername(parts[1]);
            return this.formatResponse({
              [lowerCmd]: `Switched user to ${parts[1]}`,
            });
          }
        }
        // Unknown command
        return this.formatResponse({ [lowerCmd]: 'Command not found!' });
    }
  }

  private openLink(url: string) {
    setTimeout(() => window.open(url, '_blank')?.focus(), 1000);
    return `Redirecting to ${this.formatValueHtml(url)} ...`;
  }

  private formatResponse(data: any): string {
    if (typeof data === 'string') {
      return this.formatValueHtml(data);
    }

    if (Array.isArray(data)) {
      // Handle array of objects (like projects)
      if (
        data.length &&
        data.every((item) => typeof item === 'object' && !Array.isArray(item))
      ) {
        return data.map((item) => this.formatObject(item)).join(''); // Separate objects with extra spacing
      }

      // Handle array of strings or other primitive types
      return data.map((val) => this.formatValueHtml(val)).join('<br/>');
    }

    // Objects => use formatObject to align keys & values
    if (typeof data === 'object' && data !== null) {
      return this.formatObject(data);
    }

    // Fallback
    return this.formatValueHtml(String(data));
  }

  private formatKeyHtml(key: string, widthCh: number): string {
    // Use inline-block with ch units so keys align reliably in monospace
    const safeKey = this.escapeHtml(key);
    return `<span style="display:inline-block; min-width:${widthCh}ch; font-weight:bold; color:var(--terminal-resp-heading)">${safeKey}</span>`;
  }

  private formatValueHtml(value: any): string {
    if (value === null || value === undefined)
      return `<span style="color:var(--terminal-resp)">-</span>`;

    // If it's an array, format each entry as bullet style
    if (Array.isArray(value)) {
      return (
        value.map((val) => `<span style="color:var(--terminal-resp-heading)">-> </span>${this.formatValueHtml(val)}`)
          .join('<br/>')
      );
    }

    const str = String(value);

    // Recognize URLs (http(s), mailto:, or protocol://)
    if (this.isValidUrl(str)) {
      // show clickable anchor
      return `<a style="color: var(--light-blue)" href="${this.escapeAttr(str)}" target="_blank" rel="noreferrer noopener">${this.escapeHtml(str)}</a>`;
    }

    return `<span style="color: var(--terminal-resp)">${this.escapeHtml(str)}</span>`;
  }

  private formatObject(obj: Record<string, any>): string {
    const entries = Object.entries(obj || {});

    if (entries.length === 0) {
      return `<span style="color:var(--terminal-resp)">-</span>`;
    }

    // Find the longest key to calculate padding
    const maxKeyLength = Math.max(...entries.map(([key]) => key.length));

    // Give keys some breathing room: +2 ch
    const keyWidth = Math.max(1, maxKeyLength + 2);

    // Build lines using \n inside a single <pre> for alignment and wrapping
    const lines = entries.map(([key, value]) => {
      const keyHtml = this.formatKeyHtml(key, keyWidth);
      const valueHtml = this.formatValueHtml(value);
      return `${keyHtml}: ${Array.isArray(value) ? '\n': ''}${valueHtml}`;
    });
    // return lines.join('\n');
    return `<pre style="font-family: 'Courier New', monospace; font-size: 16px; white-space: pre-wrap;word-wrap: break-word;">${lines.join('\n')}</pre>`;
  }

  private isValidUrl(input: string): boolean {
    if (!input) return false;
    const trimmed = input.trim();
    // Accept mailto:, http(s)://, or protocol-style (scheme:)
    if (/^mailto:/i.test(trimmed)) return true;
    if (/^https?:\/\//i.test(trimmed)) return true;
    if (/^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed)) return true; // scheme://
    // fallback: try URL constructor for http/https
    try {
      const url = new URL(trimmed);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (e) {
      return false;
    }
  }

  // Simple HTML escape for safety
  private escapeHtml(input: string): string {
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  private escapeAttr(input: string): string {
    return input.replace(/"/g, '&quot;');
  }

  private buildCommandTree(obj: Record<string, any>, indent = '', isLast = true): string {
  const keys = Object.keys(obj);
  return keys
    .map((key, index) => {
      const isKeyLast = index === keys.length - 1;
      const branch = '<span style="color:var(--light-blue)">' + (isKeyLast ? '└── ' : '├── ') + '</span>';
      const nextIndent = indent + '<span style="color:var(--terminal-resp-heading)">'+(isKeyLast ? '.   ' : '│   ')+'</span>';

      const value = obj[key];
      if (Array.isArray(value)) {
        // Show array length and recurse on first element if it is an object
        if (value.length > 0 && typeof value[0] === 'object' && !Array.isArray(value[0])) {
          return `${indent}${branch}${key} [${value.length} items]<br/>\n` +
                 this.buildCommandTree(value[0], nextIndent, isKeyLast);
        } else {
          return `${indent}${branch}${key} [${value.length} items]<br/>\n`;
        }
      } else if (value && typeof value === 'object') {
        return `${indent}${branch}${key}<br/>\n` +
               this.buildCommandTree(value, nextIndent, isKeyLast);
      } else {
        return `${indent}${branch}${key}<br/>\n`;
      }
    })
    .join('\n');
}

}
