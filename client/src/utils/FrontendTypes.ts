export interface NavButtonProps {
    linkto: string;
    buttontext: string;
  }

export interface EventCardProps {
    id: string;
    eventStartDateTime: string; // in ISO format
    eventEndDateTime: string;
    title: string;
    location: string;
    description: string;
    imageSrc: string;
  }

  export interface SponsorCardProps {
    id: string;
    name: string;
    location: string;
    isDeal: boolean;
    deal: string;
    imageSrc: string;
    link: string;
  }