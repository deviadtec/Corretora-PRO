import { tipoPagamentoFilterData } from "@components/filtro-avancado/model";
import { SelectComponent } from "@components/SelectComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import React from "react";

import { StyleSheet, View } from "react-native";

export function SelectTipoPagamento() {
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
        options={tipoPagamentoFilterData}
        placeholder={"Tipo Pagamento"}
        setValueFilter={(response: any) => {
          setValueFilter("tipoPagamento", response, ValueHandler.STRING);
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
