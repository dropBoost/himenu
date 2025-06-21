import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex md:flex-row flex-col">
      <Link href="/burger" >
      <div className="flex justify-center flex-col items-center md:h-screen h-[50vh] md:w-[50vw] md-screen bg-white text-white">
        <Image src="/logo-dark.png" width={150} height={600} quality={10} alt="logo smascialò"/>
        <span className="text-xl mt-5 bg-brand-400 hover:bg-white hover:border-2 hover:border-brand-400 hover:text-brand-400 ps-3 pe-3 text transition">ENTRA</span>
      </div>
      </Link>
      <Link href="/pizzeria" >
      <div className="flex justify-center flex-col items-center md:h-screen h-[50vh] md:w-[50vw] md-screen bg-red-700 text-red-700">
        <Image src="/logoPizza-white.png" width={150} height={600} quality={10} alt="logo pizzeria"/>
        <span className="text-xl mt-5 bg-white hover:bg-red-700 hover:border-2 hover:border-white hover:text-white ps-3 pe-3 text transition">ENTRA</span>
      </div>
      </Link>
    </div>
    </>
  );
}
