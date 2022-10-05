import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioProducao extends BasicEntity {
  dataRegistro: string;
  nomeCliente: string;
  nomeCorretor: string;
  nomeProduto: string;
  nomeSeguradora: string;
  valorAnual: number;
  valorMensal: number;
  valorParcela: number;
}
