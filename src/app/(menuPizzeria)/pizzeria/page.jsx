"use client"

import Link from "next/link"
import Image from "next/image"

export default function PagePizzeria() {

  const linkNavigazione = [
    {nome:'classiche',link:'/classiche', img:'/s-2.png'},
    {nome:'le Speciali', link:'/le-speciali', img:'/s-3.png'},
    {nome:'Scialò Edition', link:'/scialo-edition', img:'/s-6.png'},
    {nome:'sfizi', link:'/pizzeria-sfizi',img:'/frittatina cacio e pepe.jpg'},   
    {nome:'beverage', link:'/beverage-pizzeria',img:'/cocacola-33cl.png'},    
  ]

    return (
      <>
      <div className="flex flex-col p-5 border h-full w-full rounded-xl gap-2 overflow-auto">
        {linkNavigazione.map((link, index) => (
          <Link href={link.link} key={index} >
            <div className="flex flex-row items-center justify-start gap-3 h-fit bg-brand-500 rounded-xl px-2 py-2 hover:bg-neutral-950 text-white">
                {link.img ? <Image src={`${link.img}`} width={100} height={100} quality={30} className="w-[100px] h-[100px] object-cover rounded" alt={link.nome}/> : null}
                <span className="uppercase border px-4 py-1 rounded-lg">{link.nome}</span>
              
            </div>
          </Link>
        ))}
      </div>
    </>
    )
}