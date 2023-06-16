<template>
  <form class="row g-2 pb-5" @submit.prevent="addTodo">
    <div class="addToDoForm">
      <input class="todoInput" type="text" v-model="newTodo">
      <button class="addToDoButton" type="submit">Hinzufügen</button>
    </div>
  </form>
</template>

<script lang="js">
import { defineComponent, ref } from 'vue'
import { useAppStore } from '../stores/store'

export default defineComponent({
  name: 'CreateTodo',
  setup(_, { emit }) {
    const newTodo = ref('')
    const store = useAppStore()

    const addTodo = () => {
      if (newTodo.value.trim() !== '') {
        store.createNewTodo(newTodo.value)
        newTodo.value = ''
        emit('todo-added', 'Todo hinzugefügt')
      }
    }

    return {
      newTodo,
      addTodo,
    }
  },
})
</script>

<style>
.addToDoForm {
  display: flex;
}

.todoInput {
  flex-grow: 1;
  border-radius: 6px;
  border: 1px solid #ddd;
  margin-right: 10px;
  margin-top: 75px;
}

.addToDoButton {
  background-color: #6491e4;
  padding: 5px;
  border: 1px solid #ddd;
  color: white;
  border-radius: 6px;
  margin-top: 75px;
}
</style>
In this updated code, the @todo-added event is emitted with the message 'Todo hinzugefügt' when a new todo is added successfully.

Please replace the code in your CreateTodo.vue file with the provided code, and the alert message should show correctly when a new todo is added.






