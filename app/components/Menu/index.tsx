import Link from "next/link";
import { Mn } from "./styles";

export default function Menu() {
  return (
    <Mn>
      <div className="menu">
        <h1 style={{display: "flex", justifyContent: "center"}}>Menu Principal</h1>
        <Link style={{color: "blue"}} href={"../produtos/all"}>Todos os Produtos</Link>
        <Link href={"../produtos/jaquetas"}>Jaquetas</Link>
        <Link href={"../produtos/camisa"}>Camisetas</Link>
        <Link href={"../produtos/calcas"}>Calças</Link>
        <Link href={"../produtos/tenis"}>Tênis</Link>
        <Link href={"../produtos/bones"}>Bonés e Buckets</Link>
        <Link href={"../produtos/meias"}>Meias</Link>
        <Link href={"../produtos/mochilas"}>Mochilas</Link>
        <Link href={"../produtos/ace"}>Acessórios</Link>
        <Link href={"../produtos/bags"}>Bags</Link>
      </div>
    </Mn>
  )
}