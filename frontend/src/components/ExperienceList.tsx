import { GenericReactHTMLNode } from '@/types';
import { cn } from '@/utils/common';

export type Experience = {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
};

export function ExperienceList({
  experienceList = mockList,
  className,
  ...rest
}: { experienceList?: Experience[] } & GenericReactHTMLNode) {
  return (
    <div className={cn('sm:text-lg', className)} {...rest}>
      {experienceList.map((experience, index) => (
        <div className="mb-6" key={index}>
          <div className="leading-tight font-bold opacity-85">
            {experience.company}
          </div>
          <div className="text-sm">{experience.role}</div>
          <div className="text-sm opacity-50 mb-1">{experience.duration}</div>
          <ul className="list-disc text-[16px] leading-snug pl-5">
            {experience.bullets.map((bulletText, bulletIndex) => (
              <li key={bulletIndex}>{bulletText}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const mockList: Experience[] = [
  {
    company: 'Company Name Here',
    role: 'Junior Associate Manager',
    duration: 'March 2020 - Present',
    bullets: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet.',
    ],
  },
  {
    company: 'Company Name Here',
    role: 'Junior Associate Manager',
    duration: 'March 2020 - Present',
    bullets: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet.',
    ],
  },
];
