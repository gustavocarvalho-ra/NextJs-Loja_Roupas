"use client"

import { Bag } from "./styles";

import pro from "../../data/pro.json"
import Header from "@/app/components/Header"
import Menu from "../../components/Menu";

import Image from "next/image";


export default function Test () {
  let produtos = [...pro];

  return (
    <>
      <Header/>
      
      <Bag>
        <Menu/>
        
        <div className="cards">
          <div style={{width: "100%", height: "50px", marginBottom: "1em"}}>
            <h1 className="ti">Calças</h1>
          </div>

          {produtos
          .filter(item => item.type === "calça")
          .map(item => (
            // eslint-disable-next-line react/jsx-key
            <div className="card">
              <div className="ft">
                <Image src={item.photo}  alt="test" sizes="100vh" width={180} height={210} style={{borderRadius: "8px"}}/>
              </div>
              <div className="info">
                <h1 key={item.name}>{item.name}</h1>
                <p key={item.price}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Bag>
    </>
  )
}