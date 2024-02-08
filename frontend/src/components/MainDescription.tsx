'use client';

import { GenericReactHTMLNode } from '@/types';
import { cn } from '@/utils/common';
import { stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

const staggerItems = stagger(0.1, { startDelay: 0.15 });

function useTextAnimation(isTriggered: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'div',
      isTriggered
        ? {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            y: '0%',
          }
        : { opacity: 0, scale: 0.3, filter: 'blur(20px)', y: '50%' },
      {
        duration: 0.2,
        delay: staggerItems,
      },
    );
  }, [isTriggered]);

  return scope;
}

export function MainDescription({
  className,
  text = '',
  ...rest
}: { text: string } & GenericReactHTMLNode) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        'div.inline-block',
        {
          opacity: 0,
          y: '10%',
        },
      ],
      [
        'div.inline-block',
        {
          opacity: 1,
          y: '0%',
        },
        {
          duration: 0.2,
          delay: staggerItems,
        },
      ],
    ]);
  }, []);

  return (
    <div
      ref={scope}
      className={cn(
        `text-[22px] sm:text-[28px] variable-width-hero-text pt-8 pb-12 leading-[1.1] z-10`,
        className,
      )}
      {...rest}
      dangerouslySetInnerHTML={{
        __html: text
          .split(' ')
          .filter((word) => word.length > 0)
          .map(
            (word) =>
              `<div class="inline-block" style="opacity:0">${word}</div>`,
          )
          .join(' '),
      }}
    ></div>
  );
}
