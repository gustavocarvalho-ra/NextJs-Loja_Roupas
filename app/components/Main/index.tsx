import Link from "next/link";

import { Man } from "./styles"


export default function Main() {
  return (
    <Man>
      <div className="section">
        <h1>Coleções</h1>
        <div className="cards">
          <Link className="clas" href="/jaquetas">Jaquetas</Link>
          <a href="">Camisetas</a>
          <Link className="cas" href="/calcas">Calças</Link>
          <a href="">Tênis</a>
          <a href="">Bonés e toucas</a>
          <a href="">Moletons</a>
          <a href="">Meias</a>
          <a href="">Mochilas</a>
          <a href="">Óculos</a>
          <a href="">Bags</a>
        </div>

      </div>
    </Man>

  )
}