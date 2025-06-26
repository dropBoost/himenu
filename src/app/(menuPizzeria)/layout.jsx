import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function LayoutMenuPizzeria ({ children }) {

  const linkNavigazione = [
    {nome:'classiche',link:'/classiche'},
    {nome:'le Speciali', link:'/le-speciali'},
    {nome:'Scialò Edition', link:'/scialo-edition'},
  ]

  return (
    <>
        <div className="flex flex-col justify-center items-center rounded bg-red-700 h-screen w-screen">
            <div className="w-[100vw] h-[6vh] border-b border-white">
              <Navbar logo={"/logoPizza-white.png"} background={"bg-neutral-900"} link={linkNavigazione}/>
            </div>
            <div className="flex w-[80vw] flex-1 bg-stone-100 justify-start items-start overflow-auto">
              {children}
            </div>
            <div className="w-[100vw] h-[6vh] flex justify-center items-center border-t bg-white border-white overflow-auto">
              <Footer/>
            </div>
        </div>
    </>
  );
}