import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from "immer-reducer";
import {
  Filter,
  FilterAtivoState,
  initialState,
} from "../types/filterAtivo.state";

class FilterAtivoReducerClass extends ImmerReducer<FilterAtivoState> {
  onAddFilterAtivo(newFilter: Filter) {
    const filtrosAtingo = this.draftState.filtros;
    const filtroOldIdx = filtrosAtingo.findIndex(
      (filtro) => filtro.chave === newFilter.chave
    );
    if (filtroOldIdx !== -1) {
      filtrosAtingo.splice(filtroOldIdx, 1);
    }
    filtrosAtingo.push(newFilter);
    this.draftState.filtros = filtrosAtingo;
  }

  async onAddFilterAtivoMonthYear(newFilter: Filter) {
    this.onRemoveFilter("dataInicio");
    this.onRemoveFilter("dataFim");
    this.onAddFilterAtivo(newFilter);
  }

  async onAddFilterAtivoDateSpecific(newFilter: Filter) {
    this.onRemoveFilter("meses");
    this.onRemoveFilter("ano");
    this.onAddFilterAtivo(newFilter);
  }

  onRemoveFilter(chave: string) {
    const filtrosAtingo = this.draftState.filtros;
    const filtroOldIdx = filtrosAtingo.findIndex(
      (filtro) => filtro.chave === chave
    );
    if (filtroOldIdx !== -1) {
      filtrosAtingo.splice(filtroOldIdx, 1);
    }
    this.draftState.filtros = filtrosAtingo;
  }
}

export const FilterAtivoActions = createActionCreators(FilterAtivoReducerClass);
export const FilterAtivoReducer = createReducerFunction(
  FilterAtivoReducerClass,
  initialState
);
