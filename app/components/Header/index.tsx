import { A } from "./styles"

import Link from "next/link";
import React from "react";

import { IoMdSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

export default function Header() {
  const [isCartI, setCartI] = React.useState(false)

  console.log("cart", isCartI)

  const handleCart = () => {
    setCartI((prevState) => !prevState)
  }


  return (
    <A>
      <hr className="hrA"/>
      <div className="section">
        <div className="fis">
          <Link href="../" style={{textDecoration: "none"}}><p className="Log">Street <span className="Los">Tech</span></p></Link>
          
          <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row-reverse'}}>
            <input className="lup" placeholder="O que está procurando?"></input>
            <button className="btnLup"><IoMdSearch style={{color: 'var(--tex)', fontSize: '25px'}} /></button>
          </div>


          <div className="user">
            <div>
              <p>Olá (user)</p>
              <button className="Us">Minha conta</button>
            </div>
            <div className="Uss">
              <SlLocationPin style={{marginRight: '8px', marginTop: '5px', color: '#fff', fontSize: '1.5em'}}/>
              <div>
                <p>Onde está meu pedido?</p>
                <button className="Ras">
                  Rastrear pedido
                </button>
              </div>
            </div>
            <div>
              <button onClick={handleCart} className="Car">
                <BsCart3 style={{marginRight: '8px', marginTop: '5px', color: '#fff', fontSize: '1.5em'}}/>
                <div>
                  <p>Abrir</p>
                  Carrinho
                </div>
              </button>
            </div>
          </div>
        </div>


        <div className="nav">
          <Link href={"/pages/all"}>Todos os produtos</Link>
          <Link href={"../"}>Coleções</Link>
          <button>Compra Segura</button>
          <button>Contato</button>
          <button>Perguntas frequentes</button>
        </div>
      </div>
      <hr className="hrB"/>
      <div className="na" style={{background: "red"}}>
        <h1>TODOS OS ITENS COM 20% DE DESCONTO!!!</h1>
      </div>
    </A>
  )
}