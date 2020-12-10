export type TodoItemModel = {
    id: number,
    text: string,
    completed: boolean,
}

export type StateModel = {
    loading: boolean,
    items: TodoItemModel[]
}

export const state: StateModel = {
    loading: false,
    items: []
}