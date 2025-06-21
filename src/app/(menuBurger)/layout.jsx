export default function LayoutMenuBurger ({ children }) {
  return (
    <>
        <div className="flex flex-col justify-center items-center rounded bg-brand-400 h-screen w-screen">
            <div className="w-[80vw] h-[7vh] bg-white rounded-s-3xl rounded-e-lg overflow-auto">
              ciao
            </div>
            <div className="w-[80vw] h-[85vh] bg-white rounded-s-3xl rounded-e-lg overflow-auto">
                {children}
            </div>
        </div>
    </>
  );
}