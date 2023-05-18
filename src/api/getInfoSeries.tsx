import { InfoSeriesAPI, client } from "./Cliente";

export const getInfoSeries = async (): Promise<InfoSeriesAPI[][]> => {
  let user = "socio";

  const { data } = await client.get<InfoSeriesAPI[][]>("inicio", {
    params: {
      usuario: user,
    },
  });

  return data;
};
