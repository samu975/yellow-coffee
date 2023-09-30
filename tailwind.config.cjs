/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        principal: ["Albert Sans", "sans"],
        principalBold: ["Albert Sans Bold", "sans"],
      },
      colors: {
        naranja: "#f26a21",
      },
    },
  },
  plugins: [],
};
