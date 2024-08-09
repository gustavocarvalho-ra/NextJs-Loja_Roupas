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
  handleIncreaseQauntity: (productId: number) => void;
  handleRemoveProductShopping: (productId: number) => void;
}

const UseShoppingCartDataContext = createContext({} as UseShoppingCartData);

const [listShoppingCart, setListShoppingCart] = useState<products[]> ([]);