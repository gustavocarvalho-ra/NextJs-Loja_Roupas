"use client"
import React, { useState } from "react";

import Header from "@/app/components/Header";
import Main from "./components/Main";



export default function Home() {

  const [cart, setCart] = useState([])

  return (
    <>
      <Header/>
      <Main />
    </>

  );
}
