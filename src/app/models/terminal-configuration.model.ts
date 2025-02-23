import { TerminalCommand } from "./terminal-command.model";

export interface TerminalConfig {
  welcome_message: string;
  terminal_username: string;
  commands: TerminalCommand;
}







