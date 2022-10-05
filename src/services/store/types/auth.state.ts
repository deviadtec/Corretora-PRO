import { AuthUser } from "../model/authUser";

export interface AuthState {
  waitingRequest: boolean;
  lastLogin: Date | null;
  user: AuthUser | null;
  token?: string;
  returnUrl?: string;
  menu: any[];
}

export const initialState: AuthState = {
  waitingRequest: false,
  lastLogin: null,
  user: null,
  menu: [],
};
