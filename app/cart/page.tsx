"use client"

import Header from "../components/Header"

import { useState, useEffect } from "react";
import { useShoppingCart } from "../contexts/useShoppingCart";

import Link from "next/link";
import Image from "next/image"

import { FaTrash } from "react-icons/fa";
import { CartShop } from "./styles";

export default function Cart () {

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
    <>
      <Header />
      <div>
        <div className="main">
          <h1 className="titleCart">Meu carrinho</h1>
          <div className="cart">
            {listShoppingCart.length > 0 ? (
              <>
                <div className="totalCart">
                  <h3>Produto</h3>
                  <h3>Quantidade </h3>
                  <h3>Total: R${total.toFixed(2)}</h3>
                  {/* <h2>R${total.toFixed(2)}</h2> */}
                </div>
                <div className="container">
                  {listShoppingCart.map((item) => (
                    <div key={item.id} className="card">
                      <div className="image">
                        <Image className="img" src={item.photo} alt={item.name} width={120} height={120}/>
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
                </div>
              </>
            ) : (
              <div className="emptyCart">
                <h2>O carrinho está vazio.</h2>
                <div>
                  <Image src={"/empty-cart.png"} alt="Imagem do carrinho" width={130} height={130}/>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}