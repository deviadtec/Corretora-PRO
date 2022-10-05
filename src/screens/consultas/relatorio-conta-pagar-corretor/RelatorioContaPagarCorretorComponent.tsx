import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { AutocompleteTipoContaPagar } from "@components/filtros/AutocompleteTipoContaPagar";
import { SelectFluxoCaixa } from "@components/filtros/SelectFluxoCaixa";
import { SelectStatusContaPagar } from "@components/filtros/SelectStatusContaPagar";
import { SelectTipoPagamento } from "@components/filtros/SelectTipoPagamento";
import { ColumnProps } from "@components/tabela-relatorio";
import { CurrencyUtil } from "@components/tabela-relatorio/currency";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import { format } from "date-fns";
import React from "react";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const columnPropsRelatorioContaPagarCorretor: ColumnProps[] = [
  { columnName: "cliente", headerName: "Cliente/Descrição", width: 200 },
  { columnName: "produto", headerName: "Produto", width: 200 },
  { columnName: "seguradora", headerName: "Seguradora", width: 200 },
  { columnName: "siglaContaPagar", headerName: "Tipo", width: 90 },
  {
    columnName: "dataPagamento",
    headerName: "Data Pagamento",
    width: 120,
    align: "right",
    format: (value: number) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  { columnName: "parcela", headerName: "Parcela", width: 60, align: "right" },
  {
    columnName: "fluxoCaixa",
    headerName: "Fluxo Caixa",
    width: 90,
    format: (value: boolean) => {
      return value !== null ? (value ? "Sim" : "Não") : "NI";
    },
  },
  {
    columnName: "valor",
    headerName: "Comissão(R$)",
    width: 120,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "valorReferencia",
    headerName: "Total(R$)",
    width: 120,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "percentual",
    headerName: "%",
    width: 60,
    align: "right",
    format: (value: number) => {
      return value.toFixed(2);
    },
  },
  { columnName: "status", headerName: "Status", width: 120 },
];

const TIPO_RELATORIO = "CONTA_PAGAR_RECEBEDOR";
export function RelatorioContaPagarCorretorComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Relatório de Conta Pagar</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="trending-down" size={42} />
        </View>
      </View>
      <FiltroAvancado>
        <View style={styles.containerFilter}>
          <AutocompleteTipoContaPagar />
          <SelectTipoPagamento />
          <SelectStatusContaPagar />
          <SelectFluxoCaixa />
        </View>
      </FiltroAvancado>
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioContaPagarCorretor}
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
