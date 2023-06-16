import { defineStore } from 'pinia'
import moment from 'moment'

export const useAppStore = defineStore('app', {
  state: () => ({
    todos: [],
    id: 1,
    alert: {
      show: false,
      message: '',
    },
  }),
  getters: {
    getAlert(state) {
      return state.alert
    },
    getTodos(state) {
      return state.todos
    },
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === parseInt(id))
    },
  },
  actions: {
    showAlert(message) {
      this.alert.show = true
      this.alert.message = message

      setTimeout(() => {
        this.alert.show = false
      }, 3000)
    },
    createNewTodo(content) {
      const todo = {
        id: this.id,
        content: content,
        completed: false,
        created_at: this.getCurrentDate(),
      }

      this.todos.push(todo)
      this._incrementId()
    },
    updateTodo(id, content) {
      const todoIndex = this._findTodoIndexById(id)

      this.todos[todoIndex].content = content
    },
    deleteTodo(id) {
      const todoIndex = this._findTodoIndexById(id)

      this.todos.splice(todoIndex, 1)
    },
    _findTodoIndexById(id) {
      return this.todos.findIndex((todo) => todo.id === id)
    },
    _incrementId() {
      this.id++
    },
    getCurrentDate() {
      return moment().format('DD.MM.YYYY - HH:mm')
    },
  },
})