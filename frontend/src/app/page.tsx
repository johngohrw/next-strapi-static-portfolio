import { strapiRequest } from '@/api';
import { CapabilitiesList } from '@/components/CapabilitiesList';
import { Contact } from '@/components/Contact';
import { ExperienceList } from '@/components/ExperienceList';
import { MainDescription } from '@/components/MainDescription';
import { ProfileImage } from '@/components/ProfileImage';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { Experience, Project } from '@/types';

export default async function Home() {
  const projectsList: Project[] = (
    await strapiRequest(
      '/api/projects?populate[links][populate]=*&populate[coverImage]=true',
    )
  ).data
    .map((item: any) => item.attributes)
    .map((item: any) => ({
      ...item,
      coverImage: `${process.env.NEXT_PUBLIC_STRAPI_MEDIA_ORIGIN}${item.coverImage.data.attributes.url}`,
    }));

  const mainPageData = (
    await strapiRequest(
      '/api/main-page?populate[contactLinks][populate]=*&populate[profileImage]=true',
    )
  ).data.attributes;

  const {
    foregroundColor,
    backgroundColor,
    themeColor,
    firstName,
    lastName,
    profileImage,
    mainDescriptionText,
    subtextDescription,
    subtextTitle,
    contactLinks: contactList,
  } = mainPageData;
  const profileImageSrc = `${process.env.NEXT_PUBLIC_STRAPI_MEDIA_ORIGIN}${profileImage.data.attributes.url}`;

  const capabilitiesList: string[] = (
    await strapiRequest('/api/skills?populate=*')
  ).data.map((item: any) => item.attributes.text);

  const experienceList: Experience[] = (
    await strapiRequest('/api/experiences?populate[Bullets][populate]=*')
  ).data
    .map((item: any) => item.attributes)
    .map((item: any) => ({
      ...item,
      bullets: item.Bullets.map((bullet: any) => bullet.text),
    }));

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body {
              background: ${backgroundColor} !important;
            }
          `,
        }}
      />
      <div
        className="flex flex-col lg:flex-row min-h-full"
        style={{ color: foregroundColor }}
      >
        <div
          className="w-full lg:fixed lg:top-0 lg:bottom-0 lg:left-0 lg:w-[50vw] overflow-auto no-scrollbar"
          style={{
            background: themeColor,
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
          <div className="flex flex-col h-full px-8 py-16 lg:py-8 gap-8">
            <section className="lg:pt-28 grid grid-cols-1 lg:grid-cols-6 mb-12">
              <h4 className="font-medium text-sm font-sans mb-4 uppercase col-span-2">
                CAPABILITIES
              </h4>
              <CapabilitiesList capabilitiesList={capabilitiesList} />
            </section>
            <section className="mb-6">
              <h4 className="font-medium text-sm font-sans mb-4 uppercase">
                PROJECTS
              </h4>
              <ProjectCarousel
                className="-mx-8 px-8"
                innerClassName=""
                themeColor={themeColor}
                projects={projectsList}
              />
            </section>{' '}
            <section className="grid grid-cols-1 lg:grid-cols-6">
              <h4 className="font-medium text-sm font-sans mb-6 uppercase col-span-2">
                EXPERIENCE
              </h4>
              <ExperienceList
                className="col-span-4"
                experienceList={experienceList}
              />
            </section>
          </div>
        </div>
        <div
          className="w-full h-[200px] sm:hidden"
          style={{
            background: themeColor,
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
