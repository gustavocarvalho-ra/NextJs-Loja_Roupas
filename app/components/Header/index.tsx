import { A } from "./styles"

export default function Header() {
  return (
    <A>
      <hr className="hrA"/>
      <div className="section">
        <div className="fis">
          <p>Street <span>Shop</span></p>
          <a href="/">O que está procurando</a>
          <div className="user">
            <a href="aaaaaaaaa"></a>
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