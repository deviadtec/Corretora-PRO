import { AutocompleteComponent } from "@components/AutocompleteComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import { UtilService } from "@services/util";
import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { TAutocompleteDropdownItem } from "react-native-autocomplete-dropdown";

export const URL_AUTOCOMPLETE_SEGURADORA = "seguradora/autocomplete/";
export function AutocompleteSeguradora() {
  const dispatch = useAppDispatch();

  const [seguradoraFilter, setSeguradoraFilter] = useState<
    TAutocompleteDropdownItem[]
  >([]);
  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filter));
  };
  function formatDisplaySeguradora(values: any[]) {
    setSeguradoraFilter(
      values.map((item: any) => {
        return {
          id: item.id!.toString(),
          title: item.nome,
        };
      })
    );
  }

  function onChangeSeguradoraFilter(value: any) {
    UtilService.autocomplete(URL_AUTOCOMPLETE_SEGURADORA, value).then(
      (response: any[]) => {
        if (response) {
          formatDisplaySeguradora(response);
        }
      }
    );
  }

  return (
    <View style={styles.containerFilter}>
      <AutocompleteComponent
        placeholder="Seguradora"
        dataSet={seguradoraFilter}
        onChangeText={(value: any) => onChangeSeguradoraFilter(value)}
        addFilterAtivo={(value: any) => {
          addFilterAtivo({
            chave: "seguradora",
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
