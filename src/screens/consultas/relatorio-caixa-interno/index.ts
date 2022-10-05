import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioCaixaInterno extends BasicEntity {
  dataReferente: Date;
  descricao: string;
  valorEntrada: number;
  valorSaida: number;
}
