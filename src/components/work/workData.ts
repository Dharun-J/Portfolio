import {
  PROJECT_DETAILS_LIST,
  type ProjectDetailsItem,
} from './projectDetailsData';

export type ProjectIconType = 'figma' | 'code';

// ProjectItem is aliased to ProjectDetailsItem to ensure a unified single data type
export type ProjectItem = ProjectDetailsItem;

/**
 * CANONICAL PROJECT ORDER (Single source of truth across Desktop, Tablet, Mobile, and Detail Page Navigation):
 * Derived directly from PROJECT_DETAILS_LIST (first 6 featured projects).
 */
export const PROJECTS: ProjectItem[] = PROJECT_DETAILS_LIST.slice(0, 6);

export const PROJECTS_MAP: Record<string, ProjectItem> = PROJECT_DETAILS_LIST.reduce<
  Record<string, ProjectItem>
>((acc, project) => {
  acc[project.id] = project;
  return acc;
}, {});

// Shared canonical project data used across all responsive layouts
export const MOBILE_PROJECTS: ProjectItem[] = PROJECTS;

/**
 * Returns previous project in canonical sequence:
 * 1. Ecommerce -> null (none / disabled or omitted)
 * 2. Home Manager -> Ecommerce
 * 3. SoundZone -> Home Manager
 * 4. Mathmos -> SoundZone
 * 5. Medical -> Mathmos
 * 6. Chat Application -> Medical
 */
export const getPreviousProject = (projectId: string): ProjectItem | null => {
  const index = PROJECTS.findIndex((p) => p.id === projectId);
  if (index <= 0) return null;
  return PROJECTS[index - 1];
};

/**
 * Returns next project in canonical sequence:
 * 1. Ecommerce -> Home Manager
 * 2. Home Manager -> SoundZone
 * 3. SoundZone -> Mathmos
 * 4. Mathmos -> Medical
 * 5. Medical -> Chat Application
 * 6. Chat Application -> null (none / disabled or omitted)
 */
export const getNextProject = (projectId: string): ProjectItem | null => {
  const index = PROJECTS.findIndex((p) => p.id === projectId);
  if (index === -1 || index >= PROJECTS.length - 1) return null;
  return PROJECTS[index + 1];
};

/**
 * Returns previous and next projects for detail page navigation.
 */
export const getProjectNavigation = (
  projectId: string
): { previous: ProjectItem | null; next: ProjectItem | null } => {
  return {
    previous: getPreviousProject(projectId),
    next: getNextProject(projectId),
  };
};
