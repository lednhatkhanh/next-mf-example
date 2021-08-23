const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
  name: "home",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./Header": "./src/components/Header",
    "./Footer": "./src/components/Footer",
    "./test": "./src/test.json",
  },
  shared: {
    react: {
      // Notice shared are NOT eager here.
      requiredVersion: false,
      singleton: true,
    },
    ["./src/test.json"]: {
      singleton: false,
    },
  },
})({
  reactStrictMode: true,
  webpack5: true,
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    const { webpack } = options;

    config.module.rules.push({
      test: /_app.tsx/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });

    config.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        remoteType: "var",
        remotes: {
          home: "home",
          create: "create",
          list: "list",
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
          ["./src/test.json"]: {
            singleton: false,
          },
        },
      }),
    );

    return config;
  },
});
