import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classNames from "utils/classNames";
import { Textarea } from "components/ui/textarea";

interface YourTurnSlideProps {
  setImageUrl: (url: string) => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const YourTurnSlide: React.FC<YourTurnSlideProps> = ({ setImageUrl, prompt, setPrompt, loading, setLoading }) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('/api/generate-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    setLoading(false);

    if (response.ok) {
      const data = await response.json();
      if (data.result) {
        setImageUrl(data.result.images[0].url);
      }
    }

    setPrompt('');
  };

  return (
    <div ref={ref} className="flex flex-col items-start justify-center w-[680px]">
      <motion.h1 
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0, duration: 0.4, type: "spring" }}
        className="text-4xl font-bold mb-6 text-left"
      >
        Your Turn
      </motion.h1>
      <motion.form 
        onSubmit={handleSubmit}
        initial="hidden" 
        animate={controls}
        variants={variants}
        transition={{ delay: 0.1, duration: 0.4, type: "spring" }}
        className="flex flex-col items-center w-full"
      >
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
          placeholder="Enter a prompt"
          disabled={loading}
        />
        <button 
          type="submit"
          className={classNames(
            "bg-blue-500 text-white px-4 py-2 rounded-md flex items-center",
            loading ? "cursor-not-allowed" : "hover:bg-blue-600"
          )}
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : 'Submit'}
        </button>
      </motion.form>
    </div>
  );
};

export default YourTurnSlide;
