import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { AutocompleteCorretor } from "@components/filtros/AutocompleteCorretor";
import { AutocompleteProfissao } from "@components/filtros/AutocompleteProfissao";
import { InputFilterComponent } from "@components/filtros/InputFilterComponent";
import { SelectStatusCliente } from "@components/filtros/SelectStatusCliente";
import { ColumnProps } from "@components/tabela-relatorio";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import React from "react";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const columnPropsRelatorioAniversariante: ColumnProps[] = [
  { columnName: "nome", headerName: "Nome", width: 200 },
  { columnName: "tipo", headerName: "Tipo", width: 100 },
  { columnName: "status", headerName: "Status", width: 100 },
  { columnName: "nomeProfissao", headerName: "Profissão", width: 200 },
  {
    columnName: "dataDeNascimento",
    headerName: "Data de Nascimento",
    width: 130,
    align: "right",
  },
  {
    columnName: "nomeCorretor",
    headerName: "Corretor",
    width: 200,
  },
];

const TIPO_RELATORIO = "ANIVERSARIANTE";
export function RelatorioAniversarianteComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Listagem de Aniversariantes</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="format-list-bulleted" size={42} />
        </View>
      </View>
      <FiltroAvancado>
        <View style={styles.containerFilter}>
          <InputFilterComponent placeholder="Estado" filterName="estado" />
          <InputFilterComponent placeholder="Cidade" filterName="cidade" />
          <AutocompleteCorretor />
          <AutocompleteProfissao />
          <SelectStatusCliente />
        </View>
      </FiltroAvancado>
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioAniversariante}
        tipoRelatorio={TIPO_RELATORIO}
        sortOrder={"asc"}
        sortKey={"nome"}
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
