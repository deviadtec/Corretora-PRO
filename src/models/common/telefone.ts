import { BasicEntity } from "./basicEnity";

export const TELEFONE_TYPES: ["EMPRESA", "FIXO", "CELULAR"] = [
  "EMPRESA",
  "FIXO",
  "CELULAR",
];
export type TELEFONE_TYPES = "EMPRESA" | "FIXO" | "CELULAR" | "";

export class Telefone extends BasicEntity {
  constructor(
    public descricao: TELEFONE_TYPES = "",
    public ddd: string = "",
    public telefone: string = "",
    public ramal: string = ""
  ) {
    super();
  }
}
