import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { AutocompleteProfissao } from "@components/filtros/AutocompleteProfissao";
import { AutocompleteSeguradora } from "@components/filtros/AutocompleteSeguradora";
import { ColumnProps } from "@components/tabela-relatorio";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { AutocompleteCliente } from "@components/filtros/AutocompleteCliente";
import { AutocompleteCorretor } from "@components/filtros/AutocompleteCorretor";
import { AutocompleteEvento } from "@components/filtros/AutocompleteEvento";
import { InputFilterComponent } from "@components/filtros/InputFilterComponent";
import { SelectSexo } from "@components/filtros/SelectSexo";
import { CurrencyUtil } from "@components/tabela-relatorio/currency";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

const columnPropsRelatorioBeneficio: ColumnProps[] = [
  { columnName: "dataPagamento", headerName: "Data Pagamento", width: 110 },
  { columnName: "nomeCorretor", headerName: "Corretor", width: 200 },
  { columnName: "nomeCliente", headerName: "Cliente", width: 200 },
  { columnName: "sexoCliente", headerName: "Sexo", width: 90 },
  { columnName: "profissaoCliente", headerName: "Profissão", width: 150 },
  { columnName: "cidadeCliente", headerName: "Cidade", width: 180 },
  { columnName: "ufCliente", headerName: "UF", width: 50 },
  { columnName: "nomeEvento", headerName: "Evento", width: 150 },
  {
    columnName: "valor",
    headerName: "Valor(R$)",
    align: "right",
    width: 150,
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  { columnName: "nomeSeguradora", headerName: "Seguradora", width: 200 },
];

const TIPO_RELATORIO = "BENEFICIO";
export function RelatorioBeneficioComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Relatório de Benefício</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="attach-money" size={42} />
        </View>
      </View>
      <FiltroAvancado>
        <View style={styles.containerFilter}>
          <AutocompleteCliente />
          <AutocompleteSeguradora />
          <AutocompleteProfissao />
          <SelectSexo />
          <InputFilterComponent placeholder="Cidade" filterName="cidade" />
          <InputFilterComponent placeholder="Estado" filterName="estado" />
          <AutocompleteEvento />
          <AutocompleteCorretor />
        </View>
      </FiltroAvancado>
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioBeneficio}
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
