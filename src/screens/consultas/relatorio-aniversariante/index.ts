import { BasicEntity } from "@models/common/basicEnity";

export interface RelatorioAniversariante extends BasicEntity {
  dataDeNascimento: string;
  idAniversariante: number;
  nome: string;
  nomeCorretor: string;
  nomeProfissao: string;
  status: string;
  tipo: string;
}
