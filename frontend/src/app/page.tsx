import { strapiRequest } from '@/api';
import { Contact } from '@/components/Contact';
import { MainDescription } from '@/components/MainDescription';
import { ProfileImage } from '@/components/ProfileImage';
import { componentMap } from '@/components/StrapiComponents/map';
import { getStrapiImage } from '@/utils/common';
import { Metadata } from 'next';
import { createElement } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const siteResponse = await strapiRequest(
    `/api/sites?filters[siteIdentifier][$eq]=${process.env.NEXT_PUBLIC_STRAPI_SITE_IDENTIFIER}&populate[mainPage][populate]=*&populate=*`,
  );
  const siteData = siteResponse?.data?.[0]?.attributes ?? {};
  const { title = 'Portfolio Website', mainPage: mainPageData } =
    siteData ?? {};

  const { mainDescriptionText = 'Welcome to my portfolio website.' } =
    mainPageData ?? {};

  return {
    title,
    description: mainDescriptionText,
  };
}

export default async function Home() {
  const siteResponse = await strapiRequest(
    `/api/sites?filters[siteIdentifier][$eq]=${process.env.NEXT_PUBLIC_STRAPI_SITE_IDENTIFIER}&populate=deep&populate=*`,
  );

  const siteData = siteResponse?.data?.[0]?.attributes ?? {};

  // console.log(JSON.stringify(siteData, null, 2));

  const {
    foregroundColor,
    backgroundColor,
    themeColor,
    mainPage: mainPageData,
    rightContent,
  } = siteData ?? {};

  const {
    firstName,
    lastName,
    mainDescriptionText,
    subtextDescription,
    subtextTitle,
    contactLinks: contactList,
  } = mainPageData ?? {};

  const profileImageSrc = getStrapiImage(mainPageData, 'profileImage');

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              --background-color: ${backgroundColor};
              --foreground-color: ${foregroundColor};
              --theme-color: ${themeColor};
            }
            body {
              background: var(--background-color);
              color: var(--foreground-color);
            }
          `,
        }}
      />
      <div className="flex flex-col lg:flex-row min-h-full">
        <div
          className="w-full lg:fixed lg:top-0 lg:bottom-0 lg:left-0 lg:w-[50vw] overflow-auto no-scrollbar"
          style={{
            background: 'var(--theme-color)',
          }}
        >
          <div className="flex flex-col h-full p-8 py-16 lg:py-8 lg:pb-0 justify-between">
            <div className="">
              <div className="flex flex-row relative items-center">
                <ProfileImage
                  src={profileImageSrc}
                  className="aspect-square sm:hidden w-[64px] overflow-hidden mr-4 flex-shrink-0"
                  imageProps={{ className: 'object-cover' }}
                />
                <div className="text-2xl sm:text-4xl flex flex-col sm:items-end leading-[1]">
                  {firstName && <div className="">{firstName}</div>}
                  {lastName && <div className="">{lastName}</div>}
                </div>
              </div>

              <MainDescription
                text={mainDescriptionText}
                className="py-16 lg:pt-8 lg:pb-12 leading-[1.3] lg:leading-[1.1] z-10 "
              ></MainDescription>
            </div>
            <div className="flex-grow flex flex-col sm:flex-row items-end lg:pb-8">
              <div className="w-full hidden sm:flex flex-col justify-end h-full max-h-[300px] aspect-[434/611] mr-8">
                <ProfileImage
                  src={profileImageSrc}
                  className="h-full"
                  imageProps={{ className: 'object-left object-contain' }}
                />
              </div>

              <div className="flex flex-col justify-between h-full">
                <div className="sm:mb-12">
                  {subtextTitle && (
                    <h4 className="font-medium text-sm font-sans mb-2 uppercase">
                      {subtextTitle}
                    </h4>
                  )}
                  {subtextDescription && (
                    <div className="sm:text-lg">{subtextDescription}</div>
                  )}
                </div>
                <Contact className="mt-16 lg:mt-0" contactList={contactList} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex-grow lg:w-[50vw] lg:ml-[50vw]">
          <div className="flex flex-col h-full px-8 py-16 lg:py-8 gap-8 lg:pt-28">
            {rightContent.map((item: any, index: number) =>
              createElement(componentMap[item.__component], {
                attributes: item,
                key: index,
                className: 'mb-6',
              }),
            )}
          </div>
        </div>
        <div
          className="w-full h-[200px] sm:hidden"
          style={{
            background: 'var(--theme-color)',
          }}
        >
          <div className="flex flex-col h-full p-8 justify-center">
            <Contact contactList={contactList} />
          </div>
        </div>
      </div>
    </>
  );
}
