import React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

import { Textarea } from "components/ui/textarea"
import classNames from "utils/classNames"

// Define the shape of the API response
interface GenerateImageResponse {
  result: {
    images: Array<{ url: string }>
  }
}

interface YourTurnSlideProps {
  setImageUrl: (url: string) => void
  prompt: string
  setPrompt: (prompt: string) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

const YourTurnSlide: React.FC<YourTurnSlideProps> = ({
  setImageUrl,
  prompt,
  setPrompt,
  loading,
  setLoading,
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect((): void => {
    if (inView) {
      const animate = async (): Promise<void> => {
        try {
          await controls.start("visible")
        } catch (err) {
          console.error(err)
        }
      }
      void animate() // Use void to indicate the promise is intentionally not awaited
    }
  }, [controls, inView])

  const variants = {
    hidden: { translateY: 10, opacity: 0 },
    visible: { translateY: 0, opacity: 1 },
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (response.ok) {
        const data: GenerateImageResponse = await response.json()

        // Use optional chaining to safely access nested properties
        const firstImageUrl = data.result?.images?.[0]?.url

        // Explicitly check that firstImageUrl is a non-empty string
        if (typeof firstImageUrl === "string" && firstImageUrl.trim() !== "") {
          setImageUrl(firstImageUrl)
        } else {
          console.error("No images found in the response or URL is empty.")
        }
      } else {
        console.error("Response not ok:", response.statusText)
      }
    } catch (error) {
      console.error("Error fetching image:", error)
    } finally {
      setLoading(false)
      setPrompt("")
    }
  }

  // Wrap the handleSubmit in a non-async function to prevent passing a promise to onSubmit
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    void handleSubmit(e)
  }

  return (
    <div
      ref={ref}
      className="flex w-[680px] flex-col items-start justify-center"
    >
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0, duration: 0.4, type: "spring" }}
        className="mb-6 text-left text-4xl font-bold"
      >
        Your Turn
      </motion.h1>
      <motion.form
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0.1, duration: 0.4, type: "spring" }}
        className="flex w-full flex-col items-center"
        onSubmit={onFormSubmit} // Use the wrapped handler
      >
        <Textarea
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value)
          }}
          className="mb-4 w-full rounded-md border border-gray-300 p-2"
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
              <svg
                className="-ml-1 mr-3 size-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Generating...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </motion.form>
    </div>
  )
}

export default YourTurnSlide
