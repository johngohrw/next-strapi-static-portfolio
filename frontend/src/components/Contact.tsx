import { GenericReactHTMLNode, Link } from '@/types';
import { HoverableLink } from './HoverableLink';

export function Contact({
  contactList = mockList,
  title = 'Contact',
  ...rest
}: { title?: string; contactList?: Link[] } & GenericReactHTMLNode) {
  return (
    <div {...rest}>
      <h4 className="font-medium text-sm font-sans mb-2 uppercase">{title}</h4>
      <div className="flex flex-row gap-3 sm:text-lg underline underline-offset-2 whitespace-nowrap overflow-hidden flex-wrap">
        {contactList.map((link, index) => (
          <div key={index}>
            <HoverableLink href={link.href ?? '#'}>{link.label}</HoverableLink>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockList = [
  { label: 'Email', href: 'mailto:example@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/myprofile/' },
  { label: 'GitHub', href: 'https://github.com/yourprofile' },
  { label: 'CV', href: '#' },
];
