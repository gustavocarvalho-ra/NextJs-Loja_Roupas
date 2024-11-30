import { A } from "./styles"

import Link from "next/link";
import { useState } from "react";

import { IoMdSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

import CartItens from "../CartItens";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!searchQuery) {
      setResults([]);
      return;
    }

    const response = await fetch(`/produtos?q=${encodeURIComponent(searchQuery)}`)
    const data = await response.json();
    setResults(data);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen)
  };

  return (
    <A>
      <hr className="hrA"/>
      <div className="section">
        <div className="fis">
          <Link href="../" style={{textDecoration: "none"}}><p className="Log">Street <span className="Los">Tech</span></p></Link>
          
          <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row-reverse'}}>
            {/* <form className="sear" onSubmit={handleSearch}> */}
              <input
                className="lup" 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="O que está procurando?"
              />
              <button className="btnLup" onClick={handleSearch}>
                <IoMdSearch style={{color: 'var(--tex)', fontSize: '25px'}} />
              </button>
            {/* </form> */}
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
              <button onClick={handleOpenModal} className="Car">
                <BsCart3 style={{marginRight: '8px', marginTop: '5px', color: '#fff', fontSize: '1.5em'}}/>
                <div>
                  <p>Abrir</p>
                  Carrinho
                </div>
              </button>
            </div>
            <CartItens isOpen={modalIsOpen} onClose={handleOpenModal}/>
          </div>
        </div>

        <div className="nav">
          <Link href={"/produtos/all"}>Todos os produtos</Link>
          <Link href={"../"}>Coleções</Link>
          <button>Compra Segura</button>
          <button>Contato</button>
          <button>Perguntas frequentes</button>
        </div>
      </div>
      <hr className="hrB"/>

      {/* {results.length > 0 && (
        <div className="search-results">
          <ul>
            {results.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price}
              </li>
            ))}
          </ul>
        </div>
      )} */}

      {/* <div className="na">
        <h1>TODOS OS ITENS COM 20% DE DESCONTO!!!</h1>
      </div> */}
    </A>
  )
}