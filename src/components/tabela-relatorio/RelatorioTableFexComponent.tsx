import { RelatorioTableFlex } from "@components/tabela-relatorio";
import { RelatorioService } from "@services/relatorio-conta-pagar-corretor";
import { useAppSelector } from "@services/store/hooks";
import { StoreState } from "@services/store/types";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
import { FooterTableComponent } from "./FooterTableComponent";
import { HeaderTableComponent } from "./HeaderTableComponent";
import { ItemTableComponent } from "./ItemTableComponent";

const filterAtivoSelector = (store: StoreState) => store.filterAtivo;

export function RelatorioTableFexComponent<T>({
  columnProps,
  tipoRelatorio,
  sortOrder,
  sortKey,
  redirect,
}: RelatorioTableFlex) {
  const initialPagination = {
    totalElements: 0,
    totalPages: 0,
  };
  const [data, setData] = useState<T[]>([]);
  const [size] = useState(10);
  const [page, setPage] = useState(0);
  const [pagination, setPagination] = useState(initialPagination);
  const filterAtivo = useAppSelector(filterAtivoSelector);

  const alterPage = (count: number) => {
    const nextPage = page + count;
    if (
      (data.length > 0 && nextPage >= pagination.totalPages) ||
      nextPage < 0
    ) {
      return;
    }
    getData(nextPage);
  };

  useEffect(() => {
    getData(0);
  }, [filterAtivo]);

  const getData = async (nextPage: number) => {
    const result = await RelatorioService.getAll(
      nextPage,
      tipoRelatorio,
      size,
      filterAtivo,
      sortOrder,
      sortKey
    );

    if (result && result.page.totalElements > 0) {
      setData(result.data as T[]);
      setPagination({
        totalElements: result.page.totalElements,
        totalPages: result.page.totalPages,
      });
      setPage(nextPage);
    } else {
      setData([]);
      setPagination(initialPagination);
    }
  };
  
  const renderItemSeparator = () => <Divider />;
  const renderHeader = () => <HeaderTableComponent itens={columnProps} />;
  const renderFooter = () => (
    <FooterTableComponent
      pagination={pagination}
      page={page}
      size={size}
      alterPage={(value: any) => alterPage(value)}
    />
  );
  const renderItem = ({ item, index }: any) => (
    <ItemTableComponent
      index={index}
      item={item}
      columnProps={columnProps}
      redirect={(value: any) => redirect!(value)}
    />
  );
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FlatList
        style={styles.containerList}
        scrollEnabled={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={renderItemSeparator}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerList: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    marginBottom: 10,
  },
});
