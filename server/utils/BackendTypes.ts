export type EventStructured = {
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
  embed: boolean;
};

export type SponsorStructured = {
  id: string;
  name: string;
  location: string;
  isDeal: boolean;
  deal: string;
  imageSrc: string;
  link: string;
};

export type ExecStructured = {
  id: string;
  name: string;
  imageSrc: string;
  team: string;
};

export type LinksStructured = {
  id: string;
  text: string;
  show: boolean;
  link: string;
};