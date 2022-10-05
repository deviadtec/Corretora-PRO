import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioRegistroEnvioEmail extends BasicEntity {
  descricao: string;
  produtoVenda: string;
  cliente: string;
  dataEnvio: string;
  proposta: string;
}
