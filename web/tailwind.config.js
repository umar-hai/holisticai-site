/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "428px",
      lg: "960px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "base-purple": "#5b42e4",
        "inactive-base-purple": "#aa9df1",
        "base-blue": "#264fd9",
        "inactive-blue": "#a8b9f0",
        "text-body": "#1b1e27",
        "text-secondary": "#8492a6",
        "text-title": "#141e41",
        light: "#f4f5f8",
        dark: "#141e41",
        stroke: "#dfdfea",
      },
      boxShadow: {
        hai: "0px 4px 16px rgba(0, 0, 0, 0.15)",
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
  },
  plugins: [],
};
