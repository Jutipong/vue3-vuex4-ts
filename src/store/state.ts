export type TodoItemModel = {
    id: number,
    text: string,
    completed: boolean,
}

export type StateType = {
    loading: boolean,
    items: TodoItemModel[]
}

export const state: StateType = {
    loading: false,
    items: []
}