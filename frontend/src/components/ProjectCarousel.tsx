'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { IoMdArrowDropleft } from 'react-icons/io';

import { GenericReactHTMLNode } from '@/types';
import { cn } from '@/utils/common';
import Image from 'next/image';
import Link from 'next/link';
import { HoverableLink } from './HoverableLink';

export function ProjectCarousel({
  className,
  innerClassName,
  ...rest
}: { innerClassName?: string } & GenericReactHTMLNode) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [
      Autoplay({
        delay: 5000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ],
  );
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

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
          {Array.from(Array(5).keys()).map((index) => (
            <Slide
              imageSrc="https://picsum.photos/200"
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
      <div className="mt-4">
        <div className="text-xl">
          This is The Title of The Project{' '}
          <span className="opacity-40 text-[16px]">(2016)</span>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="mt-2 flex flex-row gap-3 sm:text-lg underline underline-offset-2 justify-end">
          <HoverableLink href="#">GitHub</HoverableLink>
          <HoverableLink href="#">Demo</HoverableLink>
        </div>
      </div>
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
}: { isActive?: boolean; imageSrc: string } & GenericReactHTMLNode) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 grid-rows-1 gap-4 flex-shrink-0 mr-8',
        className,
      )}
      {...rest}
    >
      <div className="w-[260px] h-[260px] bg-gray-500/10 overflow-hidden relative">
        <Image
          src={imageSrc}
          alt="project image"
          fill
          className="duration-1000"
          style={{
            ...(isActive
              ? {}
              : { filter: 'grayscale(1) brightness(1.0) contrast(0.7)' }),
          }}
        />
        <div
          className="absolute inset-0 duration-1000"
          style={{
            background: '#ac8ead',
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

{
  /* <div className="aspect-[16/5] flex flex-row">
              <div className="relative h-full aspect-[4/3]">
                <Image src="https://picsum.photos/200" alt="image" fill />
              </div>
              <div className="flex-grow ml-2">
                <div className="font-bold text-md uppercase font-sans">
                  Sample Project That I&apos;ve Been Working On
                </div>
                <div>2016</div>
                <div>Here&apos;s the description for this project</div>
              </div>
            </div> */
}
