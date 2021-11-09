if (process.env.NODE_ENV === "production") {
  module.exports = {
    plugins: {
      autoprefixer: {},
      cssnano: {},
      "rucksack-css": {},
      "postcss-preset-env": {
        browsers: "last 2 versions",
      },
    },
  };
} else {
  module.exports = {
    plugins: {
      autoprefixer: {},
      "rucksack-css": {},
      "postcss-preset-env": {
        browsers: "last 2 versions",
      },
    },
  };
}
