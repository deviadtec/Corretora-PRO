import { Enderecavel, Endereco } from "./common/endereco";
import { Organizacao } from "./common/organizacao";
import { Telefone } from "./common/telefone";

export class Empresa extends Organizacao implements Enderecavel {
  constructor(
    public cnpj: string = '',
    public razaoSocial: string = '',
    public dataCadastro: string = '',
    public telefones?: Telefone[],
    public endereco: Endereco = new Endereco(),
    public id: number = -1,
    public version: number = 0,
    public franqueadora: boolean = false,
    public imposto: number = 0,
  ) {
    super()
  }
}
