import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { ColumnProps } from "@components/tabela-relatorio";
import { CurrencyUtil } from "@components/tabela-relatorio/currency";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { AutocompleteSeguradora } from "@components/filtros/AutocompleteSeguradora";
import { AutocompleteRamoProduto } from "@components/filtros/AutocompleteRamoProduto";
import { SelectStatusProdutoVenda } from "@components/filtros/SelectStatusProdutoVenda";

const columnPropsRelatorioClienteProduto: ColumnProps[] = [
  { columnName: "nomeProduto", headerName: "Produto", width: 200 },
  { columnName: "statusProduto", headerName: "Status Produto", width: 100 },
  { columnName: "nomeSeguradora", headerName: "Seguradora", width: 200 },
  {
    columnName: "valorParcela",
    headerName: "Valor Parcela(R$)",
    width: 150,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "valorBeneficio",
    headerName: "Valor Benefício(R$)",
    width: 150,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
];

const TIPO_RELATORIO = "CLIENTE_PRODUTO";
export function RelatorioClienteProdutoComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Listagem de Produtos dos Clientes</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="style" size={42} />
        </View>
      </View>
      <FiltroAvancado>
        <View style={styles.containerFilter}>
          <AutocompleteSeguradora />
          <AutocompleteRamoProduto />
          <SelectStatusProdutoVenda />
        </View>
      </FiltroAvancado>
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioClienteProduto}
        tipoRelatorio={TIPO_RELATORIO}
        sortOrder={"asc"}
        sortKey={"nome_produto"}
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
