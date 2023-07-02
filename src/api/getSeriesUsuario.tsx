import { client } from "./Cliente";
import { SeriesAPI } from "./SeriesAPI";

export const getInfoSeries = async (user: String): Promise<SeriesAPI[][]> => {
  const { data } = await client.get<SeriesAPI[][]>(
    "usuarios/" + globalThis.usuario,
    {}
  );

  return data;
};
