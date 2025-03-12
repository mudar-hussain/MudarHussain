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
        Company: "The Bank of New York",
        Role: "Full Stack Developer",
        Period: "Sep '23 - Present",
        Location: "Pune, India",
        Experience: [
          "Developed a Billing & Accounting system for Trade Finance in TIA, eliminating AFS dependency and cutting licensing costs.",
          "Boosted BNY Ops efficiency by automating accrual calculations & billing workflows, reducing manual effort by 4 hrs/day.",
          "Built Trade Monitoring Dashboard for real-time tracking of transactions, errors, alerts, costs, and volume trends.",
          "Improved code quality by raising test coverage to 90%, fixing SonarQube reported issues, & ensuring smooth prod releases."        
        ]
      },
      {
        Company: "Tata Consultancy Services",
        Role: "Systems Engineer",
        Period: "Apr '22 - Sep '23",
        Location: "Nagpur, India",
        Experience: [
          "Engineered a customer data validation feature by integrating D&B and Google API, reducing manual validation time by 80%",
          "Mitigated security risks by implementing user entitlements & multi-level auth in Spring, resolving ethical hacking findings.",
          "Built an RPA-driven feature to automated logistics raw data transformation, saving 5 hrs/day and minimizing errors.",
          "Built Power BI DBs on sales & lead trends, driving insights."
        ]
      },
      {
        Company: "H. M. Construction",
        Role: "Site Execution Engineer",
        Period: "Jun '19 - Mar '21",
        Location: "Nagpur, India",
        Experience: [
          "Streamlined scheduling & inventory for quality & safety, cutting project costs by 7% via design improvements & waste control."
        ]
      },
      {
        Company: "Balaji Structural Consultancy",
        Role: "AutoCAD Draftsman (2D & 3D) [Intern]",
        Period: "Jul '17 - Sep '17",
        Location: "Amravati, India",
        Experience: [
          "Created multiple line plans, Bar Bending Schedule & Structural drawings along with the 3D work of the G+1 Building."
        ]
      }
    ],
    education: {
      University: "Amravati University, India",
      Degree: "Bachelor of Engineering (Civil)",
      Batch: "May 2019",
      Location: "Amravati, India"
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
      {
        Name: "Logic In Layers",
        Category: "Web Application",
        URL: "https://logicinlayers.web.app/",
        TechStack: "Node, Figma, Angular, Typescript",
        Description: [
          "Developed a blogging platform to share technical insights through structured posts.",
          "Built an admin dashboard with Firebase for hosting, auth, storage, and CRUD operations."
        ]
      },
      {
        Name: "Sticky Linkz",
        Category: "Web Application",
        URL: "https://stickylinkz.web.app/",
        TechStack: "Typescript, Angular, CLI, Firebase",
        Description: [
          "Developed a URL shortener with QR code, link activation / deactivation, & sharing capabilities.",
          "Implemented auth and optimized redirection for secure access with edit / delete features."
        ]
      },
      {
        Name: "Social App",
        Category: "Full Stack Web Application",
        URL: "https://github.com/mudar-hussain/SocialApp/",
        TechStack: "Java, Spring, React, Hibernate, SQL",
        Description: [
          "Built with server, client, & security features.",
          "Designed a secure API for user auth, posts, interactions, followers, search, and user feeds."
        ]
      },
      {
        Name: "Sticky Notes",
        Category: "Web Application",
        URL: "https://react-sticky-notes-app.netlify.app/",
        TechStack: "React Js, HTML, CSS, JavaScript",
        Description: [
          "Optimized modularity with React hooks.",
          "Implemented keyword-based search and local storage API for better UX and data retention."
        ]
      },
      {
        Name: "Smart Contact Manager",
        Category: "Full Stack Web Application",
        URL: "https://github.com/mudar-hussain/Smart_Contact_Manager/",
        TechStack: "Java, Thyme-leaf, Spring Boot, SQL, JavaScript",
        Description: [
          "Developed with CRUD, search & pagination.",
          "Enhanced security with Spring and two-factor authentication for secure access."
        ]
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
