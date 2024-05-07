"use client"

import { Car } from "./styles";

import pro from "../data/pro.json"
import Header from "@/app/components/Header"

import Image from "next/image";


export default function Test () {
  let produtos = [...pro];

  return (
    <>
    <Header/>
    <Car>
      <h1 className="ti">Calças</h1>
      <div className="cards">
        {produtos
        .filter(item => item.type === "calça")
        .map(item => (
          // eslint-disable-next-line react/jsx-key
          <div className="card">
            <h1 key={item.name}>{item.name}</h1>
            <h2 key={item.price}>{item.price}</h2>
            <Image src={item.photo} alt="test" width={235} height={280} style={{backgroundSize: "auto", backgroundRepeat: "no-repeat"}}/>
          </div>
        ))}
      </div>
    </Car>

    </>
  )
}
