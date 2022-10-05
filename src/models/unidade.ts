import { Organizacao } from "./common/organizacao";
import { Grupo } from "./grupo";

export class Unidade extends Organizacao {
  nome = '';
  grupo: Grupo = new Grupo();
}
