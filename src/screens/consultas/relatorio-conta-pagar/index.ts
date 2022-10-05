import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioContaPagar extends BasicEntity {
  agenciamento: number;
  comissionamento: number;
  corretorId?: number;
  fornecedorId?: number;
  funcionarioId?: number;
  nome: string;
  outros: number;
  valorTotal: number;
}
