export interface AboutTabItem {
  heading: string;
  detail: string;
}

export interface AboutTabData {
  id: string;
  label: string;
  items: AboutTabItem[];
}

export const ABOUT_TABS_DATA: AboutTabData[] = [
  {
    id: 'education',
    label: 'Education',
    items: [
      {
        heading: '2021-2023',
        detail: 'Master Of Computer Applications'
      },
      {
        heading: '2018-2021',
        detail: 'B.Sc Computer System And Design'
      }
    ]
  },
  {
    id: 'experience',
    label: 'Experience',
    items: [
      {
        heading: 'Aug 2026 - Present',
        detail: 'Design Engineer - CocoGrid'
      },
      {
        heading: 'July 2025 - July 2026',
        detail: 'UI/UX Designer Apprentice - CocoGrid'
      },
      {
        heading: 'Oct 2024 - Dec 2024',
        detail: 'Junior Trainee - KGIS'
      }
    ]
  },
  {
    id: 'skillset',
    label: 'Skillset',
    items: [
      {
        heading: 'UI/UX & Design Systems',
        detail: 'User Flows · Prototyping · Figma Variables · Components · Responsive UI'
      },
      {
        heading: 'Software Development',
        detail: 'HTML · CSS · JavaScript · React · Python · Java · SQL · APIs · Databases'
      },
      {
        heading: 'AI-Assisted Design Engineering',
        detail: 'Figma-to-React Workflows · npm Packaging · GitHub · Design Token Pipelines · Figma Make Integration · AI-Assisted Generation'
      }
    ]
  }
];
