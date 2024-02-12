import { GenericReactHTMLNode } from '@/types';
import { cn } from '@/utils/common';
import { ExperienceList } from '../ExperienceList';

export function TimelineComponent({
  attributes,
  className,
  ...rest
}: { attributes: any } & GenericReactHTMLNode) {
  const { title, items } = attributes;
  return (
    <section
      className={cn('grid grid-cols-1 lg:grid-cols-6', className)}
      {...rest}
    >
      <h4 className="font-medium text-sm font-sans mb-6 uppercase col-span-2">
        EXPERIENCE
      </h4>
      <ExperienceList className="col-span-4" experienceList={items} />
    </section>
  );
}
