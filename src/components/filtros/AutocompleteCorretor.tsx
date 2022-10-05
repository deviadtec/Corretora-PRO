import { AutocompleteComponent } from "@components/AutocompleteComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import { UtilService } from "@services/util";
import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { TAutocompleteDropdownItem } from "react-native-autocomplete-dropdown";

export const URL_AUTOCOMPLETE_CORRETOR = "corretor/autocomplete?search=";
export function AutocompleteCorretor() {
  const dispatch = useAppDispatch();

  const [corretorFilter, setCorretorFilter] = useState<
    TAutocompleteDropdownItem[]
  >([]);
  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filter));
  };
  function formatDisplayCorretor(values: any[]) {
    setCorretorFilter(
      values.map((item: any) => {
        return {
          id: item.id!.toString(),
          title: item.nome,
        };
      })
    );
  }

  function onChangeCorretorFilter(value: any) {
    UtilService.autocompleteSearch(URL_AUTOCOMPLETE_CORRETOR, value).then(
      (response: any[]) => {
        if (response) {
          formatDisplayCorretor(response);
        }
      }
    );
  }

  return (
    <View style={styles.containerFilter}>
      <AutocompleteComponent
        placeholder="Corretor"
        dataSet={corretorFilter}
        onChangeText={(value: any) => onChangeCorretorFilter(value)}
        addFilterAtivo={(value: any) => {
          addFilterAtivo({
            chave: "corretor",
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
