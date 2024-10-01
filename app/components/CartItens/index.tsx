import { CartI } from "./styles";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function CartItens({isOpen, onClose}: ModalProps) {
  
  if (!isOpen) return null;

  return (

    <CartI>
      <div className="image" style={{pointerEvents: "none"}}/>
      
    </CartI>
  )
}