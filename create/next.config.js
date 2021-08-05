const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
  name: "create",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./create": "./src/pages/create.tsx",
    "./pages-map": "./pages-map.ts",
    "./Test": "./src/components/Test.tsx",
  },
  shared: {
    react: {
      requiredVersion: false,
      singleton: true,
    },
  },
})({
  reactStrictMode: true,
  webpack5: true,
  webpack(config, options) {
    const { webpack } = options;

    config.experiments = { topLevelAwait: true };
    config.output.publicPath = "auto";

    config.module.rules.push({
      test: /_app.tsx/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });

    if (options.isServer) {
      Object.assign(config.resolve.alias, {
        create: false,
        home: false,
      });
    } else {
      config.plugins.push(
        new webpack.container.ModuleFederationPlugin({
          remoteType: "var",
          remotes: {
            home: "home",
            create: "create",
          },
          shared: {
            "@module-federation/nextjs-mf/lib/noop": {
              eager: false,
            },
            react: {
              singleton: true,
              eager: true,
              requiredVersion: false,
            },
          },
        }),
      );
    }

    return config;
  },
});
