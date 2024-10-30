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

      {/* listShoppingCart.map((item) => (
        <div key={item.id}>
          <p>{item.nome}</p>
          <p>Quantidade: {item.quantidade}</p>
        </div>
      )); */}
    </CartI>
  )
}