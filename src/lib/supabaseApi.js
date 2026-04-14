import { supabase } from "./supabaseClient";

export async function fetchLspMitra(limit = 6) {
  const { data, error } = await supabase
    .from("lsp_mitra")
    .select("*")
    .order("name", { ascending: true })
    .limit(limit);

  if (error) throw error;
  return data;
}

export async function fetchSektor() {
  const { data, error } = await supabase
    .from("sektor")
    .select("*")
    .order("name", { ascending: true });

  if (error) throw error;
  return data;
}
