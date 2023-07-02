export interface SeriesAPI {
  idSerie: number;
  info: InfoSerie;
  temporadas: Temporadas[];
}

export interface InfoSerie {
  categoria: "ESTANDAR" | "SILVER" | "GOLD";
  titulo: string;
  genero: string;
  descripcion: string;
  creadores: string[];
  actores: string[];
}
export interface Temporadas {
  idTemporada: number;
  numero: number;
  capitulos: Capitulos[];
}

export interface Capitulos {
  idCapitulo: number;
  numero: number;
  titulo: string;
  descripcion: string;
  enlace: string;
}
