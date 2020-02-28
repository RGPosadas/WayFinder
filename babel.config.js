module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "babel-preset-expo"
  ],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
