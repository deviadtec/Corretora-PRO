import { fluxoCaixaFilterData } from "@components/filtro-avancado/model";
import { SelectComponent } from "@components/SelectComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import React from "react";

import { StyleSheet, View } from "react-native";

export function SelectFluxoCaixa() {
  const dispatch = useAppDispatch();
  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filter));
  };

  async function setValueFilter(
    chave: string,
    value: any,
    handler: ValueHandler
  ) {
    addFilterAtivo({
      chave: chave,
      valor: value,
      handler: handler,
    });
  }
  return (
    <View style={styles.containerFilter}>
      <SelectComponent
        options={fluxoCaixaFilterData}
        placeholder={"Fluxo de Caixa"}
        setValueFilter={(response: any) => {
          setValueFilter("tipoFluxoCaixa", response, ValueHandler.STRING);
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
