import { YearMonth } from "js-joda";
import { client } from "./Cliente";
import { FacturasAPI } from "./FacturasAPI";

interface Props {
  fecha: YearMonth;
}

export const getFacturas = async ({ fecha }: Props): Promise<FacturasAPI> => {
  const { data } = await client.get<FacturasAPI>(
    "usuarios/" + globalThis.usuario + "/facturas",
    {
      params: {
        fecha: fecha,
      },
    }
  );

  return data;
};
