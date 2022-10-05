import { AuthState } from "./auth.state";
import { FilterAtivoState } from "./filterAtivo.state";
import { PaginationState } from "./pagination.state";

export interface StoreState {
  pagination: PaginationState;
  filterAtivo: FilterAtivoState;
  auth: AuthState;
}
