import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { ColumnProps } from "@components/tabela-relatorio";
import { CurrencyUtil } from "@components/tabela-relatorio/currency";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter } from "@services/store/types/filterAtivo.state";
import React from "react";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { RelatorioContaReceber } from ".";

import Icon from "react-native-vector-icons/MaterialIcons";
const columnPropsRelatorioContaReceber: ColumnProps[] = [
  { columnName: "nome", headerName: "Corretor/Seguradora", width: 250 },
  {
    columnName: "agenciamento",
    headerName: "AGTO(R$)",
    align: "right",
    width: 100,
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "comissionamento",
    headerName: "CMTO(R$)",
    align: "right",
    width: 100,
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "outros",
    headerName: "Outros(R$)",
    align: "right",
    width: 100,
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "valorTotal",
    headerName: "Total(R$)",
    align: "right",
    width: 100,
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "edit",
    headerName: "",
    align: "right",
    width: 40,
  },
];

const TIPO_RELATORIO = "CONTA_RECEBER";
export function RelatorioContaReceberComponent({ navigation }: any) {
  const dispatch = useAppDispatch();

  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filter));
  };

  async function redirect(entity: RelatorioContaReceber) {
    await addFilterAtivo({ chave: "corretorId", valor: entity.corretorId });
    navigation.navigate("RelatorioContaReceberPagadorComponent");
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Relatório Conta Receber</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="trending-up" size={42} />
        </View>
      </View>
      <FiltroAvancado />
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioContaReceber}
        tipoRelatorio={TIPO_RELATORIO}
        sortOrder={"asc"}
        sortKey={"nome"}
        redirect={(value: any) => redirect(value)}
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
