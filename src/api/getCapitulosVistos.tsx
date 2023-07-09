import { client } from "./Cliente";

export const getCapitulosVistos = async (user: String): Promise<number[]> => {
  const { data } = await client.get<number[]>(
    "usuarios/" + globalThis.usuario + "/series/capitulos"
  );

  return data;
};
