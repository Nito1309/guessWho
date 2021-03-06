module.exports = {
  content: [
    "index.html",
    "./src/**/*.{jsx,js,ts,tsx}",
    "./components/**/*.{html,jsx}"
  ],
  theme: {
    backgroundImage: {
      'background-menu': "url('assets/img/background-menu.png')",
      'background-join': "url('assets/img/background-join.png')",
      'background-leaderboard': "url('assets/img/background-leaderboard.png')",
      'background-create-game': "url('assets/img/background-create-game.png')",
      'background-game': "url('assets/img/background-game.png')",
      'background-login': "url('assets/img/background-login.png')",
      'background-card': "url('assets/img/background-card.png')",
    }
  },
  plugins: [],
}
