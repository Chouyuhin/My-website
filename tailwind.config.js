const theme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: [
    "content/**/*.md",
    "layouts/**/*.html",
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  safelist: ['pagination', 'page-item'],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        paper: "#f7f6f2",
        ink: "#141210",
        shu: {
          DEFAULT: "#a63a2b",
          light: "#c96a4f",
        },
      },
      backgroundColor: (theme) => ({
        darkest: theme(`colors.stone.950`),
        darker: theme(`colors.stone.900`),
        dark: theme(`colors.stone.800`),
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "code::before": false,
            "code::after": false,
            a: {
              color: theme(`colors.stone.800`),
              textDecoration: "none",
              "&:hover": {
                color: theme(`colors.black`),
                textDecoration: "underline",
              },
            },
            pre: {
              backgroundColor: theme(`colors.stone.100`),
              color: theme(`colors.stone.700`),
            },
            code: { color: theme(`colors.stone.700`) },
          },
        },
        invert: {
          css: {
            color: theme(`colors.stone.300`),
            a: {
              color: theme(`colors.stone.100`),
              "&:hover": { color: theme(`colors.white`) },
            },
            h1: { color: theme(`colors.stone.100`) },
            h2: { color: theme(`colors.stone.100`) },
            h3: { color: theme(`colors.stone.100`) },
            h4: { color: theme(`colors.stone.100`) },
            h5: { color: theme(`colors.stone.100`) },
            h6: { color: theme(`colors.stone.100`) },
            strong: { color: theme(`colors.stone.100`) },
            td: { color: theme(`colors.stone.300`) },
            blockquote: { color: theme(`colors.stone.400`) },
            pre: {
              backgroundColor: theme(`colors.stone.900`),
            },
            code: { color: theme(`colors.stone.300`) },
          },
        },
      }),
    },
  },
  variants: { typography: ["invert"], extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
