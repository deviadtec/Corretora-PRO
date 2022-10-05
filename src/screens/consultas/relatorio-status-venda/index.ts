import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioStatusVenda extends BasicEntity {
  clienteNome: string;
  dataCadastro: string;
  id: number;
  idCliente: number;
  profissaoNome: string;
  seguradoraNome: string;
  statusProduto: string;
  tipoProduto: string;
}
