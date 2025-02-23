
export interface SkillItem {
  id: string;
  icon: string;
  name: string;
}

export interface Skill {
  title: string;
  items: SkillItem[];
}
