import { BasicEntity } from "./common/basicEnity"

export enum Metodo {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  PATCH = 'PATCH',
}
export class Recurso extends BasicEntity {
  url = ''
  metodo: Metodo = Metodo.GET
  nome = ''
}
