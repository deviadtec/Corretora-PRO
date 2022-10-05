import { AutocompleteComponent } from "@components/AutocompleteComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import { UtilService } from "@services/util";
import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { TAutocompleteDropdownItem } from "react-native-autocomplete-dropdown";

export const URL_AUTOCOMPLETE_CLIENTE = "cliente/autocomplete?search=";
export function AutocompleteTipoContaPagar() {
  const dispatch = useAppDispatch();
  const [tipoContaPagarFilter, setTipoContaPagarFilter] = useState<
    TAutocompleteDropdownItem[]
  >([]);
  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filter));
  };

  function formatDisplayTipoContaPagar(values: any[]) {
    setTipoContaPagarFilter(
      values.map((item: any) => {
        return {
          id: item.id!.toString(),
          title: item.nome,
        };
      })
    );
  }

  function onChangeTipoContaPagarFilter(value: any) {
    UtilService.autocompleteSearch(URL_AUTOCOMPLETE_CLIENTE, value).then(
      (response: any[]) => {
        if (response) {
          formatDisplayTipoContaPagar(response);
        }
      }
    );
  }
  return (
    <View style={styles.containerFilter}>
      <AutocompleteComponent
        placeholder="Tipo Conta Pagar"
        dataSet={tipoContaPagarFilter}
        onChangeText={(value: any) => onChangeTipoContaPagarFilter(value)}
        addFilterAtivo={(value: any) => {
          addFilterAtivo({
            chave: "tipoContaPagar",
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
