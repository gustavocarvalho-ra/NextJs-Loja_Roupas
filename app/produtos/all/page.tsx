"use client"

import pro from "../../data/pro.json"
import Menu from "../../components/Menu";
import Header from "@/app/components/Header"

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import { Al } from "./styles";


export default function Test () {
  let produtos = [...pro];

  // const params = useParams

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
            <Link href={{
              pathname: "../produtos/id",
              query: {item: item.name}
            }}>
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
            </Link>
          ))}
        </div>
      </Al>
    </>
  )
}