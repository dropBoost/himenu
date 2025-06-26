import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function LayoutMenuPizzeria ({ children }) {
  return (
    <>
        <div className="flex flex-col justify-center items-center rounded bg-red-700 h-screen w-screen">
            <div className="w-[100vw] h-[6vh] border-b border-white">
              <Navbar logo={"/logoPizza-white.png"} background={"bg-neutral-900"}/>
            </div>
            <div className="w-[80vw] flex-1 justify-center items-center bg-white overflow-auto">
              {children}
            </div>
            <div className="w-[100vw] h-[6vh] flex justify-center items-center border-t bg-white border-white overflow-auto">
              <Footer/>
            </div>
        </div>
    </>
  );
}