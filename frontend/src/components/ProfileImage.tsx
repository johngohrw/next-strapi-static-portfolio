'use client';

import { GenericReactHTMLNode } from '@/types';
import { cn } from '@/utils/common';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function ProfileImage({
  className,
  style,
  imageProps = { className: 'object-contain' },
  ...rest
}: { imageProps?: GenericReactHTMLNode } & GenericReactHTMLNode) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: '-10%' }}
      animate={{ opacity: 1, translateY: '0%' }}
      transition={{ duration: 1 }}
      style={{
        mixBlendMode: 'luminosity',
        filter: 'brightness(1.2) contrast(0.9) ',
      }}
      className={cn('relative', className)}
    >
      <div {...rest}>
        <Image src="/profile.jpg" alt="Image" fill {...imageProps} />
      </div>
    </motion.div>
  );
}
