/* eslint-disable no-nested-ternary */
import React, { ImgHTMLAttributes } from 'react';
// import NextImage, { ImageProps as NextImageProps } from 'next/image';

// export const Image = (props: NextImageProps) => <NextImage {...props} />;

interface ImageProps extends ImgHTMLAttributes<any> {
  src: string;
  title?: string | undefined;
  alt?: string;
  responsive?: boolean;
  height?: string;
}

// eslint-disable-next-line arrow-body-style
export const Image = ({ src, title, alt, height, responsive }: ImageProps) => {
  return (
    <img
      src={src}
      title={title}
      alt={alt}
      style={{
        // eslint-disable-next-line no-unneeded-ternary
        height: height ? height : responsive ? 'auto !important' : undefined,
        maxWidth: responsive ? '100% !important' : undefined,
      }}
    />
  );
};
