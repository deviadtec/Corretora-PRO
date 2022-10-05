import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { AutocompleteTipoContaPagar } from "@components/filtros/AutocompleteTipoContaPagar";
import { SelectStatusContaPagar } from "@components/filtros/SelectStatusContaPagar";
import { SelectTipoPagamento } from "@components/filtros/SelectTipoPagamento";
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
import { RelatorioContaPagar } from ".";

import Icon from "react-native-vector-icons/MaterialIcons";
const columnPropsRelatorioContaPagarCorretor: ColumnProps[] = [
  { columnName: "nome", headerName: "Corretor", width: 250 },
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

const TIPO_RELATORIO = "CONTA_PAGAR_CORRETOR";
export function RelatorioContaPagarComponent({ navigation }: any) {
  const dispatch = useAppDispatch();

  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filter));
  };

  async function redirect(entity: RelatorioContaPagar) {
    await addFilterAtivo({ chave: "idCorretor", valor: entity.corretorId });
    navigation.navigate("RelatorioContaPagarCorretorComponent");
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Relatório de Conta Pagar Corretor</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="trending-down" size={42} />
        </View>
      </View>
      <FiltroAvancado>
        <View style={styles.containerFilter}>
          <AutocompleteTipoContaPagar />
          <SelectTipoPagamento />
          <SelectStatusContaPagar />
        </View>
      </FiltroAvancado>
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioContaPagarCorretor}
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
