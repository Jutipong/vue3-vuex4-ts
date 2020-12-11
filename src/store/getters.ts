import { GetterTree } from "vuex";
import { StateType } from "./state";

//Event
//ทำหน้าที่ เช่น update => axiox แล้วได้ค่าใหม่กลับมา ค่อนส่งค่าไป update ผ่าน mutation
export type Getters = {
    completedCount(state: StateType): number
    totalCount(state: StateType): number
}

export const getters: GetterTree<StateType, StateType> & Getters = {
    completedCount(state) {
        return state.items.filter(r => r.completed).length;
    },
    totalCount(state) {
        return state.items.length;
    }
}