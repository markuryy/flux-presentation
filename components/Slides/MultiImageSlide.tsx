"use client"

import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

import classNames from "utils/classNames"

interface Props {
  title: string
  images: [string, string]
  captions?: [string, string]
  className?: string
}

const MultiImageSlide: React.FC<Props> = ({
  title,
  images,
  captions,
  className,
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible").catch(console.error)
    }
  }, [controls, inView])

  const variants = {
    hidden: { translateY: 10, opacity: 0 },
    visible: { translateY: 0, opacity: 1 },
  }

  const renderCaption = (index: number): React.ReactNode => {
    if (captions === undefined || captions === null) {
      return null
    }
    const caption = captions[index]
    if (caption === undefined || caption === null || caption.trim() === "") {
      return null
    }

    return (
      <motion.p
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
        className="mt-2 text-center text-sm italic text-gray-500"
      >
        {caption}
      </motion.p>
    )
  }

  return (
    <div ref={ref} className={classNames("flex flex-col", className ?? "")}>
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0, duration: 0.4, type: "spring" }}
        className="mb-4 text-4xl font-bold leading-normal text-gray-900"
      >
        {title}
      </motion.h1>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
        className="flex justify-between space-x-4"
      >
        {images.map((image, index) => (
          <div key={index} className="w-1/2">
            <div className="relative h-[400px] w-full">
              <Image
                src={image}
                alt={`Slide image ${index + 1}`}
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {renderCaption(index)}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default MultiImageSlide
