import { ReactNode, createContext } from "react"

interface ProvidersProps {
  children: ReactNode;
}

export const CartContext = createContext ({})

export const CartProvider = ({ children }: ProvidersProps) => {
  const helloWord = "olá mundo"

  return ( 
    <CartContext.Provider value={helloWord}> {children} </CartContext.Provider>
  )
}