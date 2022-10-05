import { Organizacao } from "./common/organizacao";
import { Divisao } from "./divisao.model";
import { Empresa } from "./empresa";
import { Grupo } from "./grupo";
import { Perfil } from "./perfil";
import { Unidade } from "./unidade";
import { Usuario } from "./usuario";

export class UsuarioPerfilOrganizacao extends Organizacao {
  usuario: Usuario | null = null;
  perfil: Perfil | null = null;
  id = 0;
  orgId = "";
  empresa: Empresa | null = null;
  divisao: Divisao | null = null;
  grupo: Grupo | null = null;
  unidade: Unidade | null = null;
}
