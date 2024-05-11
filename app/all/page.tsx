"use client"

import pro from "../data/pro.json"
import Header from "@/app/components/Header"
import Menu from "../components/Menu";

import Image from "next/image";
import { Al } from "./styles";


export default function Test () {
  let produtos = [...pro];

  return (
    <>
      <Header/>
      
      <Al>
        <Menu/>
        
        <div className="cards">
          <div style={{width: "100%", height: "50px", marginBottom: "1em"}}>
            <h1 className="ti">Todos os produtos</h1>
          </div>

          {produtos
          .sort(() => Math.random() - 0.5)
          .map(item => (
            // eslint-disable-next-line react/jsx-key
            <div className="card">
              <Image src={item.photo} alt="test" width={180} height={210} style={{backgroundSize: "cover", borderRadius: "8px"}}/>
              <div className="info">
                <h1 key={item.id}>{item.name}</h1>
                <p key={item.id}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Al>
    </>
  )
}