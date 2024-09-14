import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Toaster } from 'sonner';

interface YourImageSlideProps {
  imageUrl: string;
  prompt: string;
  loading: boolean;
}

const YourImageSlide: React.FC<YourImageSlideProps> = ({ imageUrl, prompt, loading }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible").catch((err) => {
        console.log(err);
      });
    }
  }, [controls, inView]);

  const variants = {
    hidden: { translateY: 10, opacity: 0 },
    visible: { translateY: 0, opacity: 1 },
  };

  return (
    <div ref={ref} className="flex flex-col items-start justify-center w-[680px]">
      <Toaster richColors />
      <motion.h1 
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0, duration: 0.4, type: "spring" }}
        className="text-4xl font-bold mb-6 text-left"
      >
        Your Image
      </motion.h1>

      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="spinner-border inline-block w-8 h-8 border-4 rounded-full text-blue-600" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span>Generating image...</span>
        </div>
      ) : imageUrl ? (
        <>
          <motion.img 
            src={imageUrl} 
            alt="Generated image"
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0.1, duration: 0.4, type: "spring" }}
            className="max-w-full mb-4 rounded-lg" 
          />
        </>
      ) : null}
    </div>
  );
};

export default YourImageSlide;
