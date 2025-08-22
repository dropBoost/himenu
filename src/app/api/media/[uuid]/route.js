// app/api/media/[uuid]/route.js
import { supabaseServer } from '@/lib/supabaseServerClient';

export async function GET(req, { params }) {
  // ✅ niente await qui
  const { uuid } = params;

  const { data, error } = await supabaseServer
    .from('menu')
    .select('*')
    .eq('UUID', uuid)
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
