import { combineReducers } from "redux";
import { AuthReducer } from "./auth/auth.reducer";
import { FilterAtivoReducer } from "./filter-ativo/filterAtivo.reducer";
import { PaginationReducer } from "./notificacao/pagination.reducer";
import { StoreState } from "./types/store.state";

export const storeReducer = combineReducers<StoreState>({
  pagination: PaginationReducer,
  filterAtivo: FilterAtivoReducer,
  auth: AuthReducer,
});
