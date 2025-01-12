import { Injectable } from '@angular/core';
import { TerminalConfig } from '../models/terminal-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class TerminalCommandsService {
  private commands!: TerminalConfig['commands'];

  constructor() {}

  // Initialize the commands from the configuration
  initialize(terminalConfiguration: TerminalConfig): void {
    this.commands = terminalConfiguration.commands;
  }

  // Get the response for a specific command
  getResponseForCommand(command: string): string | string[] {
    switch (command.toLowerCase()) {
      case 'whoami':
        const { name, profession, company } = this.commands.whoami;
        return `${name} <br/> ${profession} <br/> ${company}`;
  
      case 'experience':
        const { ellucian, role, internship_role } = this.commands.experience;
        return `${ellucian} <br/> ${role} <br/> ${internship_role}`;
  
      case 'education':
        const { title, desc, CGPA } = this.commands.education;
        return `
          <b style="color: #fc5b57">Course:</b> ${title} <br/>
          <b style="color: #fc5b57">College:</b> ${desc} <br/>
          <b style="color: #fc5b57">CGPA:</b> ${CGPA}
        `;
  
      case 'skills':
        const skills = this.commands.skills;
        return `
          <b style="color: #fc5b57">Frontend:</b> ${skills.frontend} <br/>
          <b style="color: #fc5b57">Backend:</b> ${skills.backend} <br/>
          <b style="color: #fc5b57">Database:</b> ${skills.database} <br/>
          <b style="color: #fc5b57">Programming Languages:</b> ${skills.programming_languages} <br/>
          <b style="color: #fc5b57">Unit Testing:</b> ${skills.unit_testing} <br/>
          <b style="color: #fc5b57">Version Control:</b> ${skills.version_control} <br/>
          <b style="color: #fc5b57">Agile Tool:</b> ${skills.Agile_tool} <br/>
          <b style="color: #fc5b57">Other Tools:</b> ${skills.Tools}
        `;
  
      case 'projects':
        const projects = this.commands.projects;
        return `
          <b style="color: #fc5b57">JobLeet:</b> ${projects.JobLeet} <br/>
          <b style="color: #fc5b57">MessageQueue:</b> ${projects.MessageQueue}
        `;
  
      case 'publications':
        const publications = this.commands.publications;
        return `
          <b style="color: #fc5b57">Published Work:</b> ${publications.image_caption} <br/>
          <a href="${publications.url}" target="_blank">Read more</a>
        `;
  
      case 'blogs':
        const blogs = this.commands.blogs;
        return `
          <b style="color: #fc5b57">${blogs.blog_articles}</b> <br/>
          <a href="${blogs.blog_url}" target="_blank">${blogs.blog_url}</a>
        `;
  
      case 'github':
        const github = this.commands.github;
        return `
          <b style="color: #fc5b57">GitHub Handle:</b> <br/>
          <a href="${github.gh_handle}" target="_blank">${github.gh_handle}</a>
        `;
  
      case 'linkedin':
        const linkedin = this.commands.linkedIn;
        return `
          <b style="color: #fc5b57">LinkedIn Profile:</b> <br/>
          <a href="${linkedin.linkedin}" target="_blank">${linkedin.linkedin}</a>
        `;
  
      case 'contact':
        const contact = this.commands.contact;
        return `
          <b style="color: #fc5b57">Email Address:</b> ${contact.email}
        `;
  
      case 'help':
        return this.formatHelpOrLs(this.commands.help);
  
      case 'ls':
        return this.formatHelpOrLs(this.commands.ls);
  
      default:
        return 'Command not found';
    }
  }
  

  // Format the help or ls command response
  private formatHelpOrLs(commandSet: { [key: string]: string }): string {
    return Object.entries(commandSet)
      .map(
        ([key, description]) =>
          `<b style="color: #fc5b57">${key}:</b> ${description}`
      )
      .join('<br/>');
  }
}
