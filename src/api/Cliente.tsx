import axios from "axios";
import { string } from "prop-types";

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

export interface SeriesAPI {
  temporadas: Temporadas[];
  info: InfoSerie;
}

interface InfoSerie {
  categoria: "ESTANDAR" | "SILVER" | "GOLD";
  titulo: string;
  genero: string;
  descripcion: string;
  creadores: string[];
  actores: string[];
}
interface Temporadas {
  numero: number;
  capitulos: Capitulos[];
}

interface Capitulos {
  numero: number;
  titulo: string;
  descripcion: string;
  enlace: string;
}

interface Importe {
  cargo: number;
  fechaVisualizacion: string;
  nCapitulo: number;
  nTemporada: number;
  nombreSerie: string;
}
