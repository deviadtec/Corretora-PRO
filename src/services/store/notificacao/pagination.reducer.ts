import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from "immer-reducer";
import { PaginationState } from "../types/pagination.state";

const initialState: PaginationState = {
  waiting: false,
  page: 50,
};

class PaginationReducerClass extends ImmerReducer<PaginationState> {
  setWaiting(waiting: boolean) {
    this.draftState.waiting = waiting;
  }

  onRequestMorePage() {
    this.draftState.page += 1;
  }
}

export const PaginationActions = createActionCreators(PaginationReducerClass);
export const PaginationReducer = createReducerFunction(
  PaginationReducerClass,
  initialState
);
