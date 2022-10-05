import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { AutocompleteCorretor } from "@components/filtros/AutocompleteCorretor";
import { ColumnProps } from "@components/tabela-relatorio";
import { CurrencyUtil } from "@components/tabela-relatorio/currency";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { SelectStatusContaPagar } from "@components/filtros/SelectStatusContaPagar";
import { format } from "date-fns";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const columnPropsRelatorioAgenciamento: ColumnProps[] = [
  { columnName: "cliente", headerName: "Cliente", width: 200 },
  { columnName: "cpfCnpj", headerName: "CPF/CNPJ", width: 100 },
  {
    columnName: "dataPagamento",
    headerName: "Data Pagamento",
    width: 90,
    format: (value: number) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  { columnName: "proposta", headerName: "Proposta", width: 100 },
  { columnName: "produto", headerName: "Produto", width: 200 },
  { columnName: "corretor", headerName: "Corretor", width: 200 },
  { columnName: "seguradora", headerName: "Seguradora", width: 200 },
  { columnName: "tipo", headerName: "Tipo", width: 100 },
  {
    columnName: "valorComissao",
    headerName: "Comissão(R$)",
    width: 120,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "valorProduto",
    headerName: "Produto(R$)",
    width: 120,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  { columnName: "status", headerName: "Status", width: 100 },
];

const TIPO_RELATORIO = "AGENCIAMENTO";
export function RelatorioAgenciamentoComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Relatório Agenciamento</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="credit-card" size={42} />
        </View>
      </View>
      <FiltroAvancado>
        <View style={styles.containerFilter}>
          <AutocompleteCorretor />
          <SelectStatusContaPagar chave={"status"} />
        </View>
      </FiltroAvancado>
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioAgenciamento}
        tipoRelatorio={TIPO_RELATORIO}
        sortOrder={"asc"}
        sortKey={"data_pagamento"}
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
