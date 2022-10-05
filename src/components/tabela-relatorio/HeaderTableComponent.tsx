import React from "react";

import { StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { ColumnProps } from ".";

export function HeaderTableComponent({ itens, columnProps }: any) {
  return (
    <View>
      <View style={styles.containerHeader}>
        {itens.map((element: ColumnProps, key: number) => {
          return (
            <Text
              numberOfLines={1}
              key={key}
              style={[styles.textHeader, { width: element.width }]}
            >
              {element.headerName}
            </Text>
          );
        })}
      </View>
      <Divider />
    </View>
  );
}
const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  textHeader: {
    color: "grey",
    flexDirection: "column",
    marginRight: 8,
  },
});
