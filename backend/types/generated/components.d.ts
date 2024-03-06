import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentComponentsExperienceTimeline extends Schema.Component {
  collectionName: 'components_content_components_experience_timelines';
  info: {
    displayName: 'Experience Timeline';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'subtypes.experience', true>;
  };
}

export interface ContentComponentsNumberedList extends Schema.Component {
  collectionName: 'components_content_components_numbered_lists';
  info: {
    displayName: 'List';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    listType: Attribute.Enumeration<['disc', 'decimal', 'none']> &
      Attribute.Required &
      Attribute.DefaultTo<'disc'>;
    items: Attribute.Component<'primitive-fields.bullet-text', true>;
  };
}

export interface ContentComponentsProjectList extends Schema.Component {
  collectionName: 'components_content_components_project_lists';
  info: {
    displayName: 'Project Carousel';
    icon: 'stack';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'subtypes.project', true>;
    imageFit: Attribute.Enumeration<['contain', 'cover']>;
    imagePadding: Attribute.String;
  };
}

export interface PagesMainPage extends Schema.Component {
  collectionName: 'components_pages_main_pages';
  info: {
    displayName: 'Main Page Fields';
    icon: 'medium';
    description: '';
  };
  attributes: {
    firstName: Attribute.String;
    lastName: Attribute.String;
    profileImage: Attribute.Media;
    mainDescriptionText: Attribute.Text;
    subtextTitle: Attribute.String;
    subtextDescription: Attribute.Text;
    contactLinks: Attribute.Component<'subtypes.link', true>;
    contactLinksTitle: Attribute.String;
  };
}

export interface PrimitiveFieldsBulletText extends Schema.Component {
  collectionName: 'components_sample_category_bullet_texts';
  info: {
    displayName: 'String';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface SubtypesExperience extends Schema.Component {
  collectionName: 'components_subtypes_experiences';
  info: {
    displayName: 'Experience';
    icon: 'seed';
  };
  attributes: {
    name: Attribute.String;
    role: Attribute.String;
    duration: Attribute.String;
    bullets: Attribute.Component<'primitive-fields.bullet-text', true>;
  };
}

export interface SubtypesLink extends Schema.Component {
  collectionName: 'components_subtypes_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
  };
}

export interface SubtypesProject extends Schema.Component {
  collectionName: 'components_subtypes_projects';
  info: {
    displayName: 'Project';
    icon: 'stack';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    year: Attribute.String;
    description: Attribute.Text;
    coverImage: Attribute.Media;
    links: Attribute.Component<'subtypes.link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content-components.experience-timeline': ContentComponentsExperienceTimeline;
      'content-components.numbered-list': ContentComponentsNumberedList;
      'content-components.project-list': ContentComponentsProjectList;
      'pages.main-page': PagesMainPage;
      'primitive-fields.bullet-text': PrimitiveFieldsBulletText;
      'subtypes.experience': SubtypesExperience;
      'subtypes.link': SubtypesLink;
      'subtypes.project': SubtypesProject;
    }
  }
}
