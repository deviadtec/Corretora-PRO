import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { AutocompleteCliente } from "@components/filtros/AutocompleteCliente";
import { AutocompleteCorretor } from "@components/filtros/AutocompleteCorretor";
import { AutocompleteFornecedor } from "@components/filtros/AutocompleteFornecedor";
import { AutocompleteFuncionario } from "@components/filtros/AutocompleteFuncionario";
import { AutocompleteProduto } from "@components/filtros/AutocompleteProduto";
import { ColumnProps } from "@components/tabela-relatorio";
import { CurrencyUtil } from "@components/tabela-relatorio/currency";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import { format } from "date-fns";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const columnPropsRelatorioEstorno: ColumnProps[] = [
  { columnName: "clienteNome", headerName: "Cliente", width: 200 },
  { columnName: "produtoNome", headerName: "Produto", width: 200 },
  { columnName: "nome", headerName: "Nome", width: 200 },
  {
    columnName: "parcela",
    headerName: "Nº Parcela",
    width: 80,
    align: "right",
  },
  {
    columnName: "valor",
    headerName: "Valor(R$)",
    width: 120,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "dataComissao",
    headerName: "Data Comissão",
    width: 120,
    align: "right",
    format: (value: number) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  { columnName: "origemEstorno", headerName: "Origem Estorno", width: 120 },
];

const TIPO_RELATORIO = "ESTORNO";
export function RelatorioEstornoComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Estornos Lançados</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="gavel" size={38} />
        </View>
      </View>
      <FiltroAvancado>
        <View style={styles.containerFilter}>
          <AutocompleteCliente />
          <AutocompleteProduto />
          <AutocompleteCorretor />
          <AutocompleteFuncionario />
          <AutocompleteFornecedor />
        </View>
      </FiltroAvancado>
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioEstorno}
        tipoRelatorio={TIPO_RELATORIO}
        sortOrder={"asc"}
        sortKey={"cliente_nome"}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 8 },
  containerFilter: {
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  containnerItens: {
    flexDirection: "row",
    marginBottom: 10,
  },
  containnerTitle: {
    width: "80%",
    marginVertical: 10,
    justifyContent: "center",
  },
  title: { color: "#D6D9D4", fontSize: 22, fontWeight: "bold" },
  containnerIcon: { width: "20%", padding: 10, justifyContent: "center" },
});
