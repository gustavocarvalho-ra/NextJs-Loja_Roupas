"use client"

import { Container } from "../styles";

import pro from "../../data/pro.json"
import Header from "@/app/components/Header"
import Menu from "../../components/Menu";

import Image from "next/image";


export default function Test () {
  let produtos = [...pro];

  return (
    <>
      <Header/>
      
      <Container>
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
                <button className="btd">20% off</button>
              <div className="ft">
                <Image src={item.photo}  alt="test" sizes="100vh" width={180} height={210} style={{borderRadius: "8px", marginTop: "4px"}}/>
              </div>
              <div className="info">
                <h1 key={item.name}>{item.name}</h1>
              <div className="nis" style={{display: "flex", justifyContent: "space-between"}}>
                  <p key={item.price}>R$ {item.price}</p>
                  <span className="var" key={item.des}>R$ {Math.floor(item.price * item.des + item.price)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}