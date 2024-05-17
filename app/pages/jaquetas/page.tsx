"use client"

import { Jaq } from "./styles";

import pro from "../../data/pro.json"
import Header from "@/app/components/Header"
import Menu from "../../components/Menu";

import Image from "next/image";


export default function Test () {
  let produtos = [...pro];

  return (
    <>
      <Header/>
      
      <Jaq>
        <Menu/>
        
        <div className="cards">
          <div style={{width: "100%", height: "50px", marginBottom: "1em"}}>
            <h1 className="ti">Jaquetas</h1>
          </div>

          {produtos
          .filter(item => item.type === "jaqueta")
          .map(item => (
            // eslint-disable-next-line react/jsx-key
            <div className="card">
              <Image src={item.photo} alt="test" width={180} height={210} style={{backgroundSize: "auto", borderRadius: "8px"}}/>
              <div className="info">
                <h1 key={item.name}>{item.name}</h1>
                <p key={item.price}>R$ {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Jaq>
    </>
  )
}