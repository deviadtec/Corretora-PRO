import { BasicEntity } from "./common/basicEnity";

export class MenuItem extends BasicEntity {
  constructor(
    public nome: string = '',
    public icone: string = '',
    public subNome?: string,
    public allowOffline?: boolean,
    public link: string = '',
    public id: number = -1,
    public version: number = 0,
  ) {
    super()
  }

}
