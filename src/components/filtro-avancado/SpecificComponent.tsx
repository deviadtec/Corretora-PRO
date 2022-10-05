import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import { format } from "date-fns";
import moment from "moment";
import React, { useEffect, useState } from "react";

import { StyleSheet, TextInput, View } from "react-native";
import { Text } from "react-native-paper";

export function SpecificComponent() {
  const dispatch = useAppDispatch();
  const [inicio, setInicio] = useState(format(new Date(), "dd/MM/yyyy"));
  const [fim, setFim] = useState(format(new Date(), "dd/MM/yyyy"));
  const [filterInitialized, setFilterInitialized] = useState(false);
  const addFilterAtivo = async (filter: Filter) => {
    await dispatch(
      FilterAtivoAsyncActions.onAddFilterAtivoDateSpecific(filter)
    );
  };
  useEffect(() => {
    if (!filterInitialized) {
      setValueFilter("dataInicio", inicio, ValueHandler.DATE);
      setValueFilter("dataFim", inicio, ValueHandler.DATE);
      setFilterInitialized(true);
    }
  });

  const maskDate = (value: any) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };

  async function setValueFilter(
    chave: string,
    value: any,
    handler: ValueHandler
  ) {
    addFilterAtivo({
      chave: chave,
      valor: moment(value, "DD/MM/YYYY", true).format(),
      handler: handler,
    });
  }

  return (
    <View style={styles.container}>
      <View style={{ marginEnd: 10 }}>
        <Text style={styles.titleFilter}>De</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setInicio(maskDate(e))}
          onBlur={() => setValueFilter("dataInicio", inicio, ValueHandler.DATE)}
          keyboardType="numeric"
          value={inicio}
        />
      </View>
      <View>
        <Text style={styles.titleFilter}>Até</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setFim(maskDate(e))}
          onBlur={() => setValueFilter("dataFim", fim, ValueHandler.DATE)}
          keyboardType="numeric"
          value={fim}
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
  titleFilter: { color: "gray", paddingLeft: 10, fontSize: 12 },
  input: {
    height: 42,
    backgroundColor: "white",
    width: 100,
    textAlign: "center",
    borderRadius: 25,
  },
});
