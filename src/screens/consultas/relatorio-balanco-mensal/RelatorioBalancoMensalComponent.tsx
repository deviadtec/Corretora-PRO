import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { ColumnProps } from "@components/tabela-relatorio";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import { format } from "date-fns";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { CurrencyUtil } from "@components/tabela-relatorio/currency";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const columnPropsRelatorioBalancoMensal: ColumnProps[] = [
  { columnName: "nome", headerName: "Nome", width: 200 },
  { columnName: "tipo", headerName: "Tipo", width: 90 },
  {
    columnName: "dataReferente",
    headerName: "Referência",
    width: 100,
    align: "right",
  },
  {
    columnName: "totalContasPagar",
    headerName: "À Pagar(R$)",
    width: 120,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "totalContasReceber",
    headerName: "À Receber(R$)",
    width: 120,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "saldo",
    headerName: "Saldo(R$)",
    width: 120,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
];

const TIPO_RELATORIO = "BALANCO_MENSAL";
export function RelatorioBalancoMensalComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Balanço Mensal</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="trending-flat" size={42} />
        </View>
      </View>
      <FiltroAvancado />
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioBalancoMensal}
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
