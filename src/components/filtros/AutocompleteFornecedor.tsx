import { AutocompleteComponent } from "@components/AutocompleteComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import { UtilService } from "@services/util";
import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { TAutocompleteDropdownItem } from "react-native-autocomplete-dropdown";

export const URL_AUTOCOMPLETE_FORNECEDOR = "fornecedor/autocomplete?search=";
export function AutocompleteFornecedor() {
  const dispatch = useAppDispatch();

  const [fornecedorFilter, setFornecedorFilter] = useState<
    TAutocompleteDropdownItem[]
  >([]);
  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filter));
  };
  function formatDisplayFornecedor(values: any[]) {
    setFornecedorFilter(
      values.map((item: any) => {
        return {
          id: item.id!.toString(),
          title: item.nome,
        };
      })
    );
  }

  function onChangeFornecedorFilter(value: any) {
    UtilService.autocompleteSearch(URL_AUTOCOMPLETE_FORNECEDOR, value).then(
      (response: any[]) => {
        if (response) {
          formatDisplayFornecedor(response);
        }
      }
    );
  }

  return (
    <View style={styles.containerFilter}>
      <AutocompleteComponent
        placeholder="Fornecedor"
        dataSet={fornecedorFilter}
        onChangeText={(value: any) => onChangeFornecedorFilter(value)}
        addFilterAtivo={(value: any) => {
          addFilterAtivo({
            chave: "fornecedor",
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
