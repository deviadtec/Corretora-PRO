import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { ColumnProps } from "@components/tabela-relatorio";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { CurrencyUtil } from "@components/tabela-relatorio/currency";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const columnPropsRelatorioVendaDebitoAutomatico: ColumnProps[] = [
  { columnName: "proposta", headerName: "Proposta", width: 120 },
  { columnName: "nomeCliente", headerName: "Cliente", width: 200 },
  { columnName: "cpfCnpj", headerName: "CPF/CNPJ", width: 100 },
  { columnName: "dataIngresso", headerName: "Data Ingresso", width: 120 },
  { columnName: "nomeSeguradora", headerName: "Seguradora", width: 200 },
  {
    columnName: "valorProposta",
    headerName: "Valor Proposta(R$)",
    width: 120,
    align: "right",
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  { columnName: "nomeBanco", headerName: "Banco", width: 120 },
  { columnName: "corretor", headerName: "Corretor", width: 200 },
];

const TIPO_RELATORIO = "VENDA_DEBITO_AUTOMATICO";
export function RelatorioVendaDebitoAutomaticoComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>
            Relatório Venda com Débito Automático
          </Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="account-balance" size={42} />
        </View>
      </View>
      <FiltroAvancado />
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioVendaDebitoAutomatico}
        tipoRelatorio={TIPO_RELATORIO}
        sortOrder={"asc"}
        sortKey={"data_ingresso,seguradora,produto,cliente"}
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
