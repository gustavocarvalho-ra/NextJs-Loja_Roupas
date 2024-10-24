"use client"
import React, { useState } from "react";

import Header from "@/app/components/Header";
import Main from "./components/Main";
import { UseShoppingCartProvider } from "./contexts/useShoppingCart";



export default function Home() {

  const [cart, setCart] = useState([])

  return (
    <>
    <UseShoppingCartProvider>
      <Header/>
      <Main />
    </UseShoppingCartProvider>
    </>

  );
}
