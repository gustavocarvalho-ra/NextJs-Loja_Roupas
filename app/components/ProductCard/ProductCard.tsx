"use client";

import Image from "next/image";
import Link from "next/link";

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
  return (
    <Link href={`/produtos/${id}`} className="card">
      <button className="btd">{discountLabel}</button>
      <div className="ft">
        <Image
          src={photo}
          alt={`Imagem do produto: ${name}`}
          sizes="100vh"
          width={180}
          height={210}
          style={{ borderRadius: "8px", marginTop: "4px" }}
          loading="lazy"
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