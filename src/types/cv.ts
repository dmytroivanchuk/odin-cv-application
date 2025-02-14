export type CV = {
  general: General;
  educations: Education[];
  experiences: Experience[];
};

export type General = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type Education = {
  id: string;
  position: number;
  schoolName: string;
  titleOfStudy: string;
  dateFromTo: string;
};

export type Experience = {
  id: string;
  position: number;
  companyName: string;
  positionTitle: string;
  dateFromTo: string;
  description: string;
};
