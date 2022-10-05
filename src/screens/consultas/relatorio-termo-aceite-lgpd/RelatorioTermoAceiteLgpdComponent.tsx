import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { ColumnProps } from "@components/tabela-relatorio";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { format } from "date-fns";

const columnPropsRelatorioTermoAceiteLgpd: ColumnProps[] = [
  { columnName: "cliente", headerName: "Cliente", width: 200 },
  { columnName: "proposta", headerName: "Proposta", width: 120 },
  { columnName: "produto", headerName: "Produto", width: 200 },
  { columnName: "corretor", headerName: "Corretor", width: 200 },
  {
    columnName: "dataEnvio",
    headerName: "Data Envio",
    width: 150,
    format: (value: number) => {
      return format(new Date(value), "dd/MM/yyyy HH:mm:ss");
    },
  },
  { columnName: "resposta", headerName: "Resposta", width: 80 },
  {
    columnName: "dataResposta",
    headerName: "Data Resposta",
    width: 150,
    format: (value: number) => {
      return format(new Date(value), "dd/MM/yyyy HH:mm:ss");
    },
  },
];

const TIPO_RELATORIO = "TERMO_ACEITE_LGPD";
export function RelatorioTermoAceiteLgpdComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Listagem Termo de Aceite LGPD</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="security" size={42} />
        </View>
      </View>
      <FiltroAvancado />
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioTermoAceiteLgpd}
        tipoRelatorio={TIPO_RELATORIO}
        sortOrder={"desc"}
        sortKey={"data_envio"}
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
