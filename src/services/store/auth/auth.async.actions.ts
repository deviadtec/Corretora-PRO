import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { AuthUser } from "../model/authUser";
import { StoreState } from "../types";
import { AuthActions } from "./auth.reducer";

type AsyncAuthAction<R = unknown> = ThunkAction<R, StoreState, void, AnyAction>;

const onReceivedUser =
  (user: AuthUser, token: string): AsyncAuthAction =>
  async (dispatch, _) => {
    dispatch(AuthActions.onReceivedUser(user, token));
  };

const AuthAsyncActions = {
  onReceivedUser,
};
export { AuthAsyncActions };
