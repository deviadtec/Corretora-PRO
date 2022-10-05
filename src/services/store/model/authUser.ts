import { Telefone } from "@models/common/telefone.model"

export interface AuthUser {
  id: number
  version: number
  dataCriacao: number
  username: string
  nome: string
  email: string
  telefones: Telefone[]
  statusUsuario: 'PENDENTE' | 'ATIVO' | 'INATIVO' | 'REPROVADO'
  isAdmin: boolean
}
