'use client';
import { GenericReactHTMLNode } from '@/types';
import Link from 'next/link';

export function HoverableLink({
  href,
  children,
  ...rest
}: { href: string } & GenericReactHTMLNode) {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
