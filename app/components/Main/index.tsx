import Link from "next/link";

import { Man, AllOff } from "./styles"

export default function Main() {
  return (
    <Man>
      <div className="section">
        <AllOff>Todos os itens com 20% de desconto!</AllOff>
        <h1>Coleções</h1>
        <div className="cards">
          <Link className="clas" href="/produtos/jaquetas">Jaquetas</Link>
          <Link className="cami" href="/produtos/camisa">Camisetas</Link>
          <Link className="cas" href="/produtos/calcas">Calças</Link>
          <Link className="tes" href="/produtos/tenis">Tênis</Link>
          <Link className="bon" href="/produtos/bones">Bonés e Buckets</Link>
          <Link className="mei" href="/produtos/meias">Meias</Link>
          <Link className="moc" href="/produtos/mochilas">Mochilas</Link>
          <Link className="ace" href="/produtos/ace">Acessórios</Link>
          <Link className="bag" href="/produtos/bags">Bags</Link>
        </div>
      </div>
    </Man>
  )
}