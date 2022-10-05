import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioRenovacao extends BasicEntity {
  beneficio: number;
  dataFinalVigencia: string;
  nomeCliente: string;
  nomeProduto: string;
  nomeSeguradora: string;
}
