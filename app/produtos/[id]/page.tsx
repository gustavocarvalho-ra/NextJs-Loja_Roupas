"use client"

import Header from "@/app/components/Header";
import { useParams } from "next/navigation";
import pro from "../../data/pro.json"

export default function Detalhes() {

  const params = useParams();

  console.log(params)

  let produtos = [...pro];

  return (
    <>
      <Header/>
      {/* <h1>test produtosss ##{item.id}</h1> */}
    </>
  );
}
