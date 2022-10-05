import { SelectComponent } from "@components/SelectComponent";
import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import React, { useEffect, useState } from "react";

import { StyleSheet, TextInput, View } from "react-native";
import { Text } from "react-native-paper";
import { MONTHS } from "./model";

export function YearMonthComponent() {
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [month] = useState(new Date().getMonth() + 1);
  const [filterInitialized, setFilterInitialized] = useState(false);
  const dispatch = useAppDispatch();
  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivoMonthYear(filter));
  };
  const maskOnlyNumbers = (value: any) => {
    return value.replace(/\D/g, "").replace(/(\d{4})(\d)/, "$1");
  };

  async function setValueFilter(
    chave: string,
    value: any,
    handler: ValueHandler
  ) {
    if (!value) {
      value = new Date().getFullYear().toString();
    }
    addFilterAtivo({
      chave: chave,
      valor: value,
      handler: handler,
    });
  }

  useEffect(() => {
    if (!filterInitialized) {
      setValueFilter("meses", month.toString(), ValueHandler.INT_ARRAY);
      setValueFilter("ano", year, ValueHandler.LONG);
      setFilterInitialized(true);
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.contentSelect}>
        <SelectComponent
          options={MONTHS}
          placeholder={"Mês"}
          setValueFilter={(response: any) => {
            setValueFilter("meses", response, ValueHandler.INT_ARRAY);
          }}
          initialValue={month.toString()}
        />
      </View>
      <View>
        <Text style={styles.titleFilter}>Ano</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setYear(maskOnlyNumbers(e))}
          onBlur={() => setValueFilter("ano", year, ValueHandler.LONG)}
          keyboardType="numeric"
          value={year}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    height: 70,
  },
  contentSelect: { width: 170, marginRight: 10 },
  input: {
    height: 42,
    backgroundColor: "white",
    width: 70,
    textAlign: "center",
    borderRadius: 25,
  },
  titleFilter: { color: "gray", paddingLeft: 10, fontSize: 12 },
});
