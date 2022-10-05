import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { ColumnProps } from "@components/tabela-relatorio";
import { CurrencyUtil } from "@components/tabela-relatorio/currency";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import { format } from "date-fns";
import React from "react";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const columnPropsRelatorioContaReceberPagador: ColumnProps[] = [
  { columnName: "corretor", headerName: "Corretor", width: 200 },
  { columnName: "seguradora", headerName: "Seguradora", width: 200 },
  { columnName: "siglaContaReceber", headerName: "Tipo", width: 90 },
  {
    columnName: "dataReferente",
    headerName: "Data Referente",
    width: 120,
    align: "right",
    format: (value: number) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
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
    columnName: "valor",
    headerName: "Valor Pagamento(R$)",
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
];

const TIPO_RELATORIO = "CONTA_RECEBER_PAGADOR";
export function RelatorioContaReceberPagadorComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Relatório de Conta Receber</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="trending-up" size={42} />
        </View>
      </View>
      <FiltroAvancado />
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioContaReceberPagador}
        tipoRelatorio={TIPO_RELATORIO}
        sortOrder={"asc"}
        sortKey={"data_referente"}
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
