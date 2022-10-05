import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioClienteProduto extends BasicEntity {
  nomeProduto: string;
  nomeSeguradora: string;
  ramoProduto: string;
  statusProduto: string;
  valorBeneficio: number;
  valorParcela: number;
}
