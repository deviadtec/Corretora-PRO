import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { RelatorioAgenciamentoComponent } from "../consultas/relatorio-agenciamento/RelatorioAgenciamentoComponent";
import { RelatorioAniversarianteComponent } from "../consultas/relatorio-aniversariante/RelatorioAniversarianteComponent";
import { RelatorioBalancoMensalComponent } from "../consultas/relatorio-balanco-mensal/RelatorioBalancoMensalComponent";
import { RelatorioBeneficioComponent } from "../consultas/relatorio-beneficio/RelatorioBeneficioComponent";
import { RelatorioCaixaInternoComponent } from "../consultas/relatorio-caixa-interno/RelatorioCaixaInternoComponent";
import { RelatorioClienteAnaliticoComponent } from "../consultas/relatorio-cliente-analitico/RelatorioClienteAnaliticoComponent";
import { RelatorioClienteProdutoComponent } from "../consultas/relatorio-cliente-produto/RelatorioClienteProdutoComponent";
import { RelatorioClienteSinteticoComponent } from "../consultas/relatorio-cliente-sintetico/RelatorioClienteSinteticoComponent";
import { RelatorioCobrancaComponent } from "../consultas/relatorio-cobranca/RelatorioCobrancaComponent";
import { RelatorioContaPagarCorretorComponent } from "../consultas/relatorio-conta-pagar-corretor/RelatorioContaPagarCorretorComponent";
import { RelatorioContaPagarComponent } from "../consultas/relatorio-conta-pagar/RelatorioContaPagarComponent";
import { RelatorioContaReceberPagadorComponent } from "../consultas/relatorio-conta-receber-pagador/RelatorioContaReceberPagadorComponent";
import { RelatorioContaReceberComponent } from "../consultas/relatorio-conta-receber/RelatorioContaReceberComponent";
import { RelatorioEstornoComponent } from "../consultas/relatorio-estorno/RelatorioEstornoComponent";
import { RelatorioProducaoComponent } from "../consultas/relatorio-producao/RelatorioProducaoComponent";
import { RelatorioRegistroEnvioEmailComponent } from "../consultas/relatorio-registro-envio-email/RelatorioRegistroEnvioEmailComponent";
import { RelatorioRenovacaoComponent } from "../consultas/relatorio-renovacao/RelatorioRenovacaoComponent";
import { RelatorioStatusVendaComponent } from "../consultas/relatorio-status-venda/RelatorioStatusVendaComponent";
import { RelatorioTermoAceiteLgpdComponent } from "../consultas/relatorio-termo-aceite-lgpd/RelatorioTermoAceiteLgpdComponent";
import { RelatorioVendaDebitoAutomaticoComponent } from "../consultas/relatorio-venda-debito-automatico/RelatorioVendaDebitoAutomaticoComponent";
import { RelatorioVendasCanceladasComponent } from "../consultas/relatorio-vendas-canceladas/RelatorioVendasCanceladasComponent";
import CustomDrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();
export function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}
    >
      <Drawer.Screen
        name="RelatorioEstornoComponent"
        options={{ title: "Estornos Lançados" }}
        component={RelatorioEstornoComponent}
      />
      <Drawer.Screen
        name="RelatorioProducaoComponent"
        options={{ title: "Relatório de Produção Mensal" }}
        component={RelatorioProducaoComponent}
      />
      <Drawer.Screen
        name="RelatorioVendasCanceladasComponent"
        options={{ title: "Relatório de Vendas Canceladas" }}
        component={RelatorioVendasCanceladasComponent}
      />
      <Drawer.Screen
        name="RelatorioStatusVendaComponent"
        options={{ title: "Vendas por Status" }}
        component={RelatorioStatusVendaComponent}
      />
      <Drawer.Screen
        name="RelatorioAniversarianteComponent"
        options={{ title: "Listagem de" }}
        component={RelatorioAniversarianteComponent}
      />
      <Drawer.Screen
        name="RelatorioRenovacaoComponent"
        options={{ title: "Relatório Renovação" }}
        component={RelatorioRenovacaoComponent}
      />
      <Drawer.Screen
        name="RelatorioContaPagarComponent"
        options={{ title: "Comissoẽs Corretor" }}
        component={RelatorioContaPagarComponent}
      />
      <Drawer.Screen
        name="RelatorioContaPagarCorretorComponent"
        options={{ title: "Comissoẽs Corretor" }}
        component={RelatorioContaPagarCorretorComponent}
      />
      <Drawer.Screen
        name="RelatorioClienteAnaliticoComponent"
        options={{ title: "Listagem Analítica de Clientes" }}
        component={RelatorioClienteAnaliticoComponent}
      />
      <Drawer.Screen
        name="RelatorioClienteSinteticoComponent"
        options={{ title: "Listagem de Clientes" }}
        component={RelatorioClienteSinteticoComponent}
      />
      <Drawer.Screen
        name="RelatorioClienteProdutoComponent"
        options={{ title: "Listagem de Produtos do Cliente" }}
        component={RelatorioClienteProdutoComponent}
      />
      <Drawer.Screen
        name="RelatorioContaReceberComponent"
        options={{ title: "Relatório Conta Receber" }}
        component={RelatorioContaReceberComponent}
      />
      <Drawer.Screen
        name="RelatorioContaReceberPagadorComponent"
        options={{ title: "Relatório de Conta Receber" }}
        component={RelatorioContaReceberPagadorComponent}
      />
      <Drawer.Screen
        name="RelatorioBalancoMensalComponent"
        options={{ title: "Balanço Mensal" }}
        component={RelatorioBalancoMensalComponent}
      />
      <Drawer.Screen
        name="RelatorioAgenciamentoComponent"
        options={{ title: "Relatório Agenciamentos" }}
        component={RelatorioAgenciamentoComponent}
      />
      <Drawer.Screen
        name="RelatorioRegistroEnvioEmailComponent"
        options={{ title: "Listagem Registro Envio de Email" }}
        component={RelatorioRegistroEnvioEmailComponent}
      />
      <Drawer.Screen
        name="RelatorioVendaDebitoAutomaticoComponent"
        options={{ title: "Relatório Venda com Débito Automático" }}
        component={RelatorioVendaDebitoAutomaticoComponent}
      />
      <Drawer.Screen
        name="RelatorioCaixaInternoComponent"
        options={{ title: "Relatório de Caixa Interno" }}
        component={RelatorioCaixaInternoComponent}
      />
      <Drawer.Screen
        name="RelatorioCobrancaComponent"
        options={{ title: "Relatório de Cobrança" }}
        component={RelatorioCobrancaComponent}
      />
      <Drawer.Screen
        name="RelatorioTermoAceiteLgpdComponent"
        options={{ title: "Listagem Termo de Aceite LGPD" }}
        component={RelatorioTermoAceiteLgpdComponent}
      />
      <Drawer.Screen
        name="RelatorioBeneficioComponent"
        options={{ title: "Relatório de Benefício" }}
        component={RelatorioBeneficioComponent}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
