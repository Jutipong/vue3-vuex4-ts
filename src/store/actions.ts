import { ActionContext, ActionTree } from "vuex";
import { mutations, Mutations, MutationType } from "./mutations";
import { StateType, TodoItemModel } from './state';

export enum ActionType {
    GetTodoItem = 'GET_ITEMS',
    CreateItem = 'CREATE_ITEM'
}

// type ActionAugments = Omit<ActionContext<StateType, StateType>, 'commit'> & {
//     commit<K extends keyof Mutations>(
//         key: K,
//         payload: Parameters<Mutations[K]>[1]
//     ): ReturnType<Mutations[K]>
// }

type ActionAugments = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<StateType, StateType>, "commit">;

export type Actions = {
    [ActionType.GetTodoItem](context: ActionAugments): void;
    // [ActionType.CreateItem](context: ActionAugments): void;
    [ActionType.CreateItem](context: ActionAugments, payload: TodoItemModel): void;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const actions: ActionTree<StateType, StateType>
    & Actions = {
    async [ActionType.GetTodoItem]({ commit }) {
        commit(MutationType.SetLoading, true);
        await sleep(1000);
        commit(MutationType.SetLoading, false);
        commit(MutationType.SetItems, [{
            id: 1,
            text: 'Create Vue3 with Vuex4 go!',
            completed: false
        }]);
    },
    async [ActionType.CreateItem]({ commit }, todoItem: TodoItemModel) {
        commit(MutationType.SetLoading, true);
        commit(MutationType.CreateItem, todoItem)
        await sleep(500);
        commit(MutationType.SetLoading, false);
    }
}
