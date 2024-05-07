"use client"

import Image from "next/image";
import Header from "@/app/components/Header";
import Main from "./components/Main";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <Header/>
      <Main />
      <Link href="/produtos/Calcas">Calças</Link>
    </>

  );
}
