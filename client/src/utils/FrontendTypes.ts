export interface NavButtonProps {
  linkto: string;
  buttontext: string;
}

export interface EventProps {
  id: string;
  eventStartDateTime: string; // in ISO format
  eventEndDateTime: string; // in ISO format
  title: string;
  location: string;
  description: string;
  imageSrc: string;
  form: string;
  week: string;
  instagram: string;
}

export interface SponsorProps {
  id: string;
  name: string;
  location: string;
  isDeal: boolean;
  deal: string;
  imageSrc: string;
  link: string;
}

export interface ExecProps {
  id: string;
  name: string;
  imageSrc: string;
  team: string;
}
