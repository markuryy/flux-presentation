"use client"

import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

import classNames from "utils/classNames"

interface Props {
  title: string
  subtitle?: string[]
  className?: string
}

const About: React.FC<Props> = ({ title, subtitle, className }) => {
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
        {title}
      </motion.h1>
      {subtitle !== undefined && subtitle.length > 0 && (
        <motion.ul
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ delay: 0.1, duration: 0.4, type: "spring" }}
          className="mt-4 space-y-2 text-2xl leading-normal text-gray-500"
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
  )
}

export default About
