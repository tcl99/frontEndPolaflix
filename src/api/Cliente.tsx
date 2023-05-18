import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface FacturasAPI {
  fecha?: string;
  importeMensual?: number;
  importes?: Importe[];
}

interface Importe {
  cargo: number;
  fechaVisualizacion: string;
  nCapitulo: number;
  nTemporada: number;
  nombreSerie: string;
}
