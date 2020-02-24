// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ["@babel/preset-env", "babel-preset-expo"],
//     plugins: ["@babel/plugin-proposal-class-properties"]
//   };
// };
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
