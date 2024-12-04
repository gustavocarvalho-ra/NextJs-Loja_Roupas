import { A } from "./styles"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"

import { IoMdSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

import CartItens from "../CartItens";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  function normalizeString(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    const normalizedQuery = normalizeString(searchQuery);
    router.push(`/search?q=${encodeURIComponent(normalizedQuery)}`);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key=== 'Enter') {
      handleSearch()
    }
  }

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
          
          <div className="search">
            <input
              className="lup" 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="O que está procurando?"
            />
            <button className="btnLup" onClick={handleSearch}>
              <IoMdSearch style={{color: 'var(--tex)', fontSize: '25px'}} />
            </button>
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
    </A>
  )
}