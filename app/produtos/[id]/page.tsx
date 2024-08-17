"use client"

import Header from "@/app/components/Header";
import { useParams, useSearchParams } from "next/navigation";
import pro from "../../data/pro.json"

export default function Detalhes( {params}: any) {

  const searchParams = useSearchParams();
  const newParam = searchParams.get("item")

  console.log(newParam)

  // const params = useParams();

  // console.log(params)

  let produtos = [...pro];

  return (
    <>
      <Header/>
      <h1>test link ##{newParam}</h1>
    </>
  );
}
