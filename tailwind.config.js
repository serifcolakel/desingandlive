module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "partner-food":
          "url('https://uploads-ssl.webflow.com/61e6f7c57d32bad945e87f67/61e933188821f3410b5ac253_ezgif.com-gif-maker.gif')",
        "mobile-app":
          "url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')",
      }),
    },
  },
  plugins: [],
};
