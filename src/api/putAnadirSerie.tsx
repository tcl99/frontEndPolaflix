import { client } from "./Cliente";
import { SeriesAPI } from "./SeriesAPI";

export const putAnadirSerie = async (serie?: SeriesAPI): Promise<SeriesAPI> => {
  const user = "socio";

  const { data } = await client.put<SeriesAPI>("/series", serie);

  return data;
};
