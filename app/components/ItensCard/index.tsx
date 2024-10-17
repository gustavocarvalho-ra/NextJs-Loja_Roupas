"use client"

import pro from "../../data/pro.json"

import { Conte } from "./styles";

import Link from "next/link";
import Image from "next/image";


export default function ItensCard () {
  let produtos = [...pro];

  return (
    <Conte>
      <div className="section">
        {produtos
        .sort(() => Math.random() - 0.5)
        .slice(0, 5)
        .map(item => (
          <Link href={`/produtos/${item.id}`}>
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
    </Conte>
  )
}