
module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-actions"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
// Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader");

    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("babel-preset-gatsby"),
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ];

    // use @babel/plugin-proposal-class-properties for class arrow functions
    config.module.rules[0].use[0].options.plugins = [
      require.resolve("@babel/plugin-proposal-class-properties"),
    ];

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"];
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
        plugins: ["babel-plugin-styled-components"],
      },
    });

    config.resolve.extensions.push(".ts", ".tsx");
    return config;
    // Return the altered config
    return config;
  },
}
