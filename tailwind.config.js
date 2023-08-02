/** @type {import('tailwindcss').Config} */

const colors1 = {
  "two": {
    "1": "#FFFFE0",
    "2": "#FFFF00"
  },
  "four": {
    "1": "#FFE4B5",
    "2": "#FFD700"
  },
  "eight": {
    "1": "#FFDAB9",
    "2": "#FF8C00"
  },
  "sixteen": {
    "1": "#FFC0CB",
    "2": "#FF1493"
  },
  "thirtyTwo": {
    "1": "#FFB6C1",
    "2": "#FF00FF"
  },
  "sixtyFour": {
    "1": "#FFA07A",
    "2": "#FF4500"
  },
  "onetwentyeight": {
    "1": "#FF8C00",
    "2": "#FF0000"
  },
  "twofiftysix": {
    "1": "#FF7F50",
    "2": "#FA8072"
  },
  "fivetwelve": {
    "1": "#FF69B4",
    "2": "#FF1493"
  },
  "tentwentyfour": {
    "1": "#FF1493",
    "2": "#C71585"
  },
  "twentyfortyeight": {
    "1": "#FF00FF",
    "2": "#8B008B"
  },
}

const colors2 = {
  "two": {
    "1": "#FFFF00",
    "2": "#0000FF"
  },
  "four": {
    "1": "#FFA500",
    "2": "#006400"
  },
  "eight": {
    "1": "#FF8C00",
    "2": "#003366"
  },
  "sixteen": {
    "1": "#FF1493",
    "2": "#00BFFF"
  },
  "thirtyTwo": {
    "1": "#FF00FF",
    "2": "#00FFFF"
  },
  "sixtyFour": {
    "1": "#FFD700",
    "2": "#00008B"
  },
  "onetwentyeight": {
    "1": "#FF4500",
    "2": "#006400"
  },
  "twofiftysix": {
    "1": "#DA70D6",
    "2": "#1E90FF"
  },
  "fivetwelve": {
    "1": "#FF69B4",
    "2": "#00CDCD"
  },
  "tentwentyfour": {
    "1": "#FFD700",
    "2": "#000080"
  },
  "twentyfortyeight": {
    "1": "#FFA500",
    "2": "#008B8B"
  },
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: colors2,
    },
  },
  plugins: [],
}
