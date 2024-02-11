import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'primitive-fields.bullet-text': PrimitiveFieldsBulletText;
      'subtypes.link': SubtypesLink;
    }
  }
}
