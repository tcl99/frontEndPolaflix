import { client } from "./Cliente";
import { SeriesAPI } from "./SeriesAPI";

export const getInfoSeries = async (): Promise<SeriesAPI[][]> => {
  const user = "socio";

  const { data } = await client.get<SeriesAPI[][]>("usuarios/" + user, {});

  return data;
};
