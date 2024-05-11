import Link from "next/link";
import { Mn } from "./styles";



export default function Menu() {
  return (
    <Mn>
      <div className="menu">
        <h1 style={{display: "flex", justifyContent: "center"}}>Menu Principal</h1>
        <Link href={"/all"}>Todos os Produtos</Link>
      </div>
    </Mn>
  )
}