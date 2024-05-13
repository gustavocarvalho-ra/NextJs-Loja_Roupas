import { A } from "./styles"

import Link from "next/link";

import { IoMdSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";

export default function Header() {
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
                  <a href="/">Rastrear pedido</a>
                </button>
              </div>
            </div>
            <div>
              <button className="Car">Carrinho</button>
            </div>
          </div>
        </div>


        <div className="nav">
          <Link href={"/pages/all"}>Todos os produtos</Link>
          <Link href={"/pages/colecoes"}>Categorias</Link>
          <a href="/">Compra Segura</a>
          <a href="/">Contato</a>
          <a href="/">Perguntas frequentes</a>
        </div>
      </div>
      <hr className="hrB"/>
    </A>
  )
}