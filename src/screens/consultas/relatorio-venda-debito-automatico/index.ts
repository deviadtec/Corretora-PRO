import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioVendaDebitoAutomaticoDTO extends BasicEntity {
  idCliente: number;
  nomeCliente: string;
  cpfCnpj: string;
  idSeguradora: number;
  nomeSeguradora: string;
  dataIngresso: Date;
  valorProposta: number;
  nomeBanco: string;
  corretor: string;
  possuiHistoricoAlerta: boolean;
  proposta: string;
}
