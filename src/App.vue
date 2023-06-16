<template>

  <div class="d-flex flex-column min-vh-100">

    <Header />

    <main class="container">
      <RouterView />
    </main>

  </div>

</template>

<script lang="js">
  import { defineComponent } from 'vue'
  import Header from "./components/layouts/Header.vue";

  export default defineComponent({
    name: 'App',
    components: {Header},
    setup() {
      //
    },
  })
</script>
