import React from "react";

import { StyleSheet, View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { ColumnProps } from ".";

export function ItemTableComponent({
  index,
  item,
  columnProps,
  redirect,
}: any) {
  return (
    <View
      style={[
        styles.contentList,
        { backgroundColor: index % 2 > 0 ? "white" : "whitesmoke" },
      ]}
    >
      {columnProps.map((element: ColumnProps, key: number) => {
        if (element.columnName === "edit") {
          return (
            <IconButton
              key={key}
              icon="search"
              color="black"
              size={18}
              onPress={() => {
                redirect!(item);
              }}
            />
          );
        } else {
          const valueColumn = item[element.columnName];
          return (
            <Text
              numberOfLines={1}
              key={key}
              style={[
                styles.textColumn,
                {
                  width: element.width,
                  textAlign: element.align ? element.align : "left",
                  textAlignVertical: "center",
                },
              ]}
            >
              {valueColumn === null || valueColumn === undefined
                ? "NI"
                : element.format
                ? element.format(valueColumn)
                : valueColumn}
            </Text>
          );
        }
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  textColumn: {
    flexDirection: "column",
    marginRight: 8,
  },
  contentList: {
    flexDirection: "row",
    paddingVertical: 10,
  },
});
