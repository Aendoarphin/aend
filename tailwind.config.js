/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        info: "var(--info)",
        success: "var(--success)",
        danger: "var(--danger)",
        warning: "var(--warning)",
      },
      dropShadow: {
        default: "2px 4px 1px var(--shadow)"
      },
      textColor: {
        "color-default": "var(--foreground)"
      },
      boxShadow: {
        default: "2px 4px 4px var(--shadow)"
      },
      fontFamily: {
        brand: "zbonus",
      },
      fontSize: {
        heading: "var(--heading)",
        subheading: "var(--subheading)"
      },
    },
  },
  darkMode: "selector",
  plugins: [],
}