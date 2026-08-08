import type { MonthGroup } from '../Utils/Types';

export const calendarData: MonthGroup[] = [
  {
    month: 'May 2026',
    events: [
      { date: '10th', title: 'Junior League Games', location: 'Leeds Fives, Limewood Approach, Seacroft, Leeds, LS14 1NH', tag: 'Match' },
      { date: '31st', title: 'Adult League Games', location: 'West Riding County FA, Fleet Lane, Woodlesford, Leeds, LS26 8NX', tag: 'Match' },
      { date: '31st', title: 'Junior League Games', location: 'Thornes', tag: 'Match' },
    ],
  },
  {
    month: 'June 2026',
    events: [
      { date: '6th', title: 'Bag Pack Fundraiser', location: 'ASDA, Girlington (10am - 3pm)', tag: 'Fundraiser' },
      { date: '28th', title: 'Adult League Games', location: 'Bradford & Bingley Sports Club, Wagon Lane, Bingley, BD16 1LT', tag: 'Match' },
    ],
  },
  {
    month: 'July 2026',
    events: [
      { date: '5th', title: 'Flamingoland Trip', tag: 'Social' },
      { date: '12th', title: 'Gomersal & Cleckheaton Tournament', tag: 'Tournament' },
      { date: '19th', title: 'Bridlington Tournament', details: 'Day trip with coach transfer provided.', tag: 'Tournament' },
    ],
  },
  {
    month: 'September 2026',
    events: [
      { date: '12th', title: 'Pre-Tournament Party', location: 'Bradford & Bingley Sports Club, Wagon Lane, BD16 1LT', tag: 'Social' },
      { date: '13th', title: 'BDFC Annual Tournament', location: 'Wagon Lane, BD16 1LT', tag: 'Tournament', isHighlight: true },
      {
        date: '18th',
        title: 'BDFC 25th Anniversary Night',
        location: 'Bradford & Bingley Sports Club, Wagon Lane, BD16 1LT',
        details: 'Formal sit-down meal celebrating 25 years. Special guests, live band, and founder Mr. Paul Squires in attendance!',
        tag: 'Social',
        isHighlight: true,
      },
    ],
  },
  {
    month: 'October 2026',
    events: [
      { date: '23rd', title: 'Presentation Evening', location: 'The New Tyke, Thornton Rd, BD13 3DG', tag: 'Social' },
    ],
  },
  {
    month: 'December 2026',
    events: [
      { date: '11th', title: 'Christmas Party', location: 'The New Tyke, Thornton Rd, BD13 3DG', tag: 'Social' },
    ],
  },
];