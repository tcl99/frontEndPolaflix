import { client } from "./Cliente";
import { SeriesAPI } from "./SeriesAPI";

export const putAnadirSerie = async (serie?: SeriesAPI): Promise<SeriesAPI> => {
  const { data } = await client.put<SeriesAPI>(
    "usuarios/" + globalThis.usuario + "/series",
    serie
  );

  return data;
};
