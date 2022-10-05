import { Organizacao } from "./common/organizacao";
import { Empresa } from "./empresa";

export class Divisao extends Organizacao {
  nome = '';
  empresa: Empresa = new Empresa();
}
