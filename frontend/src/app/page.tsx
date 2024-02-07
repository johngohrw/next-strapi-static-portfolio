import Image from 'next/image';

export default async function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-full text-[#111]">
        <div className="bg-[#ac8ead] w-full">
          <div className="flex flex-col h-full p-8 justify-between">
            <div>
              <div className="flex relative items-center">
                <div
                  className="relative aspect-square sm:hidden w-[64px] overflow-hidden mr-4 flex-shrink-0"
                  style={{
                    mixBlendMode: 'luminosity',
                    filter: 'brightness(1.2) contrast(0.9) ',
                  }}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-xl sm:text-3xl flex flex-col leading-[1]">
                  <div>Meiyin</div>
                  <div className="sm:ml-11">Ooi</div>
                </div>
              </div>

              <div className="text-[22px] sm:text-[28px] variable-width-hero-text pt-8 pb-12 leading-[1.1] z-10">
                I&apos;m a designer and front-end developer based in Sitges,
                Spain, working with the talented group at Upstatement.{' '}
                <span className="font-bold">
                  I am passionate about creating beautiful experiences that are
                  as exciting for visitors as they are beneficial for the
                  content creators who use them.
                </span>
              </div>
            </div>
            <div className="flex-grow flex flex-col sm:flex-row max-h-[30vh] sm:min-h-[300px] xl:min-h-[400px] justify-between gap-8">
              <div
                className="relative aspect-[434/611] h-[300px] xl:h-[400px] lg:h-full hidden sm:block"
                style={{
                  mixBlendMode: 'luminosity',
                  filter: 'brightness(1.2) contrast(0.9) ',
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Image"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col justify-between max-w-[300px]">
                <div className="mb-12">
                  <h4 className="font-medium text-sm font-sans mb-2 uppercase">
                    Awards
                  </h4>
                  My work has been recognized by SPD, the Webbys, SiteInspire,
                  Typewolf, Communication Arts, FastCo Design, and more.
                </div>
                <div>
                  <h4 className="font-medium text-sm font-sans mb-2 uppercase">
                    Contact Me
                  </h4>
                  <button>meiyinooi97@gmail.com</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">Right</div>
      </div>
    </>
  );
}
