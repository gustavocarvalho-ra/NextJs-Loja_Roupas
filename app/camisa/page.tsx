"use client"

import pro from "../data/pro.json"
import Header from "@/app/components/Header"
import Menu from "../components/Menu";

import Image from "next/image";
import { Cam } from "./style";


export default function Test () {
  let produtos = [...pro];

  return (
    <>
      <Header/>
      
      <Cam>
        <Menu/>
        
        <div className="cards">
          <div style={{width: "100%", height: "50px", marginBottom: "1em"}}>
            <h1 className="ti">Camisas</h1>
          </div>

          {produtos
          .filter(item => item.type === "camisa")
          .map(item => (
            // eslint-disable-next-line react/jsx-key
            <div className="card">
              <Image className="ft" src={item.photo} alt="test" width={180} height={210} style={{ borderRadius: "8px"}}/>
              <div className="info">
                <h1 key={item.name}>{item.name}</h1>
                <p key={item.price}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Cam>
    </>
  )
}