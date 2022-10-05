import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { AutocompleteProfissao } from "@components/filtros/AutocompleteProfissao";
import { AutocompleteRamoProduto } from "@components/filtros/AutocompleteRamoProduto";
import { AutocompleteSeguradora } from "@components/filtros/AutocompleteSeguradora";
import { ColumnProps } from "@components/tabela-relatorio";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import { format } from "date-fns";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const columnPropsRelatorioVendasCanceladas: ColumnProps[] = [
  { columnName: "nomeCliente", headerName: "Cliente", width: 200 },
  { columnName: "nomeProfissao", headerName: "Profissão", width: 200 },
  { columnName: "nomeProduto", headerName: "Produto", width: 200 },
  { columnName: "nomeSeguradora", headerName: "Seguradora", width: 200 },
  { columnName: "ramoProduto", headerName: "Tipo", width: 150 },
  {
    columnName: "dataCancelamento",
    headerName: "Data Cancelamento",
    width: 130,
    align: "right",
    format: (value: number) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
];

const TIPO_RELATORIO = "CANCELADOS";
export function RelatorioVendasCanceladasComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Relatório de Vendas Canceladas</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="work-off" size={42} />
        </View>
      </View>
      <FiltroAvancado>
        <View style={styles.containerFilter}>
          <AutocompleteSeguradora />
          <AutocompleteRamoProduto placeholder="Tipo Produto" />
          <AutocompleteProfissao />
        </View>
      </FiltroAvancado>
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioVendasCanceladas}
        tipoRelatorio={TIPO_RELATORIO}
        sortOrder={"asc"}
        sortKey={"nome_cliente"}
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
