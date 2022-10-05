import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { AutocompleteRamoProduto } from "@components/filtros/AutocompleteRamoProduto";
import { AutocompleteSeguradora } from "@components/filtros/AutocompleteSeguradora";
import { SelectStatusCliente } from "@components/filtros/SelectStatusCliente";
import { SelectStatusProdutoVenda } from "@components/filtros/SelectStatusProdutoVenda";
import { ColumnProps } from "@components/tabela-relatorio";
import { CurrencyUtil } from "@components/tabela-relatorio/currency";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import React from "react";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const columnPropsRelatorioRenovacao: ColumnProps[] = [
  { columnName: "nomeCliente", headerName: "Cliente", width: 200 },
  { columnName: "nomeProduto", headerName: "Produto", width: 200 },
  { columnName: "nomeSeguradora", headerName: "Seguradora", width: 200 },
  {
    columnName: "beneficio",
    headerName: "Valor Benefício(R$)",
    align: "right",
    width: 150,
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
];

const TIPO_RELATORIO = "RENOVACAO";
export function RelatorioRenovacaoComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Relatório de Renovação</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="event-busy" size={42} />
        </View>
      </View>
      <FiltroAvancado>
        <View style={styles.containerFilter}>
          <AutocompleteSeguradora />
          <AutocompleteRamoProduto />
          <SelectStatusCliente />
          <SelectStatusProdutoVenda />
        </View>
      </FiltroAvancado>
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioRenovacao}
        tipoRelatorio={TIPO_RELATORIO}
        sortOrder={"asc"}
        sortKey={"data_final_vigencia"}
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
