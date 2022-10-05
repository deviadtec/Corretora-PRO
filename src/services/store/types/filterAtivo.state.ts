export enum ValueHandler {
  DATE = "DATE",
  INT_ARRAY = "INT_ARRAY",
  LONG = "LONG",
  BOOLEAN = "BOOLEAN",
  STRING = "STRING",
}

export interface Filter {
  chave: string;
  valor: string | any;
  handler?: ValueHandler;
}

export interface FilterAtivoState {
  filtros: Filter[];
}

export const initialState: FilterAtivoState = {
  filtros: [],
};

function getMesAtual() {
  const mesAtual = new Date().getMonth() + 1;
  return mesAtual.toString();
}

function getAnoAtual() {
  const year = new Date().getFullYear();
  return year.toString();
}
