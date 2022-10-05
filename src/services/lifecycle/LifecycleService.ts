import { StoreState } from '@services/store/types';
import { Store } from 'redux';

/**
 * Service que responde ao ciclo de vida geral da aplicação
 */

/**
 * Redux Store da aplicação
 * esta referência permite que usemos dispatch/setState neste service
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let _store: Store<StoreState> | null = null;

/**
 * Executado quando o App foi montado
 * Pode ser usado para inicializar services globais
 */
export const onAppMounted = (store: Store<StoreState>) => {
  _store = store;
};

/**
 * Executado quando um login foi concluído
 *
 * Pode ser usado para inicializar services internos
 */
export const onDidLogIn = () => {
  // Não se usa mais um navigation service
};

/**
 * Executado quando um logout foi concluído
 *
 * Pode ser usado para cleanup de recursos
 */
export const onDigLogOut = () => {
  // Não se usa mais um navigation service
};
