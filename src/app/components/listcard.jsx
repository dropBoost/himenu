import Image from "next/image"
export default function ListCard (props) {

   const nome = props.nome
   const ingredienti = props.ingredienti
   const prezzo = props.prezzo
   const attivo = props.attivo
   const cate = props.cate
   const img = props.img

    return (
        <>
            <div className="flex flex-col w-full justify-between items-start bg-white p-6 rounded-3xl">
                <div>
                     <h2 className="text-red-700 text-xl uppercase font-bold">{nome}</h2>
                </div>
                <div className="flex flex-col items-start justify-start h-full w-full pt-2 pb-2 bg-white">
                    <p className="text-neutral-500 text-sm">{ingredienti}</p>
                </div>
                <div>
                    <span className="bg-red-700 text-white font-bold ps-2 pe-3 text-sm rounded-md" >{prezzo}€</span>
                </div>
            </div>
        
        </>
    )

}