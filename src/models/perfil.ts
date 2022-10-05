import { Organizacao } from "./common/organizacao";
import { MenuItem } from "./menu-item";
import { Recurso } from "./recurso";

export enum TipoNotificacao {
  ANIVERSARIANTES_DO_DIA = "ANIVERSARIANTES_DO_DIA",
  FIM_VIGENCIA_PRODUTO_VENDA = "FIM_VIGENCIA_PRODUTO_VENDA",
  AGENDA = "AGENDA",
}

export class Perfil extends Organizacao {
  constructor(
    public nome: string = "",
    public recursos: Recurso[] = [],
    public menuItens: MenuItem[] = [],
    public pontuacao?: number,
    public tiposNotificacao: TipoNotificacao[] = []
  ) {
    super();
  }
}
