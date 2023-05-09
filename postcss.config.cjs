module.exports = {
  plugins: [
    require("tailwindcss")({
      config: require.resolve("./tailwind.config.cjs"),
    }),
    require("autoprefixer")({}),
    require("cssnano")({}),
  ],
};
