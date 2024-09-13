import * as React from "react"

import { type Metadata } from "next"

import Presentation from "components/Presentation"
import About from "components/Slides/About"
import Cover from "components/Slides/Cover"
import End from "components/Slides/End"
import ImageSlide from "components/Slides/ImageSlide"
import QuoteBlock from "components/Slides/QuoteBlock"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Flux Presentation",
  description: "Exploring Flux: Advanced Text-to-Image AI Model",
})

const slides: React.ReactNode[] = [
  <Cover
    key="cover"
    title="Recent Trends in AI"
    subtitle="Introduction to Flux"
    className="w-[680px]"
  />,
  <About
    key="introduction"
    title="Today's Journey"
    subtitle={[
      "Understanding Flux and its innovations",
      "Exploring finetuning techniques",
      "Showcasing results and applications",
      "Discussing ethical considerations",
    ]}
    className="w-[680px]"
  />,
  <About
    key="what-is-flux"
    title="What is Flux?"
    subtitle={[
      "Advanced text-to-image model family",
      "Developed by Black Forest Labs",
      "Released recently (about a month ago)",
      "Builds upon previous models like Stable Diffusion",
    ]}
    className="w-[680px]"
  />,
  <About
    key="flux-innovations"
    title="Flux Innovations"
    subtitle={[
      "Significantly larger model size",
      "Guidance distillation for faster processing",
      "Flow matching for improved image generation",
    ]}
    className="w-[680px]"
  />,
  <QuoteBlock
    key="flux-quote"
    quote="Diffusion models create data from noise by inverting the forward paths of data towards noise and have emerged as a powerful generative modeling technique for high-dimensional, perceptual data such as images and videos."
    author="Patrick Esser et al, Scaling Rectified Flow Transformers for High-Resolution Image Synthesis"
    className="w-[680px]"
  />,
  <ImageSlide
    key="denoising-gif"
    title="From Noise to Image"
    subtitle={[
      "Start with random noise",
      "Gradually refine into coherent image",
      "Guided by text prompt and model knowledge",
    ]}
    image="/images/Denoise.gif"
    caption='Prompt: text that says "Diffusion!" in front of an abstract neural network 3d render with lit up neurons'
    className="w-[680px]"
  />,
  <Cover
    key="technical-breakdown"
    title="Technical Breakdown"
    subtitle="Understanding the Core of Flux"
    className="w-[680px]"
  />,
  <About
    key="latent-space"
    title="Latent Space in Flux"
    subtitle={[
      "Compressed representation of data",
      "Captures essential features efficiently",
      "Allows for more effective processing",
    ]}
    className="w-[680px]"
  />,
  <About
    key="transformers"
    title="Transformer Architecture"
    subtitle={[
      "Neural networks for sequential data",
      "Self-attention for context understanding",
      "Crucial for coherent image generation",
    ]}
    className="w-[680px]"
  />,
  <Cover
    key="finetuning-journey"
    title="My Finetuning Journey"
    subtitle="From Challenges to Breakthroughs"
    className="w-[680px]"
  />,
  <About
    key="initial-attempts"
    title="Initial Attempts with LoRA"
    subtitle={[
      "Low-Rank Adaptation technique",
      "Limited performance gains",
      "Risk of model degradation",
    ]}
    className="w-[680px]"
  />,
  <About
    key="advanced-finetuning"
    title="LyCORIS and LoKr: Advanced Finetuning"
    subtitle={[
      "LyCORIS: Extends LoRA capabilities",
      "LoKr: Uses Kronecker product for richer data",
      "Improved quality while preserving model integrity",
    ]}
    className="w-[680px]"
  />,
  <Cover
    key="results-showcase"
    title="Showcasing Results"
    subtitle="Personalized AI-Generated Imagery"
    className="w-[680px]"
  />,
  <ImageSlide
    key="self-portraits"
    title="Self-Portraits"
    subtitle={[
      "Photorealistic versions",
      "Stylized artistic renditions",
      "Demonstrates model's versatility",
    ]}
    image="/images/M_Cool_Guy.png"
    caption='Prompt: Mark standing in an abstract dreamscape wearing a hoodie that says "cool guy" with his arms crossed'
    className="w-[680px]"
  />,
  <ImageSlide
    key="friend-portraits"
    title="Friend's Portraits: Hannah"
    subtitle={[
      "Images created with consent",
      "Showcases personalization capabilities",
      "Variety of styles and settings",
    ]}
    image="/images/MH_Cats.png"
    caption="Demonstration of LoKr's ability to differentiate subjects and generalize across styles"
    className="w-[680px]"
  />,
  <ImageSlide
    key="cat-images"
    title="Cat Images"
    subtitle={[
      "Photorealistic renderings",
      "Cartoon and stylized versions",
      "Highlights model's adaptability",
    ]}
    image="/images/Albert_TED.png"
    caption='Prompt: a photo of Albert the cat wearing a headset with a microphone on stage giving a TED talk. He is captured mid-speech. The TEDx logo is visible in the background with the text "Catnip Optimization Algorithms in the Digital Age" on the presentation.'
    className="w-[680px]"
  />,
  <Cover
    key="applications-ethics"
    title="Applications and Ethics"
    subtitle="Balancing Potential with Responsibility"
    className="w-[680px]"
  />,
  <About
    key="potential-applications"
    title="Potential Applications"
    subtitle={[
      "Creative industries: art, design, marketing",
      "Education and training tools",
      "Personalized content creation",
    ]}
    className="w-[680px]"
  />,
  <About
    key="ethical-considerations"
    title="Ethical Considerations"
    subtitle={[
      "Risks of misuse (e.g., deepfakes)",
      "Data privacy and consent",
      "Importance of responsible development",
    ]}
    className="w-[680px]"
  />,
  <About
    key="conclusion"
    title="Embracing the Future of AI"
    subtitle={[
      "Flux: significant advancement in AI imaging",
      "Innovative finetuning enhances capabilities",
      "Balancing innovation with responsibility",
      "Encouraging ongoing dialogue",
    ]}
    className="w-[680px]"
  />,
  <End key="end" username="markuryy" />,
]

const Home: React.FC = () => {
  return (
    <div>
      <Presentation slides={slides} sourceLink="markuryy/flux-presentation" />
    </div>
  )
}

export default Home
