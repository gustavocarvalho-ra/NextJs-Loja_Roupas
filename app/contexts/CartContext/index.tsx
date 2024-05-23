import { createContext, useState, ReactNode} from "react"
import { products } from "@/app/types/products";

interface ProvidersProps {
  children: ReactNode;
}

export const CartContext = createContext ({})

export const CartProvider = ({ children }: ProvidersProps) => {
  const [isCartI, setCartI] = useState([])

  function addProductToCart(id) {};

  function removeProductToCart(id) {};
  return ( 
    <CartContext.Provider
      value={{isCartI}, addProductToCart, removeProductToCart}}
    >
      {Children}
    </CartContext.Provider>
  );
}