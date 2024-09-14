import React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"
import { Toaster } from "sonner"

interface YourImageSlideProps {
  imageUrl: string
  prompt: string
  loading: boolean
}

const YourImageSlide: React.FC<YourImageSlideProps> = ({
  imageUrl,
  prompt,
  loading,
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
    <div
      ref={ref}
      className="flex w-[680px] flex-col items-start justify-center"
    >
      <Toaster richColors />
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0, duration: 0.4, type: "spring" }}
        className="mb-6 text-left text-4xl font-bold"
      >
        Your Image
      </motion.h1>

      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div
            className="inline-block size-8 animate-spin rounded-full border-4 border-blue-600"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <span>Generating image...</span>
        </div>
      ) : imageUrl !== "" ? (
        <motion.img
          src={imageUrl}
          alt="Generated image"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ delay: 0.1, duration: 0.4, type: "spring" }}
          className="mb-4 max-w-full rounded-lg"
        />
      ) : null}
    </div>
  )
}

export default YourImageSlide
