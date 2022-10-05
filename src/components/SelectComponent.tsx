import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export function SelectComponent({ options, placeholder, setValueFilter, initialValue }: any) {
  const [value, setValue] = useState(initialValue ? initialValue : "");
  return (
    <View style={styles.containnerFilter}>
      <Text style={styles.titleFilter}>{placeholder}</Text>
      <View style={styles.contentFilter}>
        <Picker
          numberOfLines={1}
          selectedValue={value}
          onValueChange={(selected, itemIndex) => {
            setValue(selected);
            setValueFilter(selected);
          }}
          mode="dialog"
        >
          <Picker.Item label="" value="" />
          {options.map((item: any, key: any) => {
            return (
              <Picker.Item key={key} label={item.label} value={item.value} />
            );
          })}
        </Picker>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  titleFilter: { color: "gray", paddingLeft: 10, fontSize: 12 },
  containnerFilter: { height: 65 },
  contentFilter: {
    backgroundColor: "white",
    borderRadius: 20,
    maxHeight: 42,
    justifyContent: "center",
  },
});
