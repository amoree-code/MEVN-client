<script setup>
import Sponsene from "@/components/Sponsene.vue";
import useAxios from "@/hooks/useAxios";
import { inject, onMounted, ref } from "vue";

const cart = inject("cart"); // استدعاء cart من inject
const cartItems = ref([]); // تخزين المنتجات المسترجعة

// ✅ استرجاع المنتجات من localStorage عند تحميل الصفحة
onMounted(() => {
  cartItems.value = JSON.parse(localStorage.getItem("cart")) || [];
  cart.cart = cartItems.value; // تحديث السلة داخل Vue
});

// ✅ حذف منتج من السلة
const removeFromCart = (index) => {
  cartItems.value.splice(index, 1); // حذف المنتج من القائمة
  localStorage.setItem("cart", JSON.stringify(cartItems.value)); // تحديث localStorage
  cart.cart = cartItems.value; // تحديث cart في Vue
};
</script>

<template>
  <section className="Cart px-5">
    <Sponsene />
    <main>
      <h1 className="text-3xl font-semibold my-10">Shopping Cart</h1>
      <div
        className="w-full h-full flex items-center justify-between my-10 gap-10"
      >
        <h2 class="text-2xl">Products</h2>
      </div>

      <div
        className="w-full h-full flex  flex-col items-center justify-between my-10 gap-10"
      >
        <div
          v-for="cart in cart.cart"
          :key="cart._id"
          className="w-full h-full flex flex-col md:flex-row items-center gap-10 "
        >
          <img
            :src="cart.img"
            alt="{item.name}"
            className="rounded-lg max-w-72"
          />
          <div className="flex flex-col items-center justify-center gap-2.5">
            <h1 className="text-2xl">{{ cart.title }}</h1>
            <span> price : {{ cart.price }}$</span>
            <img src="" alt="" className="cursor-pointer" />
            <button
              @click="removeFromCart(index)"
              class="text-white bg-red-600 hover:bg-red-800 px-2 py-2 rounded"
            >
              حذف
            </button>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>
