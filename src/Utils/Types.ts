export interface SponsorInterface {
    name: string;
    logo: string;
    url: string;
}

export interface NavLink {
    name: string;
    url: string;
}

export interface EventItem {
  date: string;
  title: string;
  location?: string;
  tag?: 'Match' | 'Fundraiser' | 'Social' | 'Tournament';
  details?: string;
  isHighlight?: boolean;
}

export interface MonthGroup {
  month: string;
  events: EventItem[];
}