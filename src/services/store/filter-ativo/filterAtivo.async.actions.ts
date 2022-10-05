import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { StoreState } from "../types";
import { Filter } from "../types/filterAtivo.state";
import { FilterAtivoActions } from "./filterAtivo.reducer";

type AsyncFilterAtivoAction<R = unknown> = ThunkAction<
  R,
  StoreState,
  void,
  AnyAction
>;

const onAddFilterAtivo =
  (filtro: Filter): AsyncFilterAtivoAction =>
  async (dispatch) => {
    dispatch(FilterAtivoActions.onAddFilterAtivo(filtro));
  };

const onAddFilterAtivoMonthYear =
  (filtro: Filter): AsyncFilterAtivoAction =>
  async (dispatch) => {
    dispatch(FilterAtivoActions.onAddFilterAtivoMonthYear(filtro));
  };

const onAddFilterAtivoDateSpecific =
  (filtro: Filter): AsyncFilterAtivoAction =>
  async (dispatch) => {
    dispatch(FilterAtivoActions.onAddFilterAtivoDateSpecific(filtro));
  };

const onRemoveFilter =
  (filtro: string): AsyncFilterAtivoAction =>
  async (dispatch) => {
    dispatch(FilterAtivoActions.onRemoveFilter(filtro));
  };

const FilterAtivoAsyncActions = {
  onAddFilterAtivo,
  onAddFilterAtivoMonthYear,
  onAddFilterAtivoDateSpecific,
  onRemoveFilter,
};
export { FilterAtivoAsyncActions };
