import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from './store.state';
import { AnyAction } from 'redux';

export * from './store.state';

export type Dispatch<T extends AnyAction = AnyAction> = ThunkDispatch<
  StoreState,
  void,
  T
>;
