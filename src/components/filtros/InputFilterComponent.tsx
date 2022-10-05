import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import React, { useState } from "react";

import { StyleSheet, Text, TextInput, View } from "react-native";

export function InputFilterComponent({ placeholder, filterName }: any) {
  const [value, setValue] = useState("");
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
      <Text style={styles.titleFilter}>{placeholder}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setValue(value);
        }}
        onBlur={() => setValueFilter(filterName, value, ValueHandler.STRING)}
        value={value}
        autoCorrect={false}
        placeholderTextColor="black"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  containerFilter: {
    height: 65,
    width: 210,
  },
  input: {
    height: 42,
    backgroundColor: "white",
    paddingHorizontal: 12,
    borderRadius: 25,
  },
  titleFilter: { color: "gray", paddingLeft: 10, fontSize: 12 },
});
