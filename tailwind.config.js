/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueP: "#0B65AF",
        lightBlueP: "#e6eff7",
        darkBlueP: "#173C56",
        grayP: "#5B5B5B",
      },
      backgroundImage: (theme) => ({
        path: "url('../src/assets/path.png')",
        path2: "url('../src/assets/path2.png')",
        dots: "url('../src/assets/dots.png')",
      }),
    },
  },
  plugins: [],
};
