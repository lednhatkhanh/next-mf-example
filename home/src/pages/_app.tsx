import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async () => {
  const variable = 'test1';
  await import('../test.json');
  await import(`../${variable}.json`);
  return {};
}

export default MyApp;
