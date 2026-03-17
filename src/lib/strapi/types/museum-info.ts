import type { StrapiImage } from "./common";

export type HeroSection = {
  title: string;
  subtitle: string | null;
  backgroundImage: StrapiImage;
};

export type Contact = {
  phoneNumber: string;
  email: string;
};

export type ImportantInfo = {
  information: string;
};

export type OpeningHours = {
  period: string;
  oppeningTime: string | null;
  closingTime: string | null;
  IsClosedForPublic: boolean;
  order: number;
};
