export interface Position {
  title: string;
  duration: string;
  location: string;
  content: { text: string; link: string }[];
}

export interface Experience {
  logo: string;
  organisation: string;
  link: string;
  positions: Position[];
}
