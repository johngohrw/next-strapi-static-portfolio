'use client';

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
    <>
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
          <li
            key={index}
            className={cn('list-bullet', listType === 'decimal' ? 'pl-2' : '')}
            dangerouslySetInnerHTML={{ __html: text }}
          ></li>
        ))}
      </ul>
      <style jsx>
        {`
          .list-bullet :global(a) {
            color: var(--foreground-color);
            opacity: 0.8;
            transition-duration: 200ms;
            mix-blend-mode: normal;
            text-decoration: underline;
          }
          .list-bullet :global(a):hover {
            opacity: 1;
          }
        `}
      </style>
    </>
  );
}
