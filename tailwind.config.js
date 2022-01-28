module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "login-bg":
          "url('http://demo.ovathemes.com/cryptlight/wp-content/uploads/2021/08/ilustrator.png')",
        "about-bg": "url('https://i.hizliresim.com/f0jbyo2.png')",
        "home-image":
          "url('https://uploads-ssl.webflow.com/61e6f7c57d32bad945e87f67/61e933188821f3410b5ac253_ezgif.com-gif-maker.gif')",
        "features-image": "url('https://i.hizliresim.com/1yzep49.png')",
      }),
    },
  },
  plugins: [],
};
