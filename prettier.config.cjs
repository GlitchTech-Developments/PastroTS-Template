module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  printWidth: 120,
  useTabs: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
