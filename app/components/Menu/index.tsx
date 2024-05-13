import Link from "next/link";
import { Mn } from "./styles";



export default function Menu() {
  return (
    <Mn>
      <div className="menu">
        <h1 style={{display: "flex", justifyContent: "center"}}>Menu Principal</h1>
        <Link style={{color: "blue"}} href={"../pages/all"}>Todos os Produtos</Link>
        <Link href={"../pages/jaquetas"}>Jaquetas</Link>
        <Link href={"../pages/camisa"}>Camisetas</Link>
        <Link href={"../pages/calcas"}>Calças</Link>
        <Link href={"../pages/tenis"}>Tênis</Link>
      </div>
    </Mn>
  )
}