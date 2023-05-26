export interface SeriesAPI {
  idSerie: number;
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
export interface Temporadas {
  numero: number;
  capitulos: Capitulos[];
}

interface Capitulos {
  numero: number;
  titulo: string;
  descripcion: string;
  enlace: string;
}
