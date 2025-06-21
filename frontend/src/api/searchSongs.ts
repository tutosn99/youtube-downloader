const BASE_URL = "http://192.168.0.7:3000";

interface IsearchSongs {
  query: string;
  quantity: number;
}

export async function searchSongs({ query, quantity }: IsearchSongs) {
  if (!query || !quantity){
    return {error: 'No Se Recibieron Los datos'};
  }
  const req = { title: query, quantity: quantity };

  try {
    const res = await fetch(`${BASE_URL}/searchsong`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });

    if (!res.ok) {
      return { error: "Respuesta inválida del servidor" };
    }

    const data = await res.json();
    // console.log(data)
    return data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return { error: "Error en el Fetching" };
  }
}
