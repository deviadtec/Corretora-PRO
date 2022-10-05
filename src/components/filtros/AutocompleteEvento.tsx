import { AutocompleteComponent } from "@components/AutocompleteComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import { UtilService } from "@services/util";
import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { TAutocompleteDropdownItem } from "react-native-autocomplete-dropdown";

export const URL_AUTOCOMPLETE_EVENTO = "evento/autocomplete?search=";
export function AutocompleteEvento() {
  const dispatch = useAppDispatch();

  const [eventoFilter, setEventoFilter] = useState<
    TAutocompleteDropdownItem[]
  >([]);
  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filter));
  };
  function formatDisplayEvento(values: any[]) {
    setEventoFilter(
      values.map((item: any) => {
        return {
          id: item.id!.toString(),
          title: item.nome,
        };
      })
    );
  }

  function onChangeEventoFilter(value: any) {
    UtilService.autocompleteSearch(URL_AUTOCOMPLETE_EVENTO, value).then(
      (response: any[]) => {
        if (response) {
          formatDisplayEvento(response);
        }
      }
    );
  }

  return (
    <View style={styles.containerFilter}>
      <AutocompleteComponent
        placeholder="Evento"
        dataSet={eventoFilter}
        onChangeText={(value: any) => onChangeEventoFilter(value)}
        addFilterAtivo={(value: any) => {
          addFilterAtivo({
            chave: "evento",
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
