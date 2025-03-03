<script setup>
import { RouterView } from "vue-router";
import { reactive, provide } from "vue";

const inital = reactive({
  userId: JSON.parse(localStorage.getItem("user")) || null,
  products: [],
  product: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
});

provide("userId", inital);
provide("products", inital);
provide("product", inital);
provide("cart", inital);
</script>

<template>
  <RouterView />
</template>
