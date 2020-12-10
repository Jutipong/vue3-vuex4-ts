
<template>
  <div class="container mx-auto mt-4">
    <h1 class="text-3xl text-center p-2 font-bold">
      Vue 3 Todo App with Typescript and Vuex 4
    </h1>

    <!-- <div v-if="loading">
      <h3 class="text-center mt-4">Loading...</h3>
    </div> -->
    <div>
      <p class="text-center mt-2">
        {{ completedCount }} of {{ totalCount }} completed.
      </p>
      <NewItem />
      <TodoList />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, DefineComponent, onMounted } from "vue";
import { useStore } from "./store";
import { ActionType } from "./store/actions";
// vue component
import NewItem from "./components/NewItem.vue";
import TodoList from "./components/TodoList.vue";

export default defineComponent({
  name: "App",
  components: {
    NewItem,
    TodoList,
  },
  setup() {
    const store = useStore();

    const loading = computed(() => store.state.loading);
    onMounted(() => store.dispatch(ActionType.GetTodoItem));

    const completedCount = computed(() => store.getters.completedCount);
    const totalCount = computed(() => store.getters.totalCount);

    return {
      loading,
      completedCount,
      totalCount,
    };
  },
});
</script> 