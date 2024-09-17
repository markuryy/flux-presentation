import React from 'react';
import Image from 'next/image';

interface StackedImagesProps {
  topImageSrc: string;
  bottomImageSrc: string;
  caption: string;
}

const StackedImages: React.FC<StackedImagesProps> = ({
  topImageSrc,
  bottomImageSrc,
  caption,
}) => {
  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      <div className="relative w-full aspect-[3.5/4] mb-6 rounded-lg overflow-hidden">
        <Image
          src={topImageSrc}
          alt="Top image"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      <div className="relative w-full aspect-[16/10] mb-6 rounded-lg overflow-hidden">
        <Image
          src={bottomImageSrc}
          alt="Bottom image"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      <p className="mt-2 text-center text-sm italic text-gray-500">{caption}</p>
    </div>
  );
};

export default StackedImages;