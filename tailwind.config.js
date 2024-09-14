/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDownAndFade: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideLeftAndFade: {
          from: {
            opacity: "0",
            transform: "translateX(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideUpAndFade: {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideRightAndFade: {
          from: {
            opacity: "0",
            transform: "translateX(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideDown: {
          from: {
            transform: "translateY(-10px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        slideUp: {
          from: {
            transform: "translateY(10px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        slideLeft: {
          from: {
            transform: "translateX(-10px)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        slideRight: {
          from: {
            transform: "translateX(10px)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        swing: {
          from: {
            transform: "rotate(3deg)",
          },
          to: {
            transform: "rotate(-3deg)",
          },
        },
        scale: {
          from: {
            opacity: "0",
            transform: "scale(0)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        rise: {
          from: {
            transform: "translate(-50%, -40%) scale(0.95)",
          },
          to: {
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDown: "slideDown 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUp: "slideUp 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeft: "slideLeft 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRight: "slideRight 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        swing: "swing 1s infinite ease-in-out alternate",
        scale: "scale 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        rise: "rise 150ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
    fontFamily: {
      sans: ["var(--sans-font)", "Inter", "system-ui"],
      mono: ["var(--mono-font)"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}
