"use client"

import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

import classNames from "utils/classNames"

interface Props {
  quote: string
  author: string
  className?: string
}

const QuoteBlock: React.FC<Props> = ({ quote, author, className }) => {
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
    <div
      ref={ref}
      className={classNames("flex h-full flex-col justify-center", className)}
    >
      <motion.blockquote
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0, duration: 0.4, type: "spring" }}
        className="mb-4 text-2xl font-medium leading-relaxed text-gray-900"
      >
        &ldquo;{quote}&rdquo;
      </motion.blockquote>
      <motion.p
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0.1, duration: 0.4, type: "spring" }}
        className="text-xl text-gray-500"
      >
        &mdash; {author}
      </motion.p>
    </div>
  )
}

export default QuoteBlock
