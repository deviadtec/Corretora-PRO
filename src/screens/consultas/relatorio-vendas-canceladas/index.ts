import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioVendasCanceladas extends BasicEntity {
  dataCancelamento: number;
  idCliente: number;
  nomeCliente: string;
  nomeProduto: string;
  nomeProfissao: string;
  nomeSeguradora: string;
  ramoProduto: string;
}
