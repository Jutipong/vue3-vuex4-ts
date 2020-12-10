import { MutationTree } from "vuex";
import { StateModel, TodoItemModel } from "./state";

//คือการ  set ค่าหรือ update ค่าที่อยู่ใน Store 
//หรือมองเป็น setter ก็ได้
export enum MutationType {
    CreateItem = 'CREATE_ITEM',
    SetItems = 'SET_ITEMS',
    CompleteItem = 'COMPLETE_ITEM',
    SetLoading = 'SET_LOADING'
}

export type Mutations = {
    [MutationType.CreateItem](stata: StateModel, item: TodoItemModel): void
    [MutationType.SetItems](state: StateModel, items: TodoItemModel[]): void
    [MutationType.CompleteItem](state: StateModel, item: Partial<TodoItemModel> & { id: number }): void
    [MutationType.SetLoading](state: StateModel, vulue: boolean): void
}

export const mutations: MutationTree<StateModel> & Mutations = {
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