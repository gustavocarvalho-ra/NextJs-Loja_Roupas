import { useState, useEffect } from "react";

import { CartI } from "./styles";
import { products } from "@/app/types/products";
import { useShoppingCart } from "@/app/contexts/useShoppingCart";
import Image from "next/image";

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
      <div className="container">
        {listShoppingCart.map((item, index) => (
          <div key={index} className="card">
            <Image className="image" src={item.photo} alt="Imagem do produto" width={60} height={60}/>
            <div className="description">
              <h5>{item.name}</h5>
              <h6>{item.price}</h6>
            </div>
            <div className="btn">
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
            <button className="close" onClick={() => handleRemoveProductShopping(item)}>X</button>
          </div>
        ))}
      </div>
    </CartI>
  )
}