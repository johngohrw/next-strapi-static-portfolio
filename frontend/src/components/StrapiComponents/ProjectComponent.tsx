import { GenericReactHTMLNode } from '@/types';
import { cn, getStrapiImage } from '@/utils/common';
import { ProjectCarousel } from '../ProjectCarousel';

export function ProjectComponent({
  attributes,
  className,
  ...rest
}: { attributes: any } & GenericReactHTMLNode) {
  const { title, listType, items } = attributes;
  return (
    <section className={cn(className)} {...rest}>
      <h4 className="font-medium text-sm font-sans mb-4 uppercase">{title}</h4>
      <ProjectCarousel
        className="-mx-8 px-8"
        innerClassName=""
        projects={items.map((item: any) => ({
          ...item,
          coverImage: getStrapiImage(item, 'coverImage'),
        }))}
      />
    </section>
  );
}
