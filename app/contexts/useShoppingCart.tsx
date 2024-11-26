"use client"

import { 
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

import { products } from "@/app/types/products";


interface UseShoppingCartData {
  listShoppingCart: products[];
  handleAddProductShopping: (product: products) => void;
  handleDecreaseQuantity: (productId: number) => void;
  handleIncreaseQuantity: (productId: number) => void;
  handleRemoveProductShopping: (product: products) => void;
  notification: string | null;
  clearNotification: () => void;
}


const UseShoppingCartContext = createContext<UseShoppingCartData | undefined>(undefined);

interface UseShoppingCartProps {
  children: ReactNode;
};

export const UseShoppingCartProvider: React.FC<UseShoppingCartProps> = ({ children }) => {
  const [listShoppingCart, setListShoppingCart] = useState<products[]> ([]);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const listShoppingCartStorage = localStorage.getItem(
      "listShoppingCartStorage",
    );
    if (listShoppingCartStorage) {
      setListShoppingCart(JSON.parse(listShoppingCartStorage));
    }
  }, []);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() setNotification(null), 3000);
  }

  const handleAddProductShopping = (product: products) => {
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
      console.log("Quantidade incrementada para o produto: ", product);
    };

    setListShoppingCart(updateListShoppingCart);
    localStorage.setItem(
      "listShoppingCartStorage",
      JSON.stringify(updateListShoppingCart),
    );
  };

  const handleRemoveProductShopping = (product: products) => {
    const updateListShoppingCart = listShoppingCart.filter(
      (item) => item.id !== product.id
    );
    console.log("Produto adicionado ao carrinho.", product);
    
    setListShoppingCart(updateListShoppingCart);
    localStorage.setItem(
      "listShoppingCartStorage",
      JSON.stringify(updateListShoppingCart),
    );
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

  const clearNotification = () => setNotification(null);


  const cartContextValue: UseShoppingCartData = {
    listShoppingCart,
    handleAddProductShopping,
    handleRemoveProductShopping,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    notification,
    clearNotification
  };

  return (
    <UseShoppingCartContext.Provider
      value={ cartContextValue }>
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
