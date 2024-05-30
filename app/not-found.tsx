import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <main style={{background: "black", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100vw', height: '100vh'}}>
        <div>
          <Image src={"/not.png"} alt="Image 404" width={500} height={500} />
        </div>
        <h1>Ops, página não encontradaqqqqqqqqqq</h1>


      </main>
    
    </>
    
  );
}