import * as React from "react"

import { ChevronLeft, ChevronRight, GithubFill } from "akar-icons"

interface Props {
  slides: Array<{ component: React.ReactNode }>
  showControls?: boolean
  sourceLink?: string
}

const Presentation: React.FC<Props> = ({
  slides,
  sourceLink,
  showControls = true,
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const prevSlide = React.useCallback(() => {
    setCurrentSlide((slide) => {
      if (slide === 0) {
        return slides.length - 1
      } else {
        return slide - 1
      }
    })
  }, [slides.length])

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((slide) => {
      if (slide === slides.length - 1) {
        return 0
      } else {
        return slide + 1
      }
    })
  }, [slides.length])

  React.useEffect(() => {
    const handleKeyboardEvent = (e: KeyboardEvent): void => {
      switch (e.key) {
        case "ArrowLeft":
        case "A":
        case "a":
          prevSlide()
          break
        case "ArrowRight":
        case "B":
        case "b":
          nextSlide()
          break
      }
    }
    document.addEventListener("keyup", handleKeyboardEvent)
    return () => {
      document.removeEventListener("keyup", handleKeyboardEvent)
    }
  }, [prevSlide, nextSlide])

  const renderCurrentSlide = (): React.ReactNode => {
    if (!isNaN(currentSlide) && slides.length > 0) {
      return slides[currentSlide].component
    } else {
      return null
    }
  }

  return (
    <section className="relative grid h-screen place-content-center">
      <div>{renderCurrentSlide()}</div>
      <div className="absolute bottom-4 right-0 flex w-full items-end px-4">
        {sourceLink !== undefined && (
          <div className="flex items-center gap-0.5 text-gray-600">
            <GithubFill size={15} />
            <span>nirnejak/react-presentation</span>
          </div>
        )}
        {showControls && (
          <div className="ml-auto flex gap-2">
            <button
              className="rounded-full bg-gray-300 p-3 text-gray-800"
              onClick={() => {
                prevSlide()
              }}
            >
              <ChevronLeft size={15} />
            </button>
            <button
              className="rounded-full bg-gray-300 p-3 text-gray-800"
              onClick={() => {
                nextSlide()
              }}
            >
              <ChevronRight size={15} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Presentation
