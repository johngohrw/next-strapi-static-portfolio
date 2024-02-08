import { GenericReactHTMLNode } from '@/types';
import { cn } from '@/utils/common';

export function Role({ className, ...rest }: GenericReactHTMLNode) {
  return (
    <div
      className={cn('flex flex-col text-xl sm:text-3xl leading-[1]', className)}
      {...rest}
    >
      <div>Data</div>
      <div className="">Analyst</div>
    </div>
  );
}
