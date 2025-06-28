import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function LayoutMenuBurger ({ children }) {

  const linkNavigazione = [
    {nome:'panini',link:'/panini'},
    {nome:'hot-dog', link:'/hotdog'},
    {nome:'tacos', link:'/tacos'},
    {nome:'bao', link:'/bao'},
    {nome:'piadine', link:'/piadine'},
    {nome:'sfizi', link:'/sfizi'},   
    {nome:'beverage', link:'/beverage'},    
  ]

  return (
    <>
        <div className="flex flex-col justify-center items-center rounded bg-brand-500 h-screen w-screen">
            <div className="w-[100vw] h-[6vh] border-b border-white">
              <Navbar logo={"/logo-white.png"} background={"bg-neutral-900"} link={linkNavigazione}/>
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