"use client"

import Header from "@/app/components/Header";
import { useParams } from "next/navigation";

export default function Id() {

  const params = useParams();

  return (
    <>
      <Header/>
      <h1>test produto {params.name}</h1>
    </>
  );
}
