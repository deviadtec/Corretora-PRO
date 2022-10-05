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

const columnPropsRelatorioCaixaInterno: ColumnProps[] = [
  {
    columnName: "dataReferente",
    headerName: "Data Referente",
    width: 100,
    align: "right",
    format: (value: number) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    columnName: "valorEntrada",
    headerName: "Entrada(R$)",
    width: 120,
    align: "right",
    format: (value: any) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "valorSaida",
    headerName: "Saída(R$)",
    width: 120,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  { columnName: "descricao", headerName: "Descrição", width: 200 },
];

const TIPO_RELATORIO = "CAIXA_INTERNO";
export function RelatorioCaixaInternoComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Relatório de Caixa Interno</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="local-atm" size={42} />
        </View>
      </View>
      <FiltroAvancado />
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioCaixaInterno}
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
