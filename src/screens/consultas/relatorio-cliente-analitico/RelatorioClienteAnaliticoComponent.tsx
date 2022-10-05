import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { AutocompleteCorretor } from "@components/filtros/AutocompleteCorretor";
import { AutocompleteProfissao } from "@components/filtros/AutocompleteProfissao";
import { AutocompleteRamoProduto } from "@components/filtros/AutocompleteRamoProduto";
import { AutocompleteSeguradora } from "@components/filtros/AutocompleteSeguradora";
import { InputFilterComponent } from "@components/filtros/InputFilterComponent";
import { SelectStatusCliente } from "@components/filtros/SelectStatusCliente";
import { SelectTipoPessoa } from "@components/filtros/SelectTipoPessoa";
import { ColumnProps } from "@components/tabela-relatorio";
import { CurrencyUtil } from "@components/tabela-relatorio/currency";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import React from "react";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const columnPropsRelatorioClienteAnalitico: ColumnProps[] = [
  { columnName: "nomeCliente", headerName: "Cliente", width: 200 },
  {
    columnName: "pessoaFisica",
    headerName: "Tipo Pessoa",
    width: 100,
    format: (value: boolean) => {
      return value !== null ? (value ? "FÍSICA" : "JURÍDICA") : "NI";
    },
  },
  { columnName: "dataAdesao", headerName: "Data Adesao", width: 100 },
  { columnName: "emailCliente", headerName: "E-mail", width: 220 },
  {
    columnName: "telefoneCliente",
    headerName: "Telefone",
    width: 120,
  },
  { columnName: "statusCliente", headerName: "Status do Cliente", width: 100 },
  { columnName: "cidade", headerName: "Cidade", width: 200 },
  { columnName: "estado", headerName: "UF", width: 90 },
  { columnName: "nomeProfissao", headerName: "Profissão", width: 200 },
  { columnName: "nomeProduto", headerName: "Produto", width: 200 },
  { columnName: "ramoProduto", headerName: "Tipo Produto", width: 150 },
  { columnName: "corretor", headerName: "Corretor", width: 200 },
  { columnName: "nomeSeguradora", headerName: "Seguradora", width: 200 },
  {
    columnName: "valorParcela",
    headerName: "Valor Parcela(R$)",
    align: "right",
    width: 150,
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  {
    columnName: "valorBeneficio",
    headerName: "Valor Benefício(R$)",
    align: "right",
    width: 150,
    format: (value: string) => {
      return CurrencyUtil.formatValue(value);
    },
  },
  { columnName: "classificacao", headerName: "Classificação", width: 100 },
];

const TIPO_RELATORIO = "CLIENTE_ANALITICO";
export function RelatorioClienteAnaliticoComponent() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Listagem Analítica de Clientes</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="person" size={42} />
        </View>
      </View>
      <FiltroAvancado>
        <View style={styles.containerFilter}>
          <AutocompleteSeguradora />
          <AutocompleteRamoProduto />
          <SelectTipoPessoa />
          <AutocompleteCorretor />
          <AutocompleteProfissao />
          <InputFilterComponent placeholder="Estado" filterName="estado" />
          <InputFilterComponent placeholder="Cidade" filterName="cidade" />
          <SelectStatusCliente />
        </View>
      </FiltroAvancado>
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioClienteAnalitico}
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
