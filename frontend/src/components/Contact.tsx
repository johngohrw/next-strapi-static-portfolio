import { GenericReactHTMLNode } from '@/types';
import Link from 'next/link';

export function Contact({ ...rest }: GenericReactHTMLNode) {
  return (
    <div {...rest}>
      <h4 className="font-medium text-sm font-sans mb-2 uppercase">
        Contact Me
      </h4>
      <div className="flex flex-row gap-3 sm:text-lg underline underline-offset-2">
        <div>
          <Link href="mailto:meiyinooi97@gmail.com">Email</Link>
        </div>
        <div>
          <Link href="https://www.linkedin.com/in/meiyinooi/">LinkedIn</Link>
        </div>
        <div>
          <Link href="https://github.com/mehhyin">GitHub</Link>
        </div>
      </div>
    </div>
  );
}
