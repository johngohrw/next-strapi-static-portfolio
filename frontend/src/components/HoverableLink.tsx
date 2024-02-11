'use client';

import { GenericReactHTMLNode } from '@/types';
import { cn } from '@/utils/common';
import { useHover } from '@uidotdev/usehooks';
import Link from 'next/link';

export function HoverableLink({
  href,
  className,
  children,
  ...rest
}: { href: string } & GenericReactHTMLNode) {
  const [ref, isHover] = useHover();
  return (
    <>
      <Link
        ref={ref}
        href={href}
        className={cn('relative', className)}
        {...rest}
      >
        {children}
        <div
          className="absolute top-[50%] left-[50%] rounded-full bg-yellow-500 aspect-square duration-200 floater mix-blend-color pointer-events-none"
          style={{
            ...(isHover ? { height: '80px' } : { height: 0 }),
          }}
        ></div>
      </Link>
      <style jsx>{`
        .floater {
          animation: 5s infinite floating;
        }
        @keyframes floating {
          0% {
            transform: translate(calc(-50% - 0%), calc(-50% - 0%));
          }
          25% {
            transform: translate(calc(-50% + 2%), calc(-50% + 5%));
          }
          50% {
            transform: translate(calc(-50% - 5%), calc(-50% + 1%));
          }
          75% {
            transform: translate(calc(-50% + 1%), calc(-50% - 0%));
          }
          100% {
            transform: translate(calc(-50% - 0%), calc(-50% - 0%));
          }
        }
      `}</style>
    </>
  );
}
