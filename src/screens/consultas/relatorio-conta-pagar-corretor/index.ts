import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioContaPagarCorretor extends BasicEntity {
  cliente: string;
  dataPagamento: string;
  descricaoContaPagar: string;
  fluxoCaixa?: boolean;
  idCliente: number;
  idContaPagar: number;
  parcela: number;
  percentual: number;
  produto: string;
  seguradora: string;
  siglaContaPagar: string;
  status: string;
  valor: number;
  valorReferencia: number;
}
