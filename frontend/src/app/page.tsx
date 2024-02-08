import { HoverableLink } from '@/components/HoverableLink';
import { MainDescription } from '@/components/MainDescription';
import { ProfileImage } from '@/components/ProfileImage';
import { GenericReactHTMLNode } from '@/types';
import { cn } from '@/utils/common';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-full text-[#111]">
        <div className="bg-[#ac8ead] w-full">
          <div className="flex flex-col h-full p-8 justify-between">
            <div>
              <div className="flex relative items-center">
                <ProfileImage
                  className="aspect-square sm:hidden w-[64px] overflow-hidden mr-4 flex-shrink-0"
                  imageProps={{ className: 'object-cover' }}
                />
                <div className="text-xl sm:text-3xl flex flex-col leading-[1]">
                  <div>Meiyin</div>
                  <div className="sm:ml-11">Ooi</div>
                </div>
              </div>

              <MainDescription
                text="I'm a designer and front-end developer based in Sitges,
                Spain, working with the talented group at Upstatement. I am
                passionate about creating beautiful experiences that are as
                exciting for visitors as they are beneficial for the content
                creators who use them."
              ></MainDescription>
            </div>
            <div className="flex-grow flex flex-col sm:flex-row sm:min-h-[300px] xl:min-h-[400px] justify-between gap-8">
              <ProfileImage className="aspect-[434/611] self-end h-[300px] lg:h-[260px] xl:h-[360px] hidden sm:block" />

              <div className="flex flex-col justify-between max-w-[300px]">
                <div className="sm:mb-12">
                  <h4 className="font-medium text-sm font-sans mb-2 uppercase">
                    Awards
                  </h4>
                  <div className="sm:text-lg">
                    My work has been recognized by SPD, the Webbys, SiteInspire,
                    Typewolf, Communication Arts, FastCo Design, and more.
                  </div>
                </div>
                <Contact className="hidden sm:block" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col h-full p-8">
            <div className="text-xl sm:text-3xl flex flex-col leading-[1]">
              <div>Data</div>
              <div className="">Analyst</div>
            </div>
            <div className="pt-8 grid grid-cols-1 lg:grid-cols-6">
              <h4 className="font-medium text-sm font-sans mb-2 uppercase col-span-2">
                CAPABILITIES
              </h4>
              <ul className="col-span-4 list-decimal ml-4 sm:text-lg">
                <li className="pl-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className="pl-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </li>
                <li className="pl-2">Quis nostrud exercitation ullamco.</li>
                <li className="pl-2">
                  In voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </li>
                <li className="pl-2">
                  Nisi ut aliquip ex ea commodo consequat.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Contact({ ...rest }: GenericReactHTMLNode) {
  return (
    <div {...rest}>
      <h4 className="font-medium text-sm font-sans mb-2 uppercase">
        Contact Me
      </h4>
      <div className="flex flex-row gap-3 sm:text-lg">
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
