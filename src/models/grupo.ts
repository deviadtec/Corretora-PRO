import { Carteira } from "./carteira-form.model"
import { Organizacao } from "./common/organizacao"
import { Divisao } from "./divisao.model"

export type ADMINISTRATIVA = 'A'
export type COMERCIAL = 'C'
export type TipoVisao = ADMINISTRATIVA | COMERCIAL

export class Grupo extends Organizacao {
  constructor(
    public nome: string = '',
    public divisao: Divisao = new Divisao(),
    public visao: TipoVisao = 'A',
    public susep: boolean = false,
    public comissionamentoSobreComissaoCorretora: boolean = false,
    public carteiras: Carteira[] = [],
    public obrigaCarteirasCorretor: boolean = true,
  ) {
    super()
  }
}
