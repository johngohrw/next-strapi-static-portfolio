import { GenericReactHTMLNode } from '@/types';
import { cn } from '@/utils/common';
import { List } from '../List';

export function ListComponent({
  attributes,
  className,
  ...rest
}: { attributes: any } & GenericReactHTMLNode) {
  const { title, listType, items } = attributes;
  return (
    <section
      className={cn('grid grid-cols-1 lg:grid-cols-6', className)}
      {...rest}
    >
      <h4 className="font-medium text-sm font-sans mb-4 uppercase col-span-2 lg:pr-4">
        {title}
      </h4>
      <List list={items.map((item: any) => item.text)} listType={listType} />
    </section>
  );
}
