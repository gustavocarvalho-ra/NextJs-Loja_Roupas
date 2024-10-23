import type { AppProps } from "next/app";
import "../globals.css"
import "normalize.css";
import { UseShoppingCartProvider } from "./contexts/useShoppingCart";

<time dateTime="2016-10-25" suppressHydrationWarning />


export default function App({ Component, pageProps }: AppProps) {
  return (
    <UseShoppingCartProvider>
      <Component {...pageProps} />
    </UseShoppingCartProvider>
  );
}