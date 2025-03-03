<script setup>
import { onMounted, inject } from "vue";
import { useRoute, RouterLink } from "vue-router";
import useAxios from "../hooks/useAxios";
import Sponsene from "@/components/Sponsene.vue";

const axios = useAxios();
const route = useRoute();
const product = inject("product");
const cart = inject("cart");
const jobId = route.params.id;

const SingleProduct = async () => {
  try {
    const res = await axios.get(`/products/${jobId}`);
    product.product = [res.data];
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  SingleProduct();
});

const addToCart = (product) => {
  // استرجاع السلة من localStorage أو إنشاء مصفوفة جديدة
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // التأكد أن cartItems مصفوفة
  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }

  // ✅ إضافة المنتج إلى المصفوفة (هذه الخطوة مفقودة في الكود السابق)
  cartItems.push(product);

  // حفظ التحديثات في localStorage
  localStorage.setItem("cart", JSON.stringify(cartItems));

  // ✅ تحديث `cart.cart` لتحديث Vue UI
  cart.cart = cartItems;

  console.log("تمت إضافة المنتج:", product);
  console.log("السلة الآن:", cart.cart);
};
</script>

<template>
  <section className="Category w-full h-[calc(100vh-80px)] px-5">
    <Sponsene />

    <div
      v-for="cate in product.product"
      :key="cate._id"
      className="w-full h-full flex-col md:flex-row flex"
    >
      <div className="md:w-[50%] h-full">
        <img :src="cate.img" alt="" className="w-full h-full object-contain " />
      </div>
      <div
        className="w-full md:w-[50%] h-full m-auto flex flex-col items-center justify-center gap-5 p-5"
      >
        <h2 className="text-3xl font-semibold">{{ cate.title }}</h2>
        <p className="text-xl font-mono">price : {{ cate.price }}$</p>
        <RouterLink to="/cart">
          <button
            @click="addToCart(cate)"
            className="text-white bg-black hover:bg-blue-700 duration-700 py-2 px-4 rounded-md"
          >
            Add to Cart
          </button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
