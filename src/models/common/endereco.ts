import { BasicEntity } from "./basicEnity"

/**
 * Endereço
 *
 * Serve para determinar os campos de um endereço de uma entidade
 * Não é um BasicEntity pois é um subconjunto de atributos de uma entidade Endereçável
 */
export class Endereco extends BasicEntity {
  constructor(
    public cep: string = '',
    public logradouro: string = '',
    public numero: string = '',
    public complemento: string = '',
    public uf: string = '',
    public cidade: string = '',
    public bairro: string = '',
  ) {
    super()
  }
}

/**
 * Qualquer entidade endereçável conterá este campo
 */
export interface Enderecavel {
  endereco: Endereco
}
