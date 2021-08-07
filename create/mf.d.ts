declare module "home/Header" {
  import * as React from "react";

  const Header: React.ComponentType;

  export { Header };
}

declare module "home/Footer" {
  import * as React from "react";

  const Footer: React.ComponentType;

  export { Footer };
}

interface Window {
  home: ModuleLoader;
}

type ModuleLoader = {
  get: (path: string) => Promise<() => Record<string, React.ComponentType>>;
};
