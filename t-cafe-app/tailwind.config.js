/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { lightbrown: "#CABA9C", darkbrown: "#4D2D18" },
    },
  },
  plugins: [],
};
