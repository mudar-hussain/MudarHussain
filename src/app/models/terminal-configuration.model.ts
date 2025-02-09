export interface TerminalConfig {
  welcome_message: string;
  terminal_username: string;
  commands: {
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
  };
}

export interface Skill {
  id: string;
  icon: string;
  name: string;
}

export interface Position {
  title: string;
  duration: string;
  content: { text: string; link: string }[];
}

export interface Experience {
  logo: string;
  organisation: string;
  link: string;
  positions: Position[];
}

const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "flex md:justify-end items-center",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}  `,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionImgReverseEnd: `flex-1 flex ${styles.flexEnd} md:mr-12 ml-4 mb-4 md:mb-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;

