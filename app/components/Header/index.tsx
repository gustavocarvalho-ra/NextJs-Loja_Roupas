import { A } from "./styles"

import { IoMdSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";

export default function Header() {
  return (
    <A>
      <hr className="hrA"/>
      <div className="section">
        <div className="fis">
          <p className="Log">Street <span className="Los">Shop</span></p>
          <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row-reverse'}}>
            <input className="lup" placeholder="O que está procurando?"></input>
            <button className="btnLup"><IoMdSearch style={{color: 'var(--tex)', fontSize: '25px'}} /></button>
          </div>
          <div className="user">
            <div>
              <p>Olá (user)</p>
              <button className="Us">Minha conta</button>
            </div>
            
            <button className="Ras"><SlLocationPin /><a href="/">Rastrear pedido</a></button>
            <button className="Car">Carrinho</button>
          </div>
        </div>
        <div className="nav">
          <a href="/">Todos os produtos</a>
          <a href="/">Roupas</a>
          <a href="/">Compra Segura</a>
          <a href="/">Contato</a>
          <a href="/">Perguntas frequentes</a>
        </div>
      </div>
      <hr className="hrB"/>
    </A>
  )
}