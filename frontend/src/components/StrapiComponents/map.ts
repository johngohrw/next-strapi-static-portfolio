import { ListComponent } from './ListComponent';
import { ProjectComponent } from './ProjectComponent';
import { TimelineComponent } from './TimelineComponent';

export const componentMap: { [key: string]: any } = {
  'content-components.numbered-list': ListComponent,
  'content-components.project-list': ProjectComponent,
  'content-components.experience-timeline': TimelineComponent,
};
