<template>
  <div>
    <Alert v-if="showAlert" :message="alertMessage" />
    <CreateTodo class="pt-5" @todo-added="showAlertMessage" />
    <ListTodos />
  </div>
</template>

<script lang="js">
import { defineComponent, ref } from 'vue'
import ListTodos from "../components/ListTodos.vue";
import Alert from "../components/Alert.vue";
import CreateTodo from "../components/CreateTodo.vue";

export default defineComponent({
  name: 'Todos',
  components: { CreateTodo, ListTodos, Alert },
  setup() {
    const alertMessage = ref('')
    const showAlert = ref(false)

    const showAlertMessage = (message) => {
      alertMessage.value = message
      showAlert.value = true
      setTimeout(() => {
        showAlert.value = false
      }, 3000)
    }

    return {
      alertMessage,
      showAlert,
      showAlertMessage
    }
  },
})
</script>