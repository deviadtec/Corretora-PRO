import { BasicEntity } from "./common/basicEnity";
import { Telefone } from "./common/telefone";
export enum StatusUsuario {
  PENDENTE = "Pendente",
  ATIVO = "Ativo",
  INATIVO = "Inativo",
  REPROVADO = "Reprovado",
}
export class Usuario extends BasicEntity {
  constructor(
    public username: string = "",
    public password: string = "",
    public nome: string = "",
    public email: string = "",
    public telefones?: Telefone[],
    public statusUsuario: StatusUsuario = StatusUsuario.PENDENTE
  ) {
    super();
  }
}
