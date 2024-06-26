import Link from "next/link";

import { Man } from "./styles"


export default function Main() {
  return (
    <Man>
      <div className="section">
        <h1>Coleções</h1>
        <div className="cards">
          <Link className="clas" href="/pages/jaquetas">Jaquetas</Link>
          <Link className="cami" href="/pages/camisa">Camisetas</Link>
          <Link className="cas" href="/pages/calcas">Calças</Link>
          <Link className="tes" href="/pages/tenis">Tênis</Link>
          <Link className="bon" href="/pages/bones">Bonés e Buckets</Link>
          <Link className="mei" href="/pages/meias">Meias</Link>
          <Link className="moc" href="/pages/mochilas">Mochilas</Link>
          <Link className="ace" href="/pages/ace">Acessórios</Link>
          <Link className="bag" href="/pages/bags">Bags</Link>
        </div>
      </div>
    </Man>
  )
}