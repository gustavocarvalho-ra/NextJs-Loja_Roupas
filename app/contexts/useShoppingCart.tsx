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
      "listSgoppingCartStorage",
    );
    if (listShoppingCartStorage) {
      setListShoppingCart(JSON.parse(listShoppingCartStorage));
    }
  }, []);


  const handleAddProductShopping = (product: products) => {
    const existingProductIndex = listShoppingCart.findIndex(
      (item) => item.id === product.id,
    );
  
    if (existingProductIndex !== -1) {
      const updateListShoppingCart = [...listShoppingCart];
      updateListShoppingCart[existingProductIndex].quantity += 1;
  

      setListShoppingCart(updateListShoppingCart);
      localStorage.setItem(
        "listShoppingCartStorage",
        JSON.stringify(updateListShoppingCart),
      );
      //test
    }
  };

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
    localStorage.setitem(
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
      "listShoppingcartStorage",
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


