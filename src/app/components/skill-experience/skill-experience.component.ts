import { Component } from '@angular/core';
import { SkillCardComponent } from "../skill-card/skill-card.component";
// import styles from 'src/app/models/terminal-configuration.model';

@Component({
  selector: 'app-skill-experience',
  templateUrl: './skill-experience.component.html',
  styleUrls: ['./skill-experience.component.css'],
  // imports: [SkillCardComponent]
})
export class SkillExperienceComponent {
  // styles = styles;
  skills = [
    {
      title: "Programming Languages",
      items: [
        {
          id: "java",
          icon: "fa-brands fa-java",
          name: "Java",
        },
        {
          id: "python",
          icon: "fa-brands fa-python",
          name: "Python",
        },
        {
          id: "sql",
          icon: "fa-solid fa-database",
          name: "SQL",
        },
        {
          id: "cpp",
          icon: "fa-brands fa-c",
          name: "C/C++",
        },
        {
          id: "html",
          icon: "fa-brands fa-html5",
          name: "HTML",
        },
        {
          id: "css",
          icon: "fa-brands fa-css3-alt",
          name: "CSS",
        },
        {
          id: "javaScript",
          icon: "fa-brands fa-js",
          name: "JavaScript",
        },
        {
          id: "typescript",
          icon: "fa-brands fa-js",
          name: "TypeScript",
        }
      ]
    },
    {
      title: "Frameworks/Libraries",
      items: [
        {
          id: "spring",
          icon: "fa-solid fa-leaf",
          name: "Spring",
        },
        {
          id: "hibernate",
          icon: "fa-solid fa-power-off",
          name: "Hibernate",
        },
        {
          id: "angular",
          icon: "fa-brands fa-angular",
          name: "Angular",
        },
        {
          id: "react",
          icon: "fa-brands fa-react",
          name: "ReactJS",
        },
        {
          id: "node",
          icon: "fa-brands fa-node",
          name: "NodeJS",
        },
        {
          id: "bootstrap",
          icon: "fa-brands fa-bootstrap",
          name: "Bootstrap",
        },
        {
          id: "tailwind",
          icon: "fa-solid fa-t",
          name: "Tailwind CSS",
        },
        {
          id: "jquery",
          icon: "fa-solid fa-j",
          name: "jQuery",
        }
      ]
    },
    {
      title: "Tools",
      items: [
        {
          id: "git",
          icon: "fa-brands fa-git-alt",
          name: "Git",
        },
        {
          id: "vscode",
          icon: "fa-solid fa-code",
          name: "VS Code",
        },
        {
          id: "intellij",
          icon: "fa-solid fa-info",
          name: "Intellij",
        },
        {
          id: "postman",
          icon: "fa-solid fa-p",
          name: "Postman",
        },
        {
          id: "github",
          icon: "fa-brands fa-github",
          name: "GitHub",
        },
        {
          id: "gitlab",
          icon: "fa-brands fa-gitlab",
          name: "Gitlab",
        },
        {
          id: "firebase",
          icon: "fa-solid fa-fire-flame-curved",
          name: "firebase",
        },
        {
          id: "figma",
          icon: "fa-brands fa-figma",
          name: "Figma",
        }
      ]
    },
  ];
  experiences = [
    {
      organisation: "The Bank of New York",
      logo: "https://drive.google.com/thumbnail?id=19l96QqqLTM7pCh5ydQs4bB9gxVuGVxak&sz=s1000",
      link: "https://www.bny.com/",
      location: "Pune, India",
      positions: [
        {
          title: "Full Stack Developer",
          duration: "Sept 2023 - Present",
          content: [
            {
              text: "Developed scalable sales app (React, Spring Boot, Microservices) to enhance customer experience and streamline workflows",
              link: ""
            },
            {
              text: "Designed and developed RESTful APIs for seamless interaction between frontend and backend services.",
              link: ""
            },
            {
              text: "Worked alongside diverse teams to gather requirements, strategize milestones, and ensure timely, high-quality solutions.",
              link: ""
            }
          ],
        }
      ],
    },
    {
      organisation: "Tata Consultancy Services",
      logo: "https://drive.google.com/thumbnail?id=19X9qP7uWDFKbBHDAsLHCe4zYYfw3fbvu&sz=s1000",
      link: "https://www.tcs.com/",
      location: "Nagpur, India",
      positions: [
        {
          title: "Systems Engineer",
          duration: "April 2022 - Sept 2023",
          content: [
            {
              text: "Developed scalable sales app (React, Spring Boot, Microservices) to enhance customer experience and streamline workflows",
              link: ""
            },
            {
              text: "Designed and developed RESTful APIs for seamless interaction between frontend and backend services.",
              link: ""
            },
            {
              text: "Worked alongside diverse teams to gather requirements, strategize milestones, and ensure timely, high-quality solutions.",
              link: ""
            }
          ],
        },
        {
          title: "Assistant System Engineer",
          duration: "April 2021 - March 2022",
          content: [
            {
              text: "Utilized RPA to efficiently validate and transform logistics data, cutting daily team workload by 3 hrs and enhancing accuracy",
              link: ""
            },
            {
              text: "Built Power BI dashboards for fast data visualization from SQL Server, empowering actionable insights for stakeholders.",
              link: ""
            },
            {
              text: "Conducted several Microsoft Power Platform workshops, enhancing proficiency and expertise for over 70 developers.",
              link: ""
            }
          ],
        },
      ],
    },
    {
      organisation: "H. M. Construction",
      logo: "https://drive.google.com/thumbnail?id=1eyyu5xDiCDzTC03GCuMHxnSChmDkfinl&sz=s1000",
      link: "https://www.justdial.com/Nagpur/H-M-Construction-OPP-to-Namak-Karkhana-Mahatma-Fule-Market/0712PX712-X712-170919181646-W8Z8_BZDET",
      location: "Nagpur, India",
      positions: [
        {
          title: "Site Execution Engineer",
          duration: "June 2019 - March 2021",
          content: [
            {
              text: "Supervised and organized on-site work schedule and inventory utilization to maintain quality control and safety compliance.",
              link: "",
            },
            {
              text: "Achieved 7\% reduction in ongoing project billing costs through strategic design modifications and material wastage analysis.",
              link: "",
            },
          ],
        }
      ],
    },
    {
      organisation: "Balaji Structural Consultancy",
      logo: "https://drive.google.com/thumbnail?id=1_yLGZoHITxSkMydekYYI9_EHF_R5aLYC&sz=s1000",
      link: "http://www.bscstructuralrcc.com/",
      location: "Amravati, India",
      positions: [
        {
          title: "AutoCAD Draftsman (2D \& 3D) [Intern]",
          duration: "July 2017 - Sept 2017",
          content: [
            {
              text: "Created multiple line plans, Bar Bending Schedule \& Structural drawings along with the 3D work of the G+1 Building.",
              link: "",
            }
          ],
        }
      ],
    }
  ];

}
