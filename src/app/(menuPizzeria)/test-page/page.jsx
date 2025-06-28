import { supabaseServer } from '@/lib/supabaseServerClient'
import ListCard from '@/app/components/listcard'

export default async function PagePizzeria() {

  const { data: menu, error } = await supabaseServer.from('menu').select('*').eq('categoria', 'pizza').eq('attivo', 'true')

  if (error) {
    return <div>Errore: {error.message}</div>
  }

  if (!menu || menu.length === 0) {
    return <div>Nessun elemento trovato nel menù.</div>
  }

  return (
    <>
    <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 p-10'>
        {menu.map(pizza => (
            <ListCard key={pizza.id} img={pizza.imgUrl} cate={pizza.categoria} nome={pizza.nome} ingredienti={pizza.ingredienti} prezzo={pizza.prezzo} attivo={pizza.attivo} />
        ))}
    </div>
    </>
  )
}