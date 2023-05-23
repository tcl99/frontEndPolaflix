import { client } from "./Cliente";
import { SeriesAPI } from "./SeriesAPI";

export const getSeries = async (): Promise<SeriesAPI[]> => {
  const { data } = await client.get<SeriesAPI[]>("series");

  return data;
};
