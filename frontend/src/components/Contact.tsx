import { GenericReactHTMLNode } from '@/types';
import Link from 'next/link';
import { HoverableLink } from './HoverableLink';

export function Contact({ ...rest }: GenericReactHTMLNode) {
  return (
    <div {...rest}>
      <h4 className="font-medium text-sm font-sans mb-2 uppercase">Contact</h4>
      <div className="flex flex-row gap-3 sm:text-lg underline underline-offset-2">
        <div>
          <HoverableLink href="mailto:meiyinooi97@gmail.com">
            Email
          </HoverableLink>
        </div>
        <div>
          <HoverableLink href="https://www.linkedin.com/in/meiyinooi/">
            LinkedIn
          </HoverableLink>
        </div>
        <div>
          <HoverableLink href="https://github.com/mehhyin">
            GitHub
          </HoverableLink>
        </div>
      </div>
    </div>
  );
}
