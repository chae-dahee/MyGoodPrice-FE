/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#EDEFF4",
        mainColor: "#366CF0",
        mainDarkColor: "#0B52A9",
        mainBrightColor: "#EDEFF4", // bgColor와 동일
        mainBrighterColor: "#F5F6F9",
        subColor: "#CDCED1",
        subDarkColor: "#A5A6A9",
      },
    },
  },
  plugins: [],
};
