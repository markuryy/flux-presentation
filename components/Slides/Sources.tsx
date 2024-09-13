"use client"

import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

import classNames from "utils/classNames"

interface SourcesProps {
  sources: string[];
  className?: string;
}

const Sources: React.FC<SourcesProps> = ({ sources, className }) => {
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
    <div ref={ref} className={classNames(className ?? "")}>
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0, duration: 0.4, type: "spring" }}
        className="mb-6 text-5xl font-bold leading-normal text-gray-900"
      >
        Resources
      </motion.h1>
      <motion.ul
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0.1, duration: 0.4, type: "spring" }}
        className="mt-4 space-y-2 text-xl leading-normal text-gray-500"
      >
        {sources.map((source, index) => (
          <li key={index} className="flex items-start">
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 hover:underline"
            >
              {source}
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Sources