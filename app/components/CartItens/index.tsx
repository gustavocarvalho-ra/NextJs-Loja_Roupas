import { useState, useEffect } from "react";

import { CartI } from "./styles";
import { products } from "@/app/types/products";
import { useShoppingCart } from "@/app/contexts/useShoppingCart";
import Image from "next/image";

import { FaTrash } from "react-icons/fa";

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
            <div className="image">
              <Image className="img" src={item.photo} alt="Imagem do produto" width={60} height={60}/>
            </div>

            <div className="description">
              <h4>{item.name}</h4>
              <h5>{item.price}</h5>
            </div>

            <div className="btn">
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>

            <div className="close">
              <button onClick={() => handleRemoveProductShopping(item)}><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>
    </CartI>
  )
}