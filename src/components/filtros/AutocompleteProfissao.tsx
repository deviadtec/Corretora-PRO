import { AutocompleteComponent } from "@components/AutocompleteComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import { UtilService } from "@services/util";
import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { TAutocompleteDropdownItem } from "react-native-autocomplete-dropdown";

export const URL_AUTOCOMPLETE_PROFISSAO = "profissao/autocomplete/";
export function AutocompleteProfissao() {
  const dispatch = useAppDispatch();

  const [profissaoFilter, setProfissaoFilter] = useState<
    TAutocompleteDropdownItem[]
  >([]);

  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filter));
  };

  function formatDisplayProfissao(values: any[]) {
    setProfissaoFilter(
      values.map((item: any) => {
        return {
          id: item.id!.toString(),
          title: item.nome,
        };
      })
    );
  }

  function onChangeProfissaoFilter(value: any) {
    UtilService.autocomplete(URL_AUTOCOMPLETE_PROFISSAO, value).then(
      (response: any[]) => {
        if (response) {
          formatDisplayProfissao(response);
        }
      }
    );
  }
  return (
    <View style={styles.containerFilter}>
      <AutocompleteComponent
        placeholder="Profissão"
        dataSet={profissaoFilter}
        onChangeText={(value: any) => onChangeProfissaoFilter(value)}
        addFilterAtivo={(value: any) => {
          addFilterAtivo({
            chave: "profissao",
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
