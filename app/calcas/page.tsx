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
        <div style={{width: "80%", display: "flex",alignItems: "flex-start"}}>
          <h1 className="ti" >Calças</h1>
        </div>
        <div className="cards">
          {produtos
          .filter(item => item.type === "calça")
          .map(item => (
            // eslint-disable-next-line react/jsx-key
            <div className="card">
              <Image src={item.photo} alt="test" width={180} height={210} style={{backgroundSize: "auto", borderRadius: "8px"}}/>
              <div className="info">
                <h1 key={item.name}>{item.name}</h1>
                <p key={item.price}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Car>
    </>
  )
}
