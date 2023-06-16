<style>
  .todos-list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .todo-item {
    border: 1px solid #ddd;
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.5);
    background-color: white;
    height: 45px;
    margin-top: 3px;
  }

  .todo-content{
    margin-top: 10px;
    margin-left: 10px;
    float: left;
  }

  .todo-datetime{
    margin-top: 10px;
    margin-right: 10px;
    float: right;
  }

</style>

<template>
  <div class="todos-list">
    <router-link v-for="todo in todos" :key="todo.id" :to="`/${todo.id}`" class="text-decoration-none text-dark">
      <div class="todo-item">
        <div class="todo-content">{{ todo.content }}</div>
        <div class="todo-datetime">{{ todo.created_at }}</div>
      </div>
    </router-link>
  </div>
</template>

<script lang="js">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '../stores/store'

export default defineComponent({
  name: 'ListTodos',
  setup() {
    const store = useAppStore()

    const todos = computed(() => {
      return store.getTodos
    })

    return {
      todos,
    }
  },
})
</script>