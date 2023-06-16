<template>
    <div>
        <button class="back-button" @click="goBack">←</button>
        <div class="todo-details-container">
            <div class="todo-details">
                <p>Erstellt am: {{ todo.created_at }}</p>
                <input class="todo-input" type="text" v-model="todo.content" />
                <div class="todo-buttons">
                    <button class="delete-button" @click="deleteTodo">X</button>
                    <button class="save-button" @click="saveTodo">✓</button>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, computed, ref, watch } from 'vue'
import { useAppStore } from '../stores/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'TodoDetails',
  setup() {
    const store = useAppStore()
    const editedTodo = ref('')
    const router = useRouter()

    const todoId = ref(router.currentRoute.value.params.id)

    const todo = computed(() => {
      return store.getTodoById(todoId.value)
    })

    const goBack = () => {
      router.go(-1)
    }

    const deleteTodo = () => {
      store.deleteTodo(todoId.value)
      goBack()
    }

    const saveTodo = () => {
      if (editedTodo.value.trim() !== '') {
        store.updateTodo(todoId.value, editedTodo.value)
        goBack()
      }
    }

    watch(
      () => router.currentRoute.value.params.id,
      (newId) => {
        todoId.value = newId
      }
    )

    return {
      todoId,
      todo,
      editedTodo,
      goBack,
      deleteTodo,
      saveTodo,
    }
  },
})
  </script>
  
  <style>
  .back-button{
    margin: 20px;
  }

  .todo-details-container {
    margin: 20px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }
  
  .back-button {
    background-color: #6491e4;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 22px;
    margin-bottom: 10px;
  }
  
  .todo-details {
    margin-bottom: 20px;
  }
  
.todo-details > p{
    float: right;
}

  .todo-input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .todo-buttons {
    display: flex;
    justify-content: flex-end;
  }
  
  .delete-button {
    background-color: #f44336;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    margin-right: 10px;
  }
  
  .save-button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
  }


  </style>