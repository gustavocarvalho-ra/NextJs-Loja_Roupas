import { useState, useEffect } from "react";

import { CartI } from "./styles";
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

  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const cartCash = listShoppingCart.reduce((acc, item):number => acc + item.price * item.quantity, 0);
    setTotal(cartCash);
  }, [listShoppingCart]);

  return (

    <CartI>
      <div className="container">
        {listShoppingCart.map((item, index) => (
          <div key={item.id} className="card">
            <div className="image">
              <Image className="img" src={item.photo} alt={item.name} width={60} height={60}/>
            </div>

            <div className="description">
              <h4>{item.name}</h4>
              <h5>R$ {item.price}</h5>
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
          <div className="cash">
            <h2>{total.toFixed(2)}</h2>
          </div>
      </div>
    </CartI>
  )
}