import React from "react";

import { StyleSheet, View } from "react-native";
import { Divider, IconButton, Text } from "react-native-paper";

export function FooterTableComponent({
  pagination,
  page,
  size,
  alterPage,
}: any) {
  return (
    <View>
      <Divider />
      <View style={styles.footer}>
        <IconButton
          style={styles.btn}
          icon="arrow-back-ios"
          size={20}
          onPress={() => alterPage(-1)}
          color="gray"
        />
        <Text style={{ color: "gray" }}>
          {pagination.totalPages > 0
            ? pagination.totalPages == 1
              ? "Página 1 de 1"
              : "Página " + (page + 1) + " de " + pagination.totalPages
            : ""}
        </Text>
        <IconButton
          style={styles.btn}
          icon="arrow-forward-ios"
          size={20}
          onPress={() => alterPage(+1)}
          color="gray"
        />
        <Text style={{ color: "gray", marginRight: 20 }}>
          {"Itens por página: " + size}
        </Text>
        <Text style={{ color: "gray" }}>
          {"Total de: " + pagination.totalElements + " registro(s)"}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 10,
  },
  footer: {
    paddingVertical: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
});
