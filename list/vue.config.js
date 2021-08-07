const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

module.exports = {
  publicPath: "http://localhost:3002/",
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "list",
        filename: "remoteEntry.js",
        remotes: {},
        shared: {
          vue: { singleton: true, import: "vue" },
        },
        exposes: {
          "./PostList": "./src/components/PostList",
          "./vue": require.resolve("vue"),
          "./FilterInput": "./src/components/FilterInput",
        },
      }),
    ],
  },
};
