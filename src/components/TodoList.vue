<template>
  <div v-if="loading">
    <h3 class="text-center mt-4">Loading...</h3>
  </div>
  <div v-else>
    <TodoItem v-for="item in items" :key="item.id" v-bind="item"></TodoItem>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";
//component
import TodoItem from "./TodoItem.vue";

export default defineComponent({
  components: {
    TodoItem,
  },
  setup() {
    const store = useStore();
    const items = computed(() => store.state.items);
    const loading = computed(() => store.state.loading);
    return { items, loading };
  },
});
</script>

<style scoped>
</style>