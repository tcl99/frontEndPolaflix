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
