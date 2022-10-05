import { AutocompleteComponent } from "@components/AutocompleteComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import { UtilService } from "@services/util";
import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { TAutocompleteDropdownItem } from "react-native-autocomplete-dropdown";

export const URL_AUTOCOMPLETE_CLIENTE = "cliente/autocomplete?search=";
export function AutocompleteCliente() {
  const dispatch = useAppDispatch();
  const [clienteFilter, setClienteFilter] = useState<
    TAutocompleteDropdownItem[]
  >([]);
  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filter));
  };

  function formatDisplayCliente(values: any[]) {
    setClienteFilter(
      values.map((item: any) => {
        return {
          id: item.id!.toString(),
          title: item.nome,
        };
      })
    );
  }

  function onChangeClienteFilter(value: any) {
    UtilService.autocompleteSearch(URL_AUTOCOMPLETE_CLIENTE, value).then(
      (response: any[]) => {
        if (response) {
          formatDisplayCliente(response);
        }
      }
    );
  }
  return (
    <View style={styles.containerFilter}>
      <AutocompleteComponent
        placeholder="Cliente"
        dataSet={clienteFilter}
        onChangeText={(value: any) => onChangeClienteFilter(value)}
        addFilterAtivo={(value: any) => {
          addFilterAtivo({
            chave: "cliente",
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
