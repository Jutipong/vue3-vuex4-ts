import { MutationTree } from "vuex";
import { StateType, TodoItemModel } from "./state";

//คือการ  set ค่าหรือ update ค่าที่อยู่ใน Store 
//หรือมองเป็น setter ก็ได้
export enum MutationType {
    CreateItem = 'CREATE_ITEM',
    SetItems = 'SET_ITEMS',
    CompleteItem = 'COMPLETE_ITEM',
    SetLoading = 'SET_LOADING'
}

export type Mutations = {
    [MutationType.CreateItem](stata: StateType, item: TodoItemModel): void
    [MutationType.SetItems](state: StateType, items: TodoItemModel[]): void
    [MutationType.CompleteItem](state: StateType, item: Partial<TodoItemModel> & { id: number }): void
    [MutationType.SetLoading](state: StateType, vulue: boolean): void
}

export const mutations: MutationTree<StateType> & Mutations = {
    [MutationType.CreateItem](state, item) {
        state.items.unshift(item);
    },
    [MutationType.SetItems](state, items) {
        state.items = items;
    },
    [MutationType.CompleteItem](state, newItem) {
        const item = state.items.findIndex(r => r.id === newItem.id);
        if (item === -1) return;
        state.items[item] = { ...state.items[item], ...newItem }
    },
    [MutationType.SetLoading](state, value) {
        state.loading = value;
    }
} 