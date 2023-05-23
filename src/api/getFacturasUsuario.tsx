import { YearMonth } from "js-joda";
import { client } from "./Cliente";
import { FacturasAPI } from "./FacturasAPI";

interface Props {
  fecha: YearMonth;
}

export const getFacturas = async ({ fecha }: Props): Promise<FacturasAPI> => {
  let user = "socio";

  const { data } = await client.get<FacturasAPI>("facturas", {
    params: {
      usuario: user,
      fecha: fecha,
    },
  });

  return data;
};
