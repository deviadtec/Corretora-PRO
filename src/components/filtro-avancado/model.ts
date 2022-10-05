export interface FilterItem {
  label: string;
  value: any;
}

export const tipoPagamentoFilterData: FilterItem[] = [
  { label: "PAGAMENTO", value: "PAGAMENTO" },
  { label: "ESTORNO", value: "ESTORNO" },
  { label: "ESTORNO_CANCELADO", value: "ESTORNO_CANCELADO" },
];

export const statusFilterData: FilterItem[] = [
  { label: "AGENDADO", value: "AGENDADO" },
  { label: "PAGO", value: "PAGO" },
  { label: "ESTORNADO", value: "ESTORNADO" },
];

export const fluxoCaixaFilterData: FilterItem[] = [
  { label: "SIM", value: true },
  { label: "NÃO", value: false },
];

export const statusProdutoVendaFilterData: FilterItem[] = [
  { label: "ANALISE", value: "ANALISE" },
  { label: "PENDÊNCIA", value: "PENDENCIA" },
  { label: "APROVADO", value: "APROVADO" },
  { label: "REPROVADO", value: "REPROVADO" },
  { label: "CANCELADO", value: "CANCELADO" },
  { label: "FINALIZADO", value: "FINALIZADO" },
];

export const statusClienteFilterData: FilterItem[] = [
  { label: "ATIVO", value: "ATIVO" },
  { label: "INATIVO", value: "INATIVO" },
  { label: "INADIMPLENTE", value: "INADIMPLENTE" },
];

export const tipoPessoaFilterData: FilterItem[] = [
  { label: "FÍSICA", value: true },
  { label: "JURÍDICA", value: false },
];

export const MONTHS = [
  { label: "Janeiro", value: "1" },
  { label: "Fevereiro", value: "2" },
  { label: "Março", value: "3" },
  { label: "Abril", value: "4" },
  { label: "Maio", value: "5" },
  { label: "Junho", value: "6" },
  { label: "Julho", value: "7" },
  { label: "Agosto", value: "8" },
  { label: "Setembro", value: "9" },
  { label: "Outubro", value: "10" },
  { label: "Novembro", value: "11" },
  { label: "Dezembro", value: "12" },
];

export const sexoFilterData: FilterItem[] = [
  { label: "FEMININO", value: "FEMININO" },
  { label: "MASCULINO", value: "MASCULINO" },
  { label: "OUTRO", value: "OUTRO" },
];
