import { BasicEntity } from "@models/common/basicEnity";
export enum TipoBalancoMensal {
  CORRETOR = "CORRETOR",
  SEGURADORA = "SEGURADORA",
  FORNECEDOR = "FORNECEDOR,",
}

export interface RelatorioBalancoMensal extends BasicEntity {
  nome: string;
  tipo: TipoBalancoMensal;
  dataReferente: string;
  totalContasPagar: number;
  totalContasReceber: number;
  saldo: number;
}
