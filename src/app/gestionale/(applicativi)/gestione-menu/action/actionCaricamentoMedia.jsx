'use server'

import { supabaseServer } from '@/lib/supabaseServerClient';
import { v4 as uuidv4 } from 'uuid';

export const postMediaAction = async (formData) => {

  const attivo = formData.get('attivo')=== 'on';
  const categoria = formData.get('categoria');
  const onnivori = formData.get('onnivori');
  const classiche = formData.get('classiche')=== 'on';
  const speciali = formData.get('speciali')=== 'on';
  const scialoEdition = formData.get('scialoEdition')=== 'on';
  const smashBurger = formData.get('smashBurger')=== 'on';
  const bibite = formData.get('bibite')=== 'on';
  const tacos = formData.get('tacos')=== 'on';
  const toast = formData.get('toast')=== 'on';
  const piadina = formData.get('piadina')=== 'on';
  const sfizi = formData.get('sfizi')=== 'on';
  const senzaGlutine = formData.get('senzaGlutine')=== 'on';
  const file = formData.get('file');
  const nome = formData.get('nome')
  const ingredienti = formData.get('ingredienti')
  const prezzo = formData.get('prezzo')
  const posizione = formData.get('posizione');
  const dataUpload = new Date();



  if (!file || typeof file === 'string') {
    throw new Error('File non presente o non valido');
  }

  let fileUrl = '';

  if (file && typeof file === 'object' && file.name) {
    const fileExt = file.name.split('.').pop();
    const uniqueName = `${uuidv4()}.${fileExt}`;

    const { error: uploadError } = await supabaseServer.storage
    .from('immagini-menu')
    .upload(`uploads/${uniqueName}`, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type,
    });

    if (uploadError) {
    console.error('❌ Errore durante l\'upload del file:', {
        message: uploadError.message,
        details: uploadError.details,
        name: uploadError.name,
        hint: uploadError.hint
    });
    throw new Error(`Errore upload file: ${uploadError.message}`);
    }

    const { data: publicUrlData } = supabaseServer.storage
      .from('immagini-menu')
      .getPublicUrl(`uploads/${uniqueName}`);

    fileUrl = publicUrlData.publicUrl;
  }

  const { data, error } = await supabaseServer
    .from('menu') // ✅ Nome della tua tabella
    .insert([
      {
        attivo,
        categoria,
        onnivori,
        classiche,
        speciali,
        scialoEdition,
        smashBurger,
        bibite,
        tacos,
        toast,
        piadina,
        sfizi,
        senzaGlutine,
        nome,
        ingredienti,
        prezzo,
        posizione,
        dataUpload,
        imgUrl: fileUrl,
      },
    ]);

  if (error) {
    console.error('Errore Supabase INSERT:', error);
    throw new Error(`Errore inserimento dati: ${error.message}`);
  }

  return { success: true, data };
};