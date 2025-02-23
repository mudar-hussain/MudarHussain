export interface TerminalCommand {
    whoami: {
      Name: string;
      Profession: string;
      Company: string;
    };
    experience: {
      Company: string,
      Role: string,
      Period: string,
      Location: string,
      Experience: string,
    }[];
    education: {
      University: string;
      Degree: string;
      Period: string;
    };
    help: {
      [key: string]: string;
    };
    skills: {
      Frontend: string;
      Backend: string;
      Database: string;
      Programming_Languages: string;
      Unit_Testing: string;
      Version_Control: string;
      Agile_Tool: string;
      Other_Tools: string;
    };
    projects: {
      Name: string;
      Category: string;
      Description: string;
      TechStack: string;
      URL: string;
    }[];
    code: {
      Coding_Platform: string,
      Insights: string,
      Handle: string
    }[];
    blogs: {
      Blogs_Articles: string;
    };
    github: {
      GitHub_Handle: string;
    };
    linkedIn: {
      LinkedIn_Profile: string;
    };
    contact: {
      Email_Address: string;
    };
  }