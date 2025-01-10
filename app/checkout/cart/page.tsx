"use client"

import Header from "../../components/Header"

import { useState, useEffect } from "react";
import { useShoppingCart } from "../../contexts/useShoppingCart";

import Image from "next/image"

import "./style.css"
import { FaTrash } from "react-icons/fa";

export default function Cart () {

  const {
    listShoppingCart,
    handleRemoveProductShopping,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    notification,
  } = useShoppingCart();

  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cartCash = listShoppingCart.reduce((acc, item):number => acc + item.price * item.quantity, 0);
    setTotal(cartCash);
  }, [listShoppingCart]);

  const SkeletonLoader = () => (
    <div className="skeleton">
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <div className="skeleton-description">
          <div className="skeleton-line"></div>
          <div className="skeleton-line short"></div>
        </div>
        <div className="skeleton-btns">
          <div className="skeleton-circle"></div>
          <div className="skeleton-circle"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="body">
        <div className="main">
          <h1 className="titleCart">Meu carrinho</h1>
          <div className="cart">
            {isLoading ? (
              <>
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </>
            ) : listShoppingCart.length > 0 ? (
                <>
                  <div className="totalCart">
                    <h3 className="st">Produto</h3>
                    <h3>Quantidade </h3>
                    <h3 className="priceTt">Total: <span>R${total.toFixed(2)}</span></h3>
                  </div>
                  <div className="container">
                    {listShoppingCart.map((item) => (
                      <div key={item.id} className="card">
                        <div className="image">
                          <Image className="img" src={item.photo} alt={item.name} width={120} height={120}/>
                        </div>

                        <div className="description">
                          <h4>{item.name}</h4>
                          <div className="price">
                            <h5>R$ {item.price}</h5>
                            <span>R$ {Math.floor(item.price * item.des + item.price)},00 </span>
                          </div>
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
                  <h1>O carrinho está vazio.</h1>
                    <Image src={"/empty-cart.png"} alt="Imagem do carrinho" width={250} height={250}/>
                </div>
              )}
          </div>

          {notification && (
            <div className="aviso">
              <p>{notification}</p>
            </div>
          )}
          
        </div>
      </div>
    </>
  )
}