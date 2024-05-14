"use client"

import pro from "../../data/pro.json"
import Header from "@/app/components/Header"
import Menu from "../../components/Menu";

import Image from "next/image";
import { Bon } from "./styles";


export default function Test () {
  let produtos = [...pro];

  return (
    <>
      <Header/>
      
      <Bon>
        <Menu/>
        
        <div className="cards">
          <div style={{width: "100%", height: "50px", marginBottom: "1em"}}>
            <h1 className="ti">Calças</h1>
          </div>

          {produtos
          .filter(item => item.type === "tenis")
          .map(item => (
            // eslint-disable-next-line react/jsx-key
            <div className="card">
              <Image src={item.photo} alt="test" width={190} height={200} style={{backgroundSize: "auto", borderRadius: "8px"}}/>
              <div className="info">
                <h1 key={item.name}>{item.name}</h1>
                <p key={item.price}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Bon>
    </>
  )
}