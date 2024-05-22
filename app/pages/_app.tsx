import type { AppProps } from "next/app";
import { CartProvider } from "../contexts/CartContext"
import "normalize.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}