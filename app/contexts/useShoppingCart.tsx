"use client"

import { 
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

import { products } from "@/app/types/products";

type UseShoppingCartProps = {
  children: ReactNode;
};

type UseShoppingCartData = {
  listShoppingCart: products[];
  handleAddProductShopping: (product: products) => void;
  handleDecreaseQuantity: (productId: number) => void;
  handleIncreaseQuantity: (productId: number) => void;
  handleRemoveProductShopping: (productId: number) => void;
}



const UseShoppingCartContext = createContext({} as UseShoppingCartData);

export const UseShoppingCartProvider = ({ children }: UseShoppingCartProps) => {

  const [listShoppingCart, setListShoppingCart] = useState<products[]> ([]);

  useEffect(() => {
    const listShoppingCartStorage = localStorage.getItem(
      "listShoppingCartStorage",
    );
    if (listShoppingCartStorage) {
      setListShoppingCart(JSON.parse(listShoppingCartStorage));
    }
  }, []);


  const handleAddProductShopping = (product: products) => {
    console.log(listShoppingCart)

    const existingProductIndex = listShoppingCart.findIndex(
      (item) => item.id === product.id,
    );
  
    let updateListShoppingCart;

    if (existingProductIndex === -1) {
      updateListShoppingCart = [
        ...listShoppingCart,
        { ...product, quantity: 1 }
      ];
      console.log("Produto adicionado ao carrinho.", product);
    } else {
      updateListShoppingCart = listShoppingCart.map((item, index) =>
        index === existingProductIndex ? {...item, quantity: item.quantity + 1} : item);
    };

    console.log("Quantidade incrementada para o produto: ", product);
  }

  const handleRemoveProductShopping = (productId: number) => {
    const updateListShoppingCart = listShoppingCart.filter(
      (product) => product.id !== productId,
    );
    setListShoppingCart(updateListShoppingCart);
    localStorage.setItem(
      "listShoppingCartStorage",
      JSON.stringify(updateListShoppingCart),
    );
    //test
  };

  const handleDecreaseQuantity = (productId: number) => {
    const updatedListShoppingCart = listShoppingCart
      .map((product) => {
        if (product.id === productId && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1};
        }
        return product;
      })
      .filter((product) => product.quantity > 0);

    setListShoppingCart(updatedListShoppingCart);
    localStorage.setItem(
      "listShoppingCartStorage",
      JSON.stringify(updatedListShoppingCart),
    );
  };

  const handleIncreaseQuantity = (productId: number) => {
    const updatedListShoppingCart = listShoppingCart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1}
      }
      return product;
    });
    setListShoppingCart(updatedListShoppingCart);
    localStorage.setItem(
      "listShoppingCartStorage",
      JSON.stringify(updatedListShoppingCart),
    );
  };

  return (
    <UseShoppingCartContext.Provider
      value={{
        listShoppingCart,
        handleAddProductShopping,
        handleRemoveProductShopping,
        handleDecreaseQuantity,
        handleIncreaseQuantity,
      }}
    >
      {children}
    </UseShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  const context = useContext(UseShoppingCartContext);

  if(!context) {
    throw new Error("useShoppingCart must be used within a UseShoppingCartProvider");
  }

  return context;
}
