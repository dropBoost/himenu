'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEgg, faCloud, faCalendarWeek, faUser, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const iconaDashboard = <FontAwesomeIcon icon={faCloud} className='h-[50px] text-neutral-200 hover:text-appText-500' />
const iconaGestioneMenu = <FontAwesomeIcon icon={faEgg}  className='h-[50px] text-neutral-200 hover:text-appText-500' />
const iconaRedazionePreventivi = <FontAwesomeIcon icon={faCirclePlus} className='h-[50px] text-neutral-200 hover:text-appText-500'  />
const iconaAgendaEventi = <FontAwesomeIcon icon={faCalendarWeek} className='h-[50px] text-neutral-200 hover:text-appText-500'  />
const iconaClienti = <FontAwesomeIcon icon={faUser} className='h-[50px] text-neutral-200 hover:text-appText-500'  />

export default function HomeGestionale () {

 const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
      <div className="grid sm:grid-cols-4 grid-cols-2 md:flex-row gap-4 p-5">
        <GESTIONALEapplicativi nome={"DASHBOARD"} link={"./gestionale/dashboard"} icona={iconaDashboard}/>
        <GESTIONALEapplicativi nome={"AGENDA PRENOTAZIONI"} link={"./gestionale/agenda-eventi"} icona={iconaAgendaEventi}/>
        <GESTIONALEapplicativi nome={"CLIENTI"} link={"./gestionale/clienti"} icona={iconaClienti}/>
        <GESTIONALEapplicativi nome={"AGGIUNGI PRENOTAZIONE"} link={"./gestionale/redazione-preventivi"} icona={iconaRedazionePreventivi}/>
        <GESTIONALEapplicativi nome={"GESTIONE MENU"} link={"./gestionale/gestione-menu"} icona={iconaGestioneMenu}/>
      </div>
  );
}

function GESTIONALEapplicativi ({nome, icona, link}) {
  return (
    <>
    <div className={`flex flex-col items-center justify-center rounded-2xl gap-2 bg-white hover:bg-appColor-500 transition duration-700 aspect-square p-3`}>
      <Link href={link}>
        {icona}
      </Link>
      <span className='text-xs text-center'>{nome}</span>
    </div>
    </>
  )
}