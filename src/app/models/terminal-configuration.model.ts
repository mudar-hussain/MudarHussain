export interface TerminalConfig {
  welcome_message: string;
  terminal_username: string;
  commands: {
    whoami: {
      name: string;
      profession: string;
      company: string;
    };
    experience: {
      ellucian: string;
      role: string;
      internship_role: string;
    };
    education: {
      title: string;
      desc: string;
      CGPA: string;
    };
    ls: {
      [key: string]: string;
    };
    help: {
      [key: string]: string;
    };
    skills: {
      frontend: string;
      backend: string;
      database: string;
      programming_languages: string;
      unit_testing: string;
      version_control: string;
      Agile_tool: string;
      Tools: string;
    };
    projects: {
      JobLeet: string;
      MessageQueue: string;
    };
    publications: {
      image_caption: string;
      url: string;
    };
    blogs: {
      blog_articles: string;
      blog_url: string;
    };
    github: {
      gh_handle: string;
    };
    linkedIn: {
      linkedin: string;
    };
    contact: {
      email: string;
    };
  };
}
