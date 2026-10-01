import { Experience } from "./experience.model";
import { Project } from "./project.model";
import { Skill } from "./skill.model";

export interface PortfolioData {
    skills: Skill[];
    experiences: Experience[];
    projects: Project[];
}