export enum Sections {
  HOME = "HOME",
  SKILLS = "SKILLS",
  PROJECTS = "PROJECTS",
  CONTACT = "CONTACT",
}

export const pages = ["Home", "Skills & Experience", "Contact"];

export interface PagesMap {
  Home: string;
  "Skills & Experience": string;
  Contact: string;
}

export const pagesMap: PagesMap = {
  Home: "Inicio",
  "Skills & Experience": "Habilidades y Experiencia",
  Contact: "Contacto",
};
