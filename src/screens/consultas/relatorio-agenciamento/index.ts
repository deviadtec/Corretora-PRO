import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioAgenciamento extends BasicEntity {
  cliente: string;
  cpfCnpj: string;
  dataPagamento: Date;
  proposta: string;
  produto: string;
  corretor: string;
  tipo: string;
  valorComissao: number;
  valorProduto: number;
  status: string;
  estornoId: number;
  seguradora: string;
}
