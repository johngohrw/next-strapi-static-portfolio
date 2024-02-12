import { GenericReactHTMLNode } from '@/types';
import { cn } from '@/utils/common';

export function List({
  list,
  className,
  listType = 'disc',
  ...rest
}: {
  list: string[];
  listType?: 'disc' | 'decimal' | 'none';
} & GenericReactHTMLNode) {
  return (
    <ul
      className={cn(
        'col-span-4 sm:text-lg',
        `list-${listType}`,
        ['decimal', 'disc', 'none'].includes(listType) ? 'ml-6' : '',
        className,
      )}
      {...rest}
    >
      {list.map((text, index) => (
        <li key={index} className={cn(listType === 'decimal' ? 'pl-2' : '')}>
          {text}
        </li>
      ))}
    </ul>
  );
}
