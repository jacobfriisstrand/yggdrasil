/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#FCF7F2",
          dark: "#313239",
        },
        foreground: {
          light: "#F1E6DB",
          dark: "#1A1A1A",
        },
        text: {
          light: "#313239",
          dark: "#FCF7F2",
        },
        accent: "#B5493B",
        success: "#23BB33",
        danger: "#BB2023",
        warning: "#EC9922",
      },
      fontFamily: {
        heading: ["heading", "sans-serif"],
        subheading: ["subheading", "sans-serif"],
        body: ["body", "sans-serif"],
      },
    },
  },
  plugins: [],
};
