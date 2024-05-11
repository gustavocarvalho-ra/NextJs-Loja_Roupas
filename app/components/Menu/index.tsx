import Link from "next/link";
import { Mn } from "./styles";



export default function Menu() {
  return (
    <Mn>
      <div className="menu">
        <Link href={"/all"}>Todos os Produtos</Link>
      </div>
    </Mn>
  )
}