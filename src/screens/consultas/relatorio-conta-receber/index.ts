import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioContaReceber extends BasicEntity {
  corretorId: number;
  seguradoraId: number;
  nome: string;
  agenciamento: number;
  comissionamento: number;
  outros: number;
  valorTotal: number;
}
