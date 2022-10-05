import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { AutocompleteCliente } from "@components/filtros/AutocompleteCliente";
import { AutocompleteCorretor } from "@components/filtros/AutocompleteCorretor";
import { AutocompleteProduto } from "@components/filtros/AutocompleteProduto";
import { AutocompleteRamoProduto } from "@components/filtros/AutocompleteRamoProduto";
import { AutocompleteSeguradora } from "@components/filtros/AutocompleteSeguradora";
import { SelectStatusProdutoVenda } from "@components/filtros/SelectStatusProdutoVenda";
import { ColumnProps } from "@components/tabela-relatorio";
import { CurrencyUtil } from "@components/tabela-relatorio/currency";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const columnPropsRelatorioProducao: ColumnProps[] = [
  {
    columnName: "dataRegistro",
    headerName: "Referência",
    width: 90,
  },
  { columnName: "nomeCorretor", headerName: "Corretor", width: 200 },
  { columnName: "nomeProduto", headerName: "Produto", width: 200 },
  { columnName: "nomeSeguradora", headerName: "Seguradora", width: 200 },
  { columnName: "nomeCliente", headerName: "Cliente", width: 200 },

  {
    columnName: "valorParcela",
    headerName: "Valor Parcela(R$)",
    width: 120,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "valorMensal",
    headerName: "Valor Mensal(R$)",
    width: 120,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "valorAnual",
    headerName: "Valor Anual(R$)",
    width: 120,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
];

const TIPO_RELATORIO = "PRODUCAO";
export function RelatorioProducaoComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Relatório de Produção Mensal</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="chrome-reader-mode" size={42} />
        </View>
      </View>
      <FiltroAvancado>
        <View style={styles.containerFilter}>
          <AutocompleteCorretor />
          <AutocompleteSeguradora />
          <AutocompleteRamoProduto />
          <AutocompleteCliente />
          <AutocompleteProduto />
          <SelectStatusProdutoVenda />
        </View>
      </FiltroAvancado>
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioProducao}
        tipoRelatorio={TIPO_RELATORIO}
        sortOrder={"asc"}
        sortKey={"data_registro"}
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
