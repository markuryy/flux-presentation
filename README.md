# Flux Presentation

This project is a presentation about Flux, an advanced text-to-image model family developed by Black Forest Labs. It's built using Next.js 14 with the app router and TypeScript.

## Overview

This presentation covers:

- Introduction to Flux
- Flux innovations and technologies
- The process of image generation from noise
- Dataset preparation techniques
- Personal finetuning journey
- Showcase of AI-generated imagery
- Applications and ethical considerations of AI image generation

## Key Features

- Interactive slides with various components
- Integration with an image generation API
- Responsive design for different screen sizes

## Main Components

- `<Presentation />` - The main wrapper component for all slides
- `<Cover />` - A cover slide component with title and subtitle
- `<About />` - A slide component for presenting bullet points
- `<ImageSlide />` - A component for displaying images with captions
- `<MultiImageSlide />` - A component for displaying multiple images
- `<QuoteBlock />` - A component for displaying quotes
- `<ComponentSlide />` - A slide with a custom React component
- `<YourTurnSlide />` - An interactive slide for generating images
- `<Sources />` - A slide for listing sources
- `<End />` - An outro slide component

## Getting Started

This project uses Bun as the package manager and runtime. Make sure you have Bun installed before proceeding.

1. Clone the repository
2. Install dependencies:
   ```
   bun install
   ```
3. Run the development server:
   ```
   bun dev
   ```
4. Open [http://localhost:4000](http://localhost:4000) in your browser to see the presentation.

## Environment Variables

Copy the `.env.example` file to `.env.local` and fill in the required API keys:

```
FAL_API_KEY=your_fal_api_key_here
```

## Building for Production

To create a production build:

```
bun run build
```

To start the production server:

```
bun start
```

## Additional Information

- This project uses Tailwind CSS for styling
- Framer Motion is used for animations

## Credits

This project is built on top of the [React Presentation Maker](https://github.com/nirnejak/react-presentation) by Jitendra Nirnejak. The original README and project structure have been adapted and extended to fit the needs of this Flux presentation.

---

For more information about the underlying presentation framework, please refer to the original [React Presentation Maker repository](https://github.com/nirnejak/react-presentation).
