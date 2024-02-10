import { Contact } from '@/components/Contact';
import { MainDescription } from '@/components/MainDescription';
import { ProfileImage } from '@/components/ProfileImage';
import { ProjectCarousel } from '@/components/ProjectCarousel';

export default async function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-full text-[#111]">
        <div className="bg-[#ac8ead] w-full lg:fixed lg:top-0 lg:bottom-0 lg:left-0 lg:w-[50%] overflow-auto no-scrollbar">
          <div className="flex flex-col h-full p-8 py-16 lg:py-8 lg:pb-0 justify-between">
            <div className="">
              <div className="flex flex-row sm:grid sm:grid-cols-2 relative items-center">
                <ProfileImage
                  className="aspect-square sm:hidden w-[64px] overflow-hidden mr-4 flex-shrink-0"
                  imageProps={{ className: 'object-cover' }}
                />
                <div className="text-2xl sm:text-4xl flex flex-col leading-[1]">
                  <div>Meiyin</div>
                  <div className="sm:ml-14">Ooi</div>
                </div>

                {/* <Role className="hidden sm:block lg:hidden" /> */}
              </div>

              <MainDescription
                text="I'm a designer and front-end developer based in Sitges,
                Spain, working with the talented group at Upstatement. I am
                passionate about creating beautiful experiences that are as
                exciting for visitors as they are beneficial for the content
                creators who use them."
                className="py-16 lg:pt-8 lg:pb-12 leading-[1.3] lg:leading-[1.1] z-10 "
              ></MainDescription>
            </div>
            <div className="flex-grow flex flex-col sm:flex-row items-end lg:pb-8">
              <div className="w-full hidden sm:flex flex-col justify-end h-full max-h-[300px] aspect-[434/611] mr-8">
                <ProfileImage
                  className="h-full"
                  imageProps={{ className: 'object-left object-contain' }}
                />
              </div>

              <div className="flex flex-col justify-between h-full">
                <div className="sm:mb-12">
                  <h4 className="font-medium text-sm font-sans mb-2 uppercase">
                    Awards
                  </h4>
                  <div className="sm:text-lg">
                    My work has been recognized by SPD, the Webbys, SiteInspire,
                    Typewolf, Communication Arts, FastCo Design, and more.
                  </div>
                </div>
                <Contact className="mt-16 lg:mt-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex-grow lg:w-[50%] lg:ml-[50vw]">
          <div className="flex flex-col h-full px-8 py-16 lg:py-8 gap-8">
            {/* <Role className="!hidden lg:!flex" /> */}
            <section className="lg:pt-28 grid grid-cols-1 lg:grid-cols-6 mb-12">
              <h4 className="font-medium text-sm font-sans mb-4 uppercase col-span-2">
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
            </section>
            <section className="">
              <h4 className="font-medium text-sm font-sans mb-4 uppercase">
                PROJECTS
              </h4>
              <ProjectCarousel className="-mx-8 px-8" innerClassName="" />
            </section>{' '}
            <section className="grid grid-cols-1 lg:grid-cols-6">
              <h4 className="font-medium text-sm font-sans mb-6 uppercase col-span-2">
                EXPERIENCE
              </h4>
              <div className="col-span-4 sm:text-lg">
                <div className="mb-6">
                  <div className="leading-tight font-bold">TDCX</div>
                  <div className="text-sm">Business Analyst</div>
                  <div className="text-sm opacity-50 mb-1">
                    March 2020 - Present
                  </div>
                  <ul className="list-disc text-[16px] leading-snug pl-5">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <div className="leading-tight font-bold">TDCX</div>
                  <div className="text-sm">Business Analyst</div>
                  <div className="text-sm opacity-50 mb-1">
                    March 2020 - Present
                  </div>
                  <ul className="list-disc text-[16px] leading-snug pl-5">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="bg-[#ac8ead] w-full h-[200px] sm:hidden">
          <div className="flex flex-col h-full p-8 justify-center">
            <Contact className="" />
          </div>
        </div>
      </div>
    </>
  );
}
