import Link from "next/link";
import Footer from "../components/footer";
import Image from "next/image";

export default function LayoutMenuPizzeria ({ children }) {

  return (
    <>
    <div className="flex flex-col justify-center items-center rounded bg-red-700 h-screen w-screen">
        <div className="flex flex-row items-center justify-between w-[100vw] h-[10vh] border-b border-white bg-neutral-950 p-5">
          <div className="">
          <Image src={"/logoPizza-white.png"} width={70} height={40} alt={"logo"}/>
          </div>
          <div className="text-xs">
            <Link href={"/smascialo"}>
                <span className="bg-neutral-100 py-1 px-2 rounded-lg">VAI AL MENU BURGER</span>
            </Link>    
          </div>
        </div>
        <div className="flex md:w-[70vw] w-[95vw] p-5 h-[84vh] bg-stone-100 justify-start items-start overflow-hidden">
          {children}
        </div>
        <div className="w-[100vw] h-[6vh] flex justify-center items-center border-t bg-white border-white overflow-auto">
          <Footer/>
        </div>
    </div>
    </>
  );
}