import { GenericReactHTMLNode } from '@/types';
import { cn } from '@/utils/common';

export function CapabilitiesList({
  capabilitiesList = mockList,
  className,
  ...rest
}: { capabilitiesList?: string[] } & GenericReactHTMLNode) {
  return (
    <ul
      className={cn('col-span-4 list-decimal ml-4 sm:text-lg', className)}
      {...rest}
    >
      {capabilitiesList.map((text, index) => (
        <li key={index} className="pl-2">
          {text}
        </li>
      ))}
    </ul>
  );
}

const mockList = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Quis nostrud exercitation ullamco.',
  'In voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Nisi ut aliquip ex ea commodo consequat.',
];
