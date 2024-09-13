"use client"

import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

import classNames from "utils/classNames"

interface Props {
  title: string
  subtitle?: string[]
  image: string
  caption?: string
  className?: string
}

const ImageSlide: React.FC<Props> = ({
  title,
  subtitle,
  image,
  caption,
  className,
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible").catch((err) => {
        console.log(err)
      })
    }
  }, [controls, inView])

  const variants = {
    hidden: { translateY: 10, opacity: 0 },
    visible: { translateY: 0, opacity: 1 },
  }

  return (
    <div ref={ref} className={classNames("flex", className ?? "")}>
      <div className="w-1/2 pr-4">
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ delay: 0, duration: 0.4, type: "spring" }}
          className="mb-4 text-4xl font-bold leading-normal text-gray-900"
        >
          {title}
        </motion.h1>
        {subtitle !== undefined && subtitle.length > 0 && (
          <motion.ul
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0.1, duration: 0.4, type: "spring" }}
            className="space-y-2 text-xl leading-normal text-gray-500"
          >
            {subtitle.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item.trim()}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
        className="w-1/2"
      >
        <div className="relative w-full h-[400px]">
          <Image
            src={image}
            alt="Slide image"
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {caption !== undefined && caption.length > 0 && (
          <motion.p
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
            className="mt-2 text-center text-sm italic text-gray-500"
          >
            {caption}
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}

export default ImageSlide
