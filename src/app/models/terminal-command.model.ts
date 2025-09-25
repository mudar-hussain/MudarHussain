export interface TerminalCommand {
    whoami: {
      Name: string,
      Profession: string,
      Company: string
    };
    experience: {
      Company: string,
      Role: string,
      Period: string,
      Location: string,
      Experience: string[]
    }[];
    education: {
      University: string,
      Degree: string,
      Batch: string,
      Location: string
    };
    help: {
      [key: string]: string
    };
    skills: {
      Programming_Language: string,
      Frameworks_and_Libraries: string,
      Database: string,
      DevOps_and_Cloud_Tools: string,
      Build_and_Productivity_Tools: string,
      Computer_Science_Fundamentals: string
    };
    projects: {
      Name: string,
      Category: string,
      URL: string,
      TechStack: string,
      Description: string[]
    }[];
    code: {
      Coding_Platform: string,
      Insights: string,
      Handle: string
    }[];
    blogs: {
      Blogs_Articles: string
    };
    github: {
      GitHub_Handle: string
    };
    linkedIn: {
      LinkedIn_Profile: string
    };
    contact: {
      Email_Address: string
    };
  }