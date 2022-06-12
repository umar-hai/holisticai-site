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
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
  },
  plugins: [],
};
