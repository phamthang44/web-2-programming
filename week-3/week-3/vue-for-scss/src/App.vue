<script setup>
import { reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

// 1. Dùng reactive() để tạo một đối tượng có tính phản ứng
const form = reactive({
  name: "",
  // bạn có thể thêm các trường khác ở đây
  // email: ''
});

// Giờ đây, Vue sẽ theo dõi tất cả các thuộc tính trong 'form'.
</script>

<template>
  <h1 class="title">Hello Vue 3 + Vite + SCSS!</h1>
  <div>
    <input type="text" placeholder="Type something..." v-model="form.name" />
  </div>

  <p>Giá trị bạn đã nhập là: {{ form.name }}</p>

  <HelloWorld msg="Vite + Vue" />
</template>
