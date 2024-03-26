/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js, ts, jsx, tsx",
    "./pages/**/*.{js, ts, jsx, tsx",
    "./components/**/*.{js, ts, jsx, tsx",
  ],
  theme: {
    // ...
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
  mode: "jit",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
