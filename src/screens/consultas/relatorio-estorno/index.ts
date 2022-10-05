import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioEstorno extends BasicEntity {
  clienteNome: string;
  dataComissao: number;
  idContaPagar: number;
  nome: string;
  origemEstorno: string;
  parcela: number;
  produtoNome: string;
  valor: number;
}
