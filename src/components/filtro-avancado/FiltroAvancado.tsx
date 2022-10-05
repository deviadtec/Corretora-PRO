import { FilterAtivoAsyncActions } from "@services/store/filter-ativo/filterAtivo.async.actions";
import { useAppDispatch } from "@services/store/hooks";
import { Filter, ValueHandler } from "@services/store/types/filterAtivo.state";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RadioButton } from "react-native-paper";
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SpecificComponent } from "./SpecificComponent";
import { YearMonthComponent } from "./YearMonthComponent";

const FiltroAvancado = (props: any) => {
  const dispatch = useAppDispatch();
  const aref = useAnimatedRef<View>();
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withSpring(1) : withTiming(0)
  );
  const height = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    height: height.value * progress.value + 1,
    opacity: progress.value === 0 ? 0 : 1,
  }));
  const [filtrar, setFiltrar] = useState("");

  const filterSearch: Filter = {
    chave: "search",
    valor: filtrar,
    handler: ValueHandler.STRING,
  };

  const setFilterAtivo = async () => {
    await dispatch(FilterAtivoAsyncActions.onAddFilterAtivo(filterSearch));
  };

  const [checked, setChecked] = React.useState("monthYear");
  return (
    <View style={{ marginBottom: 10 }}>
      <TextInput
        style={{
          maxHeight: 42,
          padding: 10,
          backgroundColor: "white",
          borderRadius: 16,
          marginBottom: 10,
        }}
        placeholder="Filtrar"
        onChangeText={setFiltrar}
        onBlur={() => setFilterAtivo()}
        value={filtrar}
      />
      <View style={{ backgroundColor: "#B9C3C4", borderRadius: 16 }}>
        <TouchableWithoutFeedback
          onPress={() => {
            if (height.value === 0) {
              runOnUI(() => {
                "worklet";
                height.value = measure(aref).height;
              })();
            }
            open.value = !open.value;
          }}
        >
          <Animated.View style={styles.content}>
            <Text style={{ fontWeight: "bold", color: "#030E22" }}>
              Filtros Avançados
            </Text>
            <Icon color={"#030E22"} name="arrow-drop-down" size={28} />
          </Animated.View>
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.items, style]}>
          <View
            ref={aref}
            onLayout={({
              nativeEvent: {
                layout: { height: h },
              },
            }) => {}}
          >
            <View style={styles.contentFilterDate}>
              <RadioButton
                value="monthYear"
                status={checked === "monthYear" ? "checked" : "unchecked"}
                onPress={() => setChecked("monthYear")}
              />
              <Text>Mês/Ano</Text>
              <RadioButton
                value="specific"
                status={checked === "specific" ? "checked" : "unchecked"}
                onPress={() => setChecked("specific")}
              />
              <Text>Especificado</Text>
            </View>
            {checked === "monthYear" ? (
              <YearMonthComponent />
            ) : (
              <SpecificComponent />
            )}
            {props.children}
            <View style={{ height: 60 }}></View>
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginVertical: 5,
    backgroundColor: "white",
  },
  content: {
    backgroundColor: "#B9C3C4",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  items: {
    overflow: "hidden",
  },
  iconButton: { marginVertical: 5, borderRadius: 2, width: 70 },
  contentFilterDate: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
export default FiltroAvancado;
