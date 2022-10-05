import React from "react";

import { StyleSheet, View } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

export function AutocompleteComponent({
  placeholder,
  dataSet,
  onChangeText,
  addFilterAtivo,
}: any) {
  return (
    <View>
      <Text style={styles.placeholder}>{placeholder}</Text>
      <AutocompleteDropdown
        onChangeText={(value) => onChangeText(value)}
        onSelectItem={(value) => {
          addFilterAtivo(value);
        }}
        dataSet={dataSet}
        ChevronIconComponent={<Icon name="arrow-drop-down" size={23} />}
        ClearIconComponent={<Icon name="close" size={18} />}
        suggestionsListContainerStyle={{
          backgroundColor: "white",
          width: 260,
          padding:10
        }}
        clearOnFocus={false}
        inputContainerStyle={styles.contentFilter}
        emptyResultText={"Não encontrado"}
        suggestionsListMaxHeight={38}
        renderItem={(value) => {
          return <Text style={{height:42, textAlignVertical:'center'}} numberOfLines={1}>{value.title}</Text>;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  placeholder: { color: "gray", paddingLeft: 10, fontSize: 12 },
  containnerFilter: { marginVertical: 5 },
  contentFilter: {
    backgroundColor: "white",
    borderRadius: 20,
    maxHeight: 42,
    justifyContent: "center",
  },
  container: { flexGrow: 1, flexShrink: 1 },
});
