import { Injectable } from '@angular/core';
import { TerminalCommand } from '../models/terminal-command.model';
import { Skill } from '../models/skill.model';
import { Experience } from '../models/experience.model';
import { CodeForces, CodeChef, Experiences, GeeksForGeeks, Github, HackerRank, Leetcode, LinkedIn, Projects, Resume, Skills, SphereTags, Blogs, Email } from 'src/assets/data/developer_data';
import { Project } from '../models/project.model';
import TerminalCommands from 'src/assets/data/terminal_commands';
import { map, Observable, shareReplay } from 'rxjs';
import { PortfolioConfig } from '../models/portfolio-config';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { PortfolioData } from '../models/portfolio-data';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private term_commands: TerminalCommand = TerminalCommands;

  private config!: Observable<PortfolioConfig>;

  private data!: Observable<PortfolioData>;

  private resume: string = Resume;
  private linkedIn: string = LinkedIn;
  private github: string = Github;
  private leetcode: string = Leetcode;
  private codeforces: string = CodeForces;
  private codechef: string = CodeChef;
  private hackerrank: string = HackerRank;
  private geeksforgeeks: string = GeeksForGeeks;
  private blogs: string = Blogs;
  private skills: Skill[] = Skills;
  private experiences: Experience[] = Experiences;
  private projects: Project[] = Projects;
  private sphereTags: string[] = SphereTags;
  private email: string = Email;

  constructor(private firestore: Firestore) {
    this.config = (docData(
      doc(this.firestore, 'portfolio', 'config')
    ) as Observable<PortfolioConfig>).pipe(
      shareReplay(1)
    );
    this.data = (docData(
      doc(this.firestore, 'portfolio', 'data')
    ) as Observable<PortfolioData>).pipe(
      shareReplay(1)
    );
  }

  getConfig(): Observable<PortfolioConfig> {
    return this.config;
  }

  getResume(): Observable<string> {
    return this.config.pipe(map(config => config?.resume ?? ''));
  }

  getLinkedIn(): Observable<string> {
    return this.config.pipe(map(config => config?.linkedin ?? ''));
  }

  getGithub(): Observable<string> {
    return this.config.pipe(map(config => config?.github ?? ''));
  }

  getLeetcode(): Observable<string> {
    return this.config.pipe(map(config => config?.leetcode ?? ''));
  }

  getCodeForces(): Observable<string> {
    return this.config.pipe(map(config => config?.codeforces ?? ''));
  }

  getHackerRank(): Observable<string> {
    return this.config.pipe(map(config => config?.hackerrank ?? ''));
  }

  getGeeksForGeeks(): Observable<string> {
    return this.config.pipe(map(config => config?.geeksforgeeks ?? ''));
  }

  getBlogs(): Observable<string> {
    return this.config.pipe(map(config => config?.blogs ?? ''));
  }

  getCodeChef(): Observable<string> {
    return this.config.pipe(map(config => config?.codechef ?? ''));
  }

  getEmail(): Observable<string> {
    return this.config.pipe(map(config => config?.email ?? ''));
  }

  getSphereTags(): Observable<string[]> {
    return this.config.pipe(map(config => Array.isArray(config?.sphereTags) ? config?.sphereTags : []));
  }

  getTerminalCommands(): TerminalCommand {
    return this.term_commands;
  }

  getSkills(): Observable<Skill[]> {
    return this.data.pipe(map(data => data?.skills ?? []));
  }

  getExperience(): Observable<Experience[]> {
    return this.data.pipe(map(data => data?.experiences ?? []));
  }

  getProjects(): Observable<Project[]> {
    return this.data.pipe(map(data => data?.projects ?? []));
  }
}
