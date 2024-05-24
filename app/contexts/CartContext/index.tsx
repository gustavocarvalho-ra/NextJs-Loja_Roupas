import { createContext, useState, ReactNode} from "react"
import { products } from "@/app/types/products";

interface ProvidersProps {
  children: ReactNode;
}

export const CartContext = createContext ({})

export const CartProvider = ({ children }: ProvidersProps) => {
  const [isCartI, setCartI] = useState([])

  function addProductToCart(id:number) {
    const copyIsCartI = [...isCartI];

    const item = copyIsCartI.find((product) => product.id === id)

    console.log(item)
  };

  function removeProductToCart(id:number) {};

  return (
    <CartContext.Provider
      value={{isCartI, addProductToCart, removeProductToCart}}
    >
      {children}
    </CartContext.Provider>
  );
}