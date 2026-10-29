export interface WorkWithItem {
  id: string;
  title: string;
  description: string;
  iconType: 'code' | 'figma' | 'android';
}

export const WORK_WITH_DATA: WorkWithItem[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Building complete website with frontend and backend integration, focusing on functionality and usability.',
    iconType: 'code'
  },
  {
    id: 'ui-ux-designing',
    title: 'UI/UX Designing',
    description: 'Designing user-friendly interfaces with wireframes, user flows, prototypes with a focus on clarity and usability.',
    iconType: 'figma'
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Basic knowledge in Android app development, with an understanding of core concepts & implementation.',
    iconType: 'android'
  }
];
