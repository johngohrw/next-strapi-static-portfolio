'use client';

import { Experience, GenericReactHTMLNode } from '@/types';
import { cn } from '@/utils/common';

export function ExperienceList({
  experienceList,
  className,
  ...rest
}: { experienceList: Experience[] } & GenericReactHTMLNode) {
  return (
    <>
      <div className={cn('sm:text-lg', className)} {...rest}>
        {experienceList.map((experience, index) => (
          <div className="mb-6" key={index}>
            <div className="leading-tight font-bold opacity-85">
              {experience.name}
            </div>
            <div className="text-sm">{experience.role}</div>
            <div className="text-sm opacity-50 mb-1">{experience.duration}</div>
            <ul className="list-disc text-[16px] leading-snug pl-5">
              {experience.bullets.map((bullet: any, bulletIndex) => (
                <li
                  key={bulletIndex}
                  className="list-bullet"
                  dangerouslySetInnerHTML={{ __html: bullet.text }}
                ></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
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
