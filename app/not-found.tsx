import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main style={{background: "black", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100vw', height: '100vh'}}>
        <div>
          <Image src={"/not.png"} alt="Image 404" width={650} height={650} />
        </div>
        <Link href={'/'} style={{background: '#a9ddef', fontSize: '30px', textDecoration: 'none', color: '#000', borderRadius: '8px'
        }}>Voltar para o menu principal</Link>
      </main>
    
    </>
    
  );
}