import React from "react"

import Image from "next/image"

interface StackedImagesProps {
  topImageSrc: string
  bottomImageSrc: string
  caption: string
}

const StackedImages: React.FC<StackedImagesProps> = ({
  topImageSrc,
  bottomImageSrc,
  caption,
}) => {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
      <div className="relative mb-6 aspect-[3.5/4] w-full overflow-hidden rounded-lg">
        <Image
          src={topImageSrc}
          alt="Top image"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-lg">
        <Image
          src={bottomImageSrc}
          alt="Bottom image"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <p className="mt-2 text-center text-sm italic text-gray-500">{caption}</p>
    </div>
  )
}

export default StackedImages
