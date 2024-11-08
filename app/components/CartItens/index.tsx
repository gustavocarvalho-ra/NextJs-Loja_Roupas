import { useState, useEffect } from "react";

import { CartI } from "./styles";
import { products } from "@/app/types/products";
import { useShoppingCart } from "@/app/contexts/useShoppingCart";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function CartItens({isOpen, onClose}: ModalProps) {  
  if (!isOpen) return null;

  const {
    listShoppingCart,
    handleRemoveProductShopping,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
  } = useShoppingCart();

  const [items, setItems] = useState<products[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedItems = localStorage.getItem("listShoppingCartStorage");

      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
    }
  }, [])

  return (

    <CartI>
      <div className="image" style={{pointerEvents: "none"}}/>

      <div className="container">
        {listShoppingCart.map((item, index) => (
          <div key={index} className="card">
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <div className="btn">
              <button onClick={() => handleRemoveProductShopping(item)}>X</button>
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </CartI>
  )
}