"use client"

import pro from "../../data/pro.json"
import Header from "@/app/components/Header"
import Menu from "../../components/Menu";

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
                <button className="btd">20% off</button>
              <div className="ft">
                <Image src={item.photo}  alt="test" sizes="100vh" width={180} height={210} style={{borderRadius: "8px", marginTop: "4px"}}/>
              </div>
              <div className="info">
                <h1 key={item.name}>{item.name}</h1>
                <div className="nis" style={{display: "flex"}}>
                  <p key={item.price}>R$ {item.price}</p>
                  <span className="var" key={item.des}>{item.price * item.des + item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Al>
    </>
  )
}