<template>
    <div class="row g-2 alerts">{{ message }}</div>
</template>

  <script lang="js">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'Alert',
    props: {
      message: {
        type: String,
        required: true
      }
    }
  })
  </script>  

  <style>
    .alerts {
      background-color: #b9e7b9;
      width: 68%;
      height: 45px;
      text-align: center;
      color: #154120;
      border: 1px solid #4b8d5c;
      position: absolute;
      border-radius: 6px;
      padding-left: 25px;
      padding-top: 10px;
      top: 90px;
    }
  </style>