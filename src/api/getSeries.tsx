import { SeriesAPI, client } from "./Cliente";

export const getInfoSeries = async (): Promise<SeriesAPI[][]> => {
  let user = "socio";

  const { data } = await client.get<SeriesAPI[][]>("inicio", {
    params: {
      usuario: user,
    },
  });

  return data;
};
