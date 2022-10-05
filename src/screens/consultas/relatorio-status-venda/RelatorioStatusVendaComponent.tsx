import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { AutocompleteCorretor } from "@components/filtros/AutocompleteCorretor";
import { AutocompleteProfissao } from "@components/filtros/AutocompleteProfissao";
import { AutocompleteSeguradora } from "@components/filtros/AutocompleteSeguradora";
import { SelectStatusProdutoVenda } from "@components/filtros/SelectStatusProdutoVenda";
import { ColumnProps } from "@components/tabela-relatorio";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const columnPropsRelatorioStatusVenda: ColumnProps[] = [
  { columnName: "clienteNome", headerName: "Nome", width: 200 },
  { columnName: "profissaoNome", headerName: "Profissão", width: 200 },
  { columnName: "seguradoraNome", headerName: "Seguradora", width: 200 },
  { columnName: "statusProduto", headerName: "Status", width: 100 },
  { columnName: "tipoProduto", headerName: "Tipo", width: 150 },
  {
    columnName: "dataCadastro",
    headerName: "Data Cadastro",
    width: 130,
    align: "right",
  },
];

const TIPO_RELATORIO = "STATUS_PROPOSTA";
export function RelatorioStatusVendaComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Vendas por Status</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="shopping-cart" size={42} />
        </View>
      </View>
      <FiltroAvancado>
        <View style={styles.containerFilter}>
          <AutocompleteSeguradora />
          <SelectStatusProdutoVenda />
          <AutocompleteProfissao />
          <AutocompleteCorretor />
        </View>
      </FiltroAvancado>
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioStatusVenda}
        tipoRelatorio={TIPO_RELATORIO}
        sortOrder={"asc"}
        sortKey={"cliente_nome"}
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
  title: { color: "#D6D9D4", fontSize: 24, fontWeight: "bold" },
  containnerIcon: { width: "20%", padding: 10, justifyContent: "center" },
});
