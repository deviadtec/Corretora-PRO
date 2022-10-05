import { AutocompleteComponent } from "@components/AutocompleteComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import { UtilService } from "@services/util";
import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { TAutocompleteDropdownItem } from "react-native-autocomplete-dropdown";

export const URL_AUTOCOMPLETE_PRODUTO = "produto/autocomplete/";
export function AutocompleteProduto() {
  const dispatch = useAppDispatch();

  const [produtoFilter, setProdutoFilter] = useState<
    TAutocompleteDropdownItem[]
  >([]);

  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filter));
  };

  function formatDisplayProduto(values: any[]) {
    setProdutoFilter(
      values.map((item: any) => {
        return {
          id: item.id!.toString(),
          title: item.nome,
        };
      })
    );
  }

  function onChangeProdutoFilter(value: any) {
    UtilService.autocomplete(URL_AUTOCOMPLETE_PRODUTO, value).then(
      (response: any[]) => {
        if (response) {
          formatDisplayProduto(response);
        }
      }
    );
  }
  return (
    <View style={styles.containerFilter}>
      <AutocompleteComponent
        placeholder="Produto"
        dataSet={produtoFilter}
        onChangeText={(value: any) => onChangeProdutoFilter(value)}
        addFilterAtivo={(value: any) => {
          addFilterAtivo({
            chave: "produto",
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
