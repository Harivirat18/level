/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1240px",
      },
      colors: {
        primary: {
          red: "#ee5057",
          darkred: "#d53239",
          para: "#898989",
          border: "#ccc",
          white: "#fff",
          gray:"#f4f4f4",
        },
}
    },
  },
  plugins: [],
}

