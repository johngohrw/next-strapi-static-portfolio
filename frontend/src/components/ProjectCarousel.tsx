'use client';

import { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { IoMdArrowDropleft } from 'react-icons/io';

import { GenericReactHTMLNode, Link, Project } from '@/types';
import { cn } from '@/utils/common';
import Image from 'next/image';
import { HoverableLink } from './HoverableLink';

export function ProjectCarousel({
  className,
  innerClassName,
  projects,
  ...rest
}: {
  innerClassName?: string;
  projects: Project[];
} & GenericReactHTMLNode) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [
      Autoplay({
        delay: 5000,
        stopOnMouseEnter: true,
        stopOnInteraction: true,
      }),
    ],
  );
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const selectedProject = projects[selectedIndex];

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className={cn('embla relative', className)} ref={emblaRef} {...rest}>
        <div className={cn('flex flex-row', innerClassName)}>
          {projects.map((proj, index) => (
            <Slide
              imageSrc={proj.coverImage}
              className="cursor-pointer shadow-md"
              isActive={index === selectedIndex}
              key={index}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
        <div className="absolute bottom-0 right-0 flex flex-row shadow-xl">
          <button
            className="w-[54px] h-[40px] bg-gray-200 hover:bg-white flex items-center justify-center duration-150 border-r border-gray-300"
            onClick={scrollPrev}
          >
            <IoMdArrowDropleft size={28} fill="#555" />
          </button>
          <button
            className="w-[54px] h-[40px] bg-gray-200 hover:bg-white flex items-center justify-center duration-150"
            onClick={scrollNext}
          >
            <IoMdArrowDropleft size={28} fill="#555" className="rotate-180" />
          </button>
        </div>
      </div>
      {selectedProject && (
        <div className="pt-2">
          <div className="text-xl my-2">
            {selectedProject.title}{' '}
            <span className="opacity-40 text-[16px]">
              ({selectedProject.year})
            </span>
          </div>
          <div>{selectedProject.description}</div>
          <div className="mt-2 flex flex-row gap-3 sm:text-lg underline underline-offset-2 justify-end">
            {selectedProject.links.map((link) => (
              <HoverableLink key={link.label} href={link.href}>
                {link.label}
              </HoverableLink>
            ))}
          </div>
        </div>
      )}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .embla {
                overflow: hidden;
            }
        `,
        }}
      />
    </>
  );
}

function Slide({
  isActive = false,
  imageSrc,
  className,
  ...rest
}: {
  isActive?: boolean;
  imageSrc: string;
} & GenericReactHTMLNode) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 grid-rows-1 gap-4 flex-shrink-0 mr-8',
        className,
      )}
      {...rest}
    >
      <div
        className="w-[260px] h-[260px] bg-gray-500/10 overflow-hidden relative duration-1000"
        style={{
          ...(isActive ? { opacity: 1 } : { opacity: 0.5 }),
        }}
      >
        <Image
          src={imageSrc}
          alt="project image"
          fill
          className="duration-1000 object-cover"
          style={{
            ...(isActive
              ? {}
              : { filter: 'grayscale(1) brightness(1.0) contrast(0.7)' }),
          }}
        />
        <div
          className="absolute inset-0 duration-1000"
          style={{
            background: 'var(--theme-color)',
            mixBlendMode: 'color',
            ...(isActive
              ? { opacity: 0 }
              : {
                  opacity: 1,
                }),
          }}
        ></div>
      </div>
    </div>
  );
}
