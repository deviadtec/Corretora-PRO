import { StyleProp } from "react-native";

export interface ColumnProps {
  columnName: string;
  headerName: string;
  width: number;
  align?: "auto" | "left" | "right" | "center";
  format?: (value: any) => {};
}

export interface RelatorioTableFlex {
  columnProps: ColumnProps[];
  tipoRelatorio: string;
  sortOrder: "asc" | "desc" | "";
  sortKey: string;
  redirect?: (value: any) => {};
}
