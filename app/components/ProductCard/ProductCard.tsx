"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  photo: string;
  price: number;
  des: number;
  discountLabel?: string;
}

export default function ProductCard({
  id,
  name,
  photo,
  price,
  des,
  discountLabel = "20% off",
}: ProductCardProps) {
  const [ isLoading, setIsLoading ] = useState(true);

  return (
    <Link href={`/produtos/${id}`} className="card">
      <button className="btd">{discountLabel}</button>
      <div className="ft">
        {isLoading && (
          <div style={{
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
            width: "100%",
            height: "100%",
            animation: "pulse 1.5s infinite",
          }}
          ></div>
        )}
        <Image
          src={photo}
          alt={`Imagem do produto: ${name}`}
          sizes="100vh"
          width={180}
          height={210}
          style={{ borderRadius: "8px", marginTop: "4px" }}
          loading="lazy"
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <div className="nis" style={{ display: "flex", justifyContent: "space-between" }}>
          <p>R$ {price}</p>
          <span className="var">R$ {Math.floor(price * des + price)}</span>
        </div>
      </div>
    </Link>
  );
}