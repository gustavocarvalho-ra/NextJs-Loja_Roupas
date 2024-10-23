import type { AppProps } from "next/app";
import { CartProvider } from "./contexts"
import "../globals.css"
import "normalize.css";

<time dateTime="2016-10-25" suppressHydrationWarning />


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}