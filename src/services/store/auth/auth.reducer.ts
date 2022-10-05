import { LifecycleService } from "@services/lifecycle";
import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from "immer-reducer";
import { AuthUser } from "../model/authUser";
import { AuthState, initialState } from "../types/auth.state";

class AuthReducerClass extends ImmerReducer<AuthState> {
  onSetUser(user: AuthUser, token: string) {
    this.draftState.user = user;
    this.draftState.token = token;
  }
  onReceivedUser(user: AuthUser, token: string) {
    this.onSetUser(user, token);
    LifecycleService.onDidLogIn();
  }
}

export const AuthActions = createActionCreators(AuthReducerClass);
export const AuthReducer = createReducerFunction(
  AuthReducerClass,
  initialState
);
