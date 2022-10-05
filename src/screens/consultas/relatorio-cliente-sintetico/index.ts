import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioClienteSintetico extends BasicEntity {
  cidade: string;
  classificacao: string;
  corretor: string;
  cpfOrCnpj: string;
  dataAdesao: string;
  emailCliente: string;
  estado: string;
  idCliente: number;
  nomeCliente: string;
  nomeProduto: string;
  nomeProfissao: string;
  nomeSeguradora: string;
  pessoaFisica: boolean;
  profissao: string;
  ramoProduto: string;
  statusCliente: string;
  telefoneCliente: string;
  valorBeneficio: number;
  valorParcela: number;
}
