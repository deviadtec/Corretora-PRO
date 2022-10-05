import { BasicEntity } from "./common/basicEnity";
export enum VendedorCarteira {
  FRANQUEADORA = "FRANQUEADORA",
  CORRETORA = "CORRETORA",
  CORRETOR = "CORRETOR",
  PRIMEIRO_CORRETOR = "PRIMEIRO_CORRETOR",
  SEGUNDO_CORRETOR = "SEGUNDO_CORRETOR",
}

export class Carteira extends BasicEntity {
  constructor(
    public vendendorCarteira: VendedorCarteira = VendedorCarteira.CORRETORA,
    public ordem: number = 0,
    public quantidade: number = 0,
    public percentual: number = 0,
    public agenciamento: boolean = false,
    public participaBonus: boolean = false,
  ) {
    super();
  }
}
