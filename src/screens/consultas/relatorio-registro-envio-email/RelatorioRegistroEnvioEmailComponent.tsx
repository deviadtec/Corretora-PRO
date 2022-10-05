import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { ColumnProps } from "@components/tabela-relatorio";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const columnPropsRelatorioRegistroEnvioEmail: ColumnProps[] = [
  { columnName: "cliente", headerName: "Cliente", width: 200 },
  { columnName: "proposta", headerName: "Proposta", width: 120 },
  { columnName: "produtoVenda", headerName: "Produto Venda", width: 200 },
  { columnName: "descricao", headerName: "Descrição", width: 200 },
  { columnName: "dataEnvio", headerName: "Data Envio", width: 150 },
];

const TIPO_RELATORIO = "REGISTRO_ENVIO_EMAIL";
export function RelatorioRegistroEnvioEmailComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Listagem Registro Envio de Email</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="email" size={42} />
        </View>
      </View>
      <FiltroAvancado />
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioRegistroEnvioEmail}
        tipoRelatorio={TIPO_RELATORIO}
        sortOrder={"asc"}
        sortKey={"descricao"}
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
