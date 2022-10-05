import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioContaReceberPagador extends BasicEntity {
  seguradora: string;
  dataReferente: string;
  valor: number;
  valorComissao: number;
  percentual: number;
  siglaContaReceber: string;
  corretor: string;
  idContaReceber: number;
}
