import { AutocompleteComponent } from "@components/AutocompleteComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import { UtilService } from "@services/util";
import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { TAutocompleteDropdownItem } from "react-native-autocomplete-dropdown";

export const URL_AUTOCOMPLETE_RAMO_PRODUTO = "ramoproduto/autocomplete/";
export function AutocompleteRamoProduto({ placeholder, filterName }: any) {
  const dispatch = useAppDispatch();

  const [ramoProdutoFilter, setRamoProdutoFilter] = useState<
    TAutocompleteDropdownItem[]
  >([]);
  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filter));
  };
  function formatDisplayRamoProduto(values: any[]) {
    setRamoProdutoFilter(
      values.map((item: any) => {
        return {
          id: item.id!.toString(),
          title: item.nome,
        };
      })
    );
  }

  function onChangeRamoProdutoFilter(value: any) {
    UtilService.autocomplete(URL_AUTOCOMPLETE_RAMO_PRODUTO, value).then(
      (response: any[]) => {
        if (response) {
          formatDisplayRamoProduto(response);
        }
      }
    );
  }

  return (
    <View style={styles.containerFilter}>
      <AutocompleteComponent
        placeholder={placeholder ? placeholder : "Ramo Produto"}
        dataSet={ramoProdutoFilter}
        onChangeText={(value: any) => onChangeRamoProdutoFilter(value)}
        addFilterAtivo={(value: any) => {
          addFilterAtivo({
            chave: filterName? filterName: "ramoProduto",
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