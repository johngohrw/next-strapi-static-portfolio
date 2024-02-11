export type GenericReactHTMLNode = React.HTMLAttributes<HTMLElement>;

export type Link = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
};

export type Project = {
  year: number;
  title: string;
  coverImage: string;
  description: string;
  links: Link[];
};
