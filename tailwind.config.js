const { withTV } = require("tailwind-variants/transformer");

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  darkMode: ["class"], // Enable dark mode with the 'class' strategy
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem", // Adds padding to the container by default
      screens: {
        "2xl": "1400px", // Maximum screen size for the container
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)", // Custom large radius
        md: "calc(var(--radius) - 2px)", // Custom medium radius
        sm: "calc(var(--radius) - 4px)", // Custom small radius
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))", // Primary color
          foreground: "hsl(var(--primary-foreground))", // Primary foreground
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Secondary color
          foreground: "hsl(var(--secondary-foreground))", // Secondary foreground
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Destructive color (e.g., error, delete)
          foreground: "hsl(var(--destructive-foreground))", // Destructive foreground
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Muted color (used for less emphasized elements)
          foreground: "hsl(var(--muted-foreground))", // Muted foreground
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Accent color (used for highlights, buttons)
          foreground: "hsl(var(--accent-foreground))", // Accent foreground
        },
        popover: {
          DEFAULT: "hsl(var(--popover))", // Popover color (used for modal-like elements)
          foreground: "hsl(var(--popover-foreground))", // Popover foreground
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Card background color
          foreground: "hsl(var(--card-foreground))", // Card foreground color
        },
      },
    },
  },
  plugins: [], // Add any plugins you may need here
});
