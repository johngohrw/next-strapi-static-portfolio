'use client';

import { useState } from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { throttle } from 'lodash';
import { createContext } from 'react';
import { GenericReactHTMLNode } from '@/types';
import { useContext } from 'react';

export const DEFAULT_CURSOR_SIZE = 18;

type CursorContextProps = {
  state: {
    size?: number;
  };
  actions: {
    setSize?: (value: number) => void;
  };
};

export const CursorContext = createContext<CursorContextProps>({
  state: {},
  actions: {},
});

export function CursorProvider({ children, ...rest }: GenericReactHTMLNode) {
  const overlayRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const updateMouse = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    document.addEventListener('mousemove', updateMouse);
    return () => document.removeEventListener('mousemove', updateMouse);
  }, [overlayRef.current]);

  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [size, setSize] = useState<number>(DEFAULT_CURSOR_SIZE);

  const { x: mouseX, y: mouseY } = mousePos;

  const value = {
    state: { size },
    actions: { setSize },
  };
  return (
    <>
      <div
        className="rounded-full fixed inset-0 pointer-events-none mix-blend-hard-light shadow-white backdrop-blur-sm"
        style={{
          transform: `translateX(calc(${mouseX}px - 50%)) translateY(calc(${mouseY}px - 50%))`,
          background: `rgb(2, 122, 169)`,
          height: `${size}px`,
          width: `${size}px`,
        }}
      />
      <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
