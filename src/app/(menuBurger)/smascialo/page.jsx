'use client'

import Link from 'next/link'

export default function PageBurger() {

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
    <div className="flex flex-col p-5 border h-full w-full rounded-xl gap-2 overflow-auto">
        {linkNavigazione.map((link, index) => (
          <Link href={link.link} key={index} >
            <div className="flex flex-row items-center justify-start gap-3 h-fit bg-brand-500 rounded-xl px-2 py-2 hover:bg-neutral-200 text-white hover:text-brand-500 hover:font-extrabold">
                {link.img ? <Image src={`${link.img}`} width={100} height={100} quality={30} className="w-[100px] h-[100px] object-cover rounded" alt={link.nome}/> : null}
                <span className="w-full uppercase border hover:border-brand-500 px-4 py-1 rounded-lg">{link.nome}</span>
              
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}