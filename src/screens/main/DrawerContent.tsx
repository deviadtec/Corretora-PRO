import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import * as React from "react";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AuthContext from "../../contexts/AuthContext";

const CustomDrawerContent = ({ navigation }: any) => {
  const { onLogout } = useContext(AuthContext);
  const goToStack = (stackName: any) => {
    navigation.navigate(stackName);
  };
  async function onLogoutApp() {
    await onLogout();
    goToStack("Auth");
    
  }
  return (
    <DrawerContentScrollView style={{ backgroundColor: "white" }}>
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="gavel" size={24} color={"black"} />}
        label="Relatório Estorno"
        onPress={() => goToStack("RelatorioEstornoComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => (
          <Icon name="chrome-reader-mode" size={24} color={"black"} />
        )}
        label="Produção Mensal"
        onPress={() => goToStack("RelatorioProducaoComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="work-off" size={24} color={"black"} />}
        label="Vendas Canceladas"
        onPress={() => goToStack("RelatorioVendasCanceladasComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="shopping-cart" size={24} color={"black"} />}
        label="Status Venda"
        onPress={() => goToStack("RelatorioStatusVendaComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => (
          <Icon name="format-list-bulleted" size={24} color={"black"} />
        )}
        label="Aniversariantes"
        onPress={() => goToStack("RelatorioAniversarianteComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="event-busy" size={24} color={"black"} />}
        label="Renovação"
        onPress={() => goToStack("RelatorioRenovacaoComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="trending-down" size={24} color={"black"} />}
        label="Comissões Corrretor"
        onPress={() => goToStack("RelatorioContaPagarComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="person" size={24} color={"black"} />}
        label="Clientes Analítico"
        onPress={() => goToStack("RelatorioClienteAnaliticoComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="face" size={24} color={"black"} />}
        label="Clientes Sintético"
        onPress={() => goToStack("RelatorioClienteSinteticoComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="trending-up" size={24} color={"black"} />}
        label="Contas a Receber"
        onPress={() => goToStack("RelatorioContaReceberComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="trending-flat" size={24} color={"black"} />}
        label="Balanço Mensal"
        onPress={() => goToStack("RelatorioBalancoMensalComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="credit-card" size={24} color={"black"} />}
        label="Agenciamentos"
        onPress={() => goToStack("RelatorioAgenciamentoComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="email" size={24} color={"black"} />}
        label="E-mails Enviados"
        onPress={() => goToStack("RelatorioRegistroEnvioEmailComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="account-balance" size={24} color={"black"} />}
        label="Vendas Débito Automático"
        onPress={() => goToStack("RelatorioVendaDebitoAutomaticoComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="local-atm" size={24} color={"black"} />}
        label="Relatório Caixa Interno"
        onPress={() => goToStack("RelatorioCaixaInternoComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="money-off" size={24} color={"black"} />}
        label="Cobrança"
        onPress={() => goToStack("RelatorioCobrancaComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="security" size={24} color={"black"} />}
        label="Relatório Termo LGPD"
        onPress={() => goToStack("RelatorioTermoAceiteLgpdComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="attach-money" size={24} color={"black"} />}
        label="Relatório Benefício"
        onPress={() => goToStack("RelatorioBeneficioComponent")}
      />
      <DrawerItem
        labelStyle={styles.item}
        icon={() => <Icon name="logout" size={24} color={"black"} />}
        label="Sair"
        onPress={() => onLogoutApp()}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  item: { color: "black" },
});

export default CustomDrawerContent;
