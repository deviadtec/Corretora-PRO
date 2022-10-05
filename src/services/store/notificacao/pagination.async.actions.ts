import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { StoreState } from "../types";
import { PaginationActions } from "./pagination.reducer";

type AsyncPaginationAction<R = unknown> = ThunkAction<
  R,
  StoreState,
  void,
  AnyAction
>;

const requestMorePage =
  (): AsyncPaginationAction => async (dispatch) => {
    dispatch(PaginationActions.onRequestMorePage());
  };

const PaginationAsyncActions = {
  requestMorePage,
};
export { PaginationAsyncActions };
