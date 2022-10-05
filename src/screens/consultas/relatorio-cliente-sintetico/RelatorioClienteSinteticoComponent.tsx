import FiltroAvancado from "@components/filtro-avancado/FiltroAvancado";
import { AutocompleteCorretor } from "@components/filtros/AutocompleteCorretor";
import { AutocompleteProfissao } from "@components/filtros/AutocompleteProfissao";
import { InputFilterComponent } from "@components/filtros/InputFilterComponent";
import { SelectStatusCliente } from "@components/filtros/SelectStatusCliente";
import { SelectTipoPessoa } from "@components/filtros/SelectTipoPessoa";
import { ColumnProps } from "@components/tabela-relatorio";
import { RelatorioTableFexComponent } from "@components/tabela-relatorio/RelatorioTableFexComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter } from "@services/store/types/filterAtivo.state";
import React from "react";

import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RelatorioClienteSintetico } from ".";

const columnPropsRelatorioClienteSintetico: ColumnProps[] = [
  { columnName: "nomeCliente", headerName: "Cliente", width: 200 },
  { columnName: "dataAdesao", headerName: "Data Adesao", width: 100 },
  { columnName: "emailCliente", headerName: "E-mail", width: 220 },
  {
    columnName: "telefoneCliente",
    headerName: "Telefone",
    width: 120,
  },
  { columnName: "statusCliente", headerName: "Status do Cliente", width: 100 },
  { columnName: "cidade", headerName: "Cidade", width: 200 },
  { columnName: "nomeProfissao", headerName: "Profissão", width: 200 },
  {
    columnName: "edit",
    headerName: "",
    align: "right",
    width: 40,
  },
];

const TIPO_RELATORIO = "CLIENTE";
export function RelatorioClienteSinteticoComponent({ navigation }: any) {
  const dispatch = useAppDispatch();

  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filter));
  };

  async function redirect(entity: RelatorioClienteSintetico) {
    await addFilterAtivo({ chave: "idCliente", valor: entity.idCliente });
    navigation.navigate("RelatorioClienteProdutoComponent");
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containnerTitle}>
          <Text style={styles.title}>Listagem de Clientes</Text>
        </View>
        <View style={styles.containnerIcon}>
          <Icon color={"#FACA3C"} name="face" size={42} />
        </View>
      </View>
      <FiltroAvancado>
        <View style={styles.containerFilter}>
          <SelectTipoPessoa />
          <AutocompleteProfissao />
          <InputFilterComponent placeholder="Estado" filterName="estado" />
          <InputFilterComponent placeholder="Cidade" filterName="cidade" />
          <SelectStatusCliente />
          <AutocompleteCorretor />
        </View>
      </FiltroAvancado>
      <RelatorioTableFexComponent
        columnProps={columnPropsRelatorioClienteSintetico}
        tipoRelatorio={TIPO_RELATORIO}
        sortOrder={"asc"}
        sortKey={"nome_cliente"}
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
