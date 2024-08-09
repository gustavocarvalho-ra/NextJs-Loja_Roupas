import { 
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
 } from "react";

 import { products } from "@/app/types/products";

 type UseShoppingCartProps = {
  children: ReactNode;
 }