const TerminalConfiguration = {
  welcome_message: "Type 'help' to get started !",
  terminal_username: "[Mudar@Terminal:~]$",
  commands: {
    help: {
      "su <name>":      "Switch user. Because why not?",
      "whoami":         "Who I am, in case you forgot.",
      "cv, resume":     "Open my résumé. Impressive, obviously.",
      "skills, techstack": "My programming arsenal.",
      "exp, experience": "Places that survived me.",
      "projects":       "Software I delivered.",
      "education":      "Proof I survived school.",
      "code":           "Handle my code with care.",
      "leetcode":       "Where I solve painful puzzles.",
      "codeforces":     "Another leaderboard flex.",
      "blogs":          "Teaching fellow devs a thing or two.",
      "git, github":    "Public chaos repository.",
      "linkedIn":       "Professional profile, polished.",
      "email":          "Reach out if you dare.",
      "clear":          "Wipe the terminal, start fresh.",
      "echo":           "Repeats what you say.",
      "date":           "Current date & time, obviously.",
      "tree":           "View commands in a structured tree."
    },
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
          "Developed a Billing & Accounting system, streamlining cross-team operations by eliminating dependency on the AFS.",
          "Automated accruals and billing with bank specific commission structure, saving 4+ hrs/day using Spring jobs and scheduler.",
          "Spearheaded the architecture & development of a multi-tenant invoicing system, enabling partner banks to streamline the client invoicing via flexible, service-oriented design.",
          "Built a Trade Monitoring Dashboard for real-time tracking of global transactions, errors, alerts, costs, and volume trends.",
          "Improved code quality, ensuring smooth production releases via 90% test coverage and resolving SonarQube reported issues."           
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
          "Built an RPA-driven feature to automated logistics raw data transformation, saving 5+ hrs/day and minimizing errors.",
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
    education: {
      University: "Amravati University, India",
      Degree: "Bachelor of Engineering (Civil)",
      Batch: "May 2019",
      Location: "Amravati, India"
    },
    skills: {
      Programming_Language: "Java, SQL, JavaScript, TypeScript, Python, C++",
      Frameworks_and_Libraries: "Spring, Hibernate, Angular, React, Node.js",
      Database: "Oracle, PostgreSQL, MySQL, Cassandra, Redis",
      DevOps_and_Cloud_Tools: "Git, GitHub Actions, Docker, Kubernetes, AWS, Firebase, CI/CD Pipelines",
      Build_and_Productivity_Tools: "Maven, NPM, Postman, IntelliJ IDEA, VS Code, GitLab, GitHub, Figma, Canva, Power BI",
      Computer_Science_Fundamentals: "Data Structures & Algorithms, Concurrency, Networking, Database Design & Transactions, Object-Oriented Design (SOLID Principles & Design Patterns), Microservices Architecture, Scalable System Design (Low & High Level)",
    },
    code: [
      {
        Coding_Platform: "LeetCode",
        Insights: "400+ Problems Solved",
        Handle: "https://leetcode.com/u/mudar_hussain/"
      },
      {
        Coding_Platform: "GeeksForGeeks",
        Insights: "120+ Problems Solved",
        Handle: "https://www.geeksforgeeks.org/user/mudar_hussain/"
      },
      {
        Coding_Platform: "CodeForces",
        Insights: "Programming Contests",
        Handle: "https://codeforces.com/profile/mudar_hussain"
      },
      // {
      //   Coding_Platform: "CodeChef",
      //   Insights: "400+ Problems Solved",
      //   Handle: "https://www.codechef.com/users/mudar_hussain"
      // },
      // {
      //   Coding_Platform: "HackerRank",
      //   Insights: "Rated 5* in Problem Solving",
      //   Handle: "https://www.hackerrank.com/profile/Mudar_Hussain"
      // },
    ],
  },
};

export default TerminalConfiguration;
