import React from "react";

import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialIcons";
export function CardIcon({ titulo, icon }: any) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Card style={styles.cardContainer}>
          <Card.Content style={{ justifyContent: "flex-end" }}>
            <Icon color={"#030E22"} name={icon} size={27} />
          </Card.Content>
        </Card>
        <Text style={styles.text}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  cardContainer: {
    height: 58,
    width: 58,
    backgroundColor: "#B9C3C4",
    borderRadius: 16,
  },
  text: { color: "white", fontWeight: "normal" },
});
