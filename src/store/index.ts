import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  createLogger
} from "vuex";

import { StateModel, state } from "./state";
import { Mutations, mutations } from "./mutations";
import { Actions, actions } from "./actions";
import { Getters, getters } from "./getters";

export const store = createStore<StateModel>({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state,
  mutations,
  actions,
  getters
});

export function useStore() {
  return store as Store
}

export type Store = Omit<VuexStore<StateModel>,
  'getters' | 'commit' | 'dispatch'>
  & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
      key: K,
      payload: P,
      options?: CommitOptions
    ): ReturnType<Mutations[K]>
  } & {
    dispatch<K extends keyof Actions>(
      key: K,
      payload?: Parameters<Actions[K]>[1],
      options?: DispatchOptions
    ): ReturnType<Actions[K]>
  } & {
    getters: {
      [K in keyof Getters]: ReturnType<Getters[K]>
    }
  }