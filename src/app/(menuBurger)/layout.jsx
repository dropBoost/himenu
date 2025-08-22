import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";

export default function LayoutMenuBurger ({ children }) {



  return (
    <>
        <div className="flex flex-col justify-center items-center rounded bg-brand-500 h-screen w-screen">
            <div className="flex flex-row items-center justify-between w-[100vw] h-[10vh] border-b border-white bg-brand-500 p-5">
              <div className="">
              <Image src={"/logo-white.png"} width={70} height={40} alt={"logo"}/>
              </div>
              <Link href={"/pizzeria"}>
                <div className="text-xs">
                  <span className="bg-neutral-100 py-1 px-2 rounded-lg">VAI AL MENU PIZZERIA</span>
                </div>
              </Link>
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