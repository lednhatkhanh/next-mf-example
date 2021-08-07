interface Window {
  create: NextFModule;
  list: VueFModule;
}

type VueFModule = {
  get: (path: string) => Promise<() => { [key: string]: unknown }>;
};

type NextFModule = {
  get: (path: string) => Promise<() => Record<string, React.ComponentType>>;
};
