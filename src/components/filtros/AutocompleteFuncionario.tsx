import { AutocompleteComponent } from "@components/AutocompleteComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import { UtilService } from "@services/util";
import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { TAutocompleteDropdownItem } from "react-native-autocomplete-dropdown";

export const URL_AUTOCOMPLETE_FUNCIONARIO = "funcionario/autocomplete?search=";
export function AutocompleteFuncionario() {
  const dispatch = useAppDispatch();

  const [funcionarioFilter, setFuncionarioFilter] = useState<
    TAutocompleteDropdownItem[]
  >([]);

  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filter));
  };

  function formatDisplayFuncionario(values: any[]) {
    setFuncionarioFilter(
      values.map((item: any) => {
        return {
          id: item.id!.toString(),
          title: item.nome,
        };
      })
    );
  }

  function onChangeFuncionarioFilter(value: any) {
    UtilService.autocompleteSearch(URL_AUTOCOMPLETE_FUNCIONARIO, value).then(
      (response: any[]) => {
        if (response) {
          formatDisplayFuncionario(response);
        }
      }
    );
  }
  return (
    <View style={styles.containerFilter}>
      <AutocompleteComponent
        placeholder="Funcionario"
        dataSet={funcionarioFilter}
        onChangeText={(value: any) => onChangeFuncionarioFilter(value)}
        addFilterAtivo={(value: any) => {
          addFilterAtivo({
            chave: "funcionario",
            valor: value ? value.id : "",
            handler: ValueHandler.LONG,
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerFilter: {
    height: 65,
  },
});
