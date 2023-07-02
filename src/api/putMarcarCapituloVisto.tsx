import { client } from "./Cliente";
import { Capitulos, InfoSerie, SeriesAPI } from "./SeriesAPI";

export const putMarcarCapituloVisto = async (
  s: InfoSerie,
  nTemporada: number,
  c: Capitulos
): Promise<Capitulos> => {
  const requestBody = {
    s: s,
    nTemporada: nTemporada,
    c: c,
  };

  const { data } = await client.put<Capitulos>(
    "usuarios/" + globalThis.usuario + "/series/" + c.idCapitulo,
    requestBody
  );

  return data;
};
