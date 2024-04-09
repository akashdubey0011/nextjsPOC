import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import '../styles/banner.css';
// import '../styles/incometax.css';
// import '../styles/taxcalculate.css';
// import '../styles/termscontainer.css';
// import '../styles/faq.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
