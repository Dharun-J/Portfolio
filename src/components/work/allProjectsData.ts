import {
  PROJECT_DETAILS_LIST,
  type ProjectDetailsItem,
} from './projectDetailsData';

export type { ProjectDetailsItem };

/**
 * ALL_PROJECTS Collection
 *
 * Single source of truth is PROJECT_DETAILS_LIST.
 * Both the Home page and View More page read directly from PROJECT_DETAILS_LIST.
 */
export const ALL_PROJECTS: ProjectDetailsItem[] = PROJECT_DETAILS_LIST;
