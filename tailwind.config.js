/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#14eba3",
          hover: "#0dbd80",
        },
        text: {
          primary: "var(--color-text-primary)",
          "primary-hover": "var(--color-text-primary-hover)",
          secondary: "var(--color-text-secondary)",
        },
        background: {
          primary: "var(--color-background-primary)",
          "primary-hover": "var(--color-background-primary-hover)",
          secondary: "var(--color-background-secondary)",
          tertiary: "var(--color-background-tertiary)",
        },
        button: {
          primary: "var(--color-button-primary)",
          "primary-hover": "var(--color-button-primary-hover)",
          secondary: "var(--color-button-secondary)",
          "secondary-hover": "var(--color-button-secondary-hover)",
          text: "var(--color-button-text)",
        },
        border: {
          primary: "var(--color-border-primary)",
          "primary-hover": "var(--color-border-primary-hover)",
        },
      },
    },
  },
  plugins: [],
};
