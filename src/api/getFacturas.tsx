import { FacturasAPI, client } from "./Cliente";

export const getFacturas = async (): Promise<FacturasAPI> => {
  const { data } = await client.get<FacturasAPI>("facturas/2023-05");

  return data;
};
