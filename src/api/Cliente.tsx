import axios from "axios";

let data = "socio";

export const client = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "*",
    "Access-Control-Allow-Origin": "*",
  },
  data: data,
});

export interface FacturasAPI {
  importes?: Importe[];
}

interface Importe {
  fecha: string;
  serie: string;
  episodio: number;
  precio: number;
}
