// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1a1b26',
          light: '#2a2b36'
        },
        accent: {
          blue: '#7aa2f7',
          green: '#9ece6a',
          red: '#f7768e'
        }
      }
    }
  },
  plugins: []
};
