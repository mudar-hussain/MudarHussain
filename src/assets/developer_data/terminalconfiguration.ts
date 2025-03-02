const TerminalConfiguration = {
  welcome_message: "Type 'help' to get started !",
  terminal_username: "[Mudar@Terminal:~]$",
  commands: {
    whoami: {
      Name: "Mudar Hussain",
      Profession: "Full Stack Developer",
      Company: "The Bank Of New York | Onsite - Pune",
    },
    experience: [
      {
        Company: "Tata Consultancy Services",
        Role: "System Engineer",
        Period: "April 2021 – Sept 2023",
        Location: "Nagpur, India",
        Experience: "Developed scalable sales app (React, Spring Boot, Microservices) to enhance customer experience and streamline workflows. Designed and developed RESTful APIs for seamless interaction between frontend and backend services.",
      },
      {
        Company: "H. M. Construction",
        Role: "Site Execution Engineer",
        Period: "June 2019 - March 2021",
        Location: "Nagpur, India",
        Experience: "Supervised and organized on-site work schedule and inventory utilization to maintain quality control and safety compliance. Achieved 7% reduction in ongoing project billing costs through strategic design modifications and material wastage analysis.",
      },
      {
        Company: "Balaji Structural Consultancy",
        Role: "AutoCAD Draftsman (2D & 3D) [Intern]",
        Period: "July 2017 - Sept 2017",
        Location: "Amravati, India",
        Experience: "Created multiple line plans, Bar Bending Schedule & Structural drawings along with the 3D work of the G+1 Building.",
      }
    ],
    education: {
      University: "Sant Gadge Baba Amravati University, Amravati",
      Degree: "Bachelor of Engineering - BE",
      Period: "2015 - 2019",
    },
    help: {
      whoami: "General information",
      experience: "Technical Experience",
      projects: "Projects",
      education: "Educational background",
      skills: "Current SWE skills",
      code: "Coding Profiles",
      blogs: "Contributing programming tutorials for learners",
      github: "Where I put my codes :P",
      linkedIn: "LinkedIn handle of mine.",
      contact: "Email for any thing",
      clear: "clears everything from the terminal",
    },
    skills: {
      Frontend: "Angular, React, HTML, CSS, Material UI, Styled component, Bootstrap",
      Backend: "Java, Spring Framework, Rest architecture",
      Database: "SQL, MongoDB(familiar)",
      Programming_Languages: "Java, C#, JavaScript, TypeScript,",
      Unit_Testing: "JUnit, Jest",
      Version_Control: "Git",
      Agile_Tool: "JIRA, SCRUM",
      Other_Tools: "Microsoft Dynamics 365, Postman, Visual Studio 2022, VSCode",
    },
    projects:[
      {Name: "Social App",
        Category: "Full Stack Web Application",
        Description: "Created a feature-rich Instagram-inspired app covering server, client and security aspects. </br>Built RESTful APIs to handle user auth, post, likes, comments, and follower relationships. Crafted responsive UI (Chakra UI), optimized state via Redux, and built an engaging user feed for seamless interactions",
        TechStack: "Java, Spring Boot, React JS, RESTful APIs, Security, JPA, Hibernate, MySQL",
        URL: "https://github.com/mudar-hussain/SocialApp/"
      },
      {Name: "Smart Contact Manager",
        Category: "Full Stack Web Application",
        Description: "Built contact management site for easy storing, viewing, editing, and deleting contacts. Improved security protocols by incorporating Spring and adding two-factor authentication. Elevated user experience by incorporating streamlined search and dashboard pagination, optimizing usability.",
        TechStack: "Java, Thyme-leaf, JavaScript, Spring Boot, MySQL",
        URL: "https://github.com/mudar-hussain/Smart_Contact_Manager/"
      }
    ],
    code: [
      {
        Coding_Platform: "LeetCode",
        Insights: "400+ Problems Solved",
        Handle: "https://leetcode.com/mudar_shussain/"
      },
      {
        Coding_Platform: "CodeForces",
        Insights: "400+ Problems Solved",
        Handle: "https://codeforces.com/profile/mudar_hussain"
      },
      {
        Coding_Platform: "HackerRank",
        Insights: "Rated 5* in Problem Solving",
        Handle: "https://www.hackerrank.com/profile/Mudar_Hussain"
      },
      {
        Coding_Platform: "Geeks For Geeks",
        Insights: "120+ Problems Solved",
        Handle: "https://www.geeksforgeeks.org/user/mudar_hussain/"
      },
    ],
    blogs: {
      Blogs_Articles: "https://logicinlayers.web.app/",
    },
    github: {
      GitHub_Handle: "https://github.com/mudar-hussain/",
    },
    linkedIn: {
      LinkedIn_Profile: "https://www.linkedin.com/in/mudar-hussain/",
    },
    contact: {
      Email_Address: "mudar.shussain@gmail.com",
    },
  },
};

export default TerminalConfiguration;
