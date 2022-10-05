import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioCobranca extends BasicEntity {
  referencia: Date;
  formaPagamento: string;
  cliente: string;
  seguradora: string;
  produto: string;
  corretor: string;
  parcela: number;
  valorReceber: number;
  valorRecebido: number;
  saldoReceber: number;
}
