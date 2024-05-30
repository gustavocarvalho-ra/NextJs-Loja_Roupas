import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div>
        <Image src="/public/not.png" alt="Image 404" width={500} height={500} />
      </div>
      <h1>Ops, página não encontradaqqqqqqqqqq</h1>
    
    </>
    
  );
}