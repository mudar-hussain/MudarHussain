import { Injectable } from '@angular/core';
import {  } from 'firebase/firestore';
import { TerminalCommand } from '../models/terminal-command.model';
import TerminalConfiguration from 'src/assets/developer_data/terminalconfiguration';
import { Skill } from '../models/skill.model';
import { Experience } from '../models/experience.model';
import { CodeForces, Experiences, GeeksForGeeks, Github, HackerRank, Leetcode, LinkedIn, Projects, Resume, Skills, SphereTags } from 'src/assets/developer_data/dev_data';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private term_username: string = TerminalConfiguration.terminal_username;
  private term_welcome_message: string = TerminalConfiguration.welcome_message;
  private term_commands: TerminalCommand = TerminalConfiguration.commands;
  private resume: string = Resume;
  private linkedIn: string = LinkedIn;
  private github: string = Github;
  private leetcode: string = Leetcode;
  private codeforces: string = CodeForces;
  private hackerrank: string = HackerRank;
  private geeksforgeeks: string = GeeksForGeeks;
  private skills: Skill[] = Skills;
  private experiences: Experience[] = Experiences;
  private projects: Project[] = Projects;
  private sphereTags: string[] = SphereTags;

  getResume(): string {
    return this.resume;
  }

  getLinkedIn(): string {
    return this.linkedIn;
  }

  getGithub(): string {
    return this.github;
  }

  getLeetcode(): string {
    return this.leetcode;
  }

  getCodeForces(): string {
    return this.codeforces;
  }

  getHackerRank(): string {
    return this.hackerrank;
  }

  getGeeksForGeeks(): string {
    return this.geeksforgeeks;
  }

  getTerminalUsername(): string {
    return this.term_username;
  }

  getWelcomeMessage(): string {
    return this.term_welcome_message;
  }

  getTerminalCommands(): TerminalCommand {
    return this.term_commands;
  }

  getSkills(): any {
    return this.skills;
  }

  getExperience(): any {
    return this.experiences;
  }

  getProjects(): any {
    return this.projects;
  }

  getSphereTags(): string[] {
    return this.sphereTags;
  }
}
