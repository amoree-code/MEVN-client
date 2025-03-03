<script setup>
import { RouterLink } from "vue-router";
import { onMounted, inject } from "vue";
import useAxios from "../hooks/useAxios";
import Sponsene from "@/components/Sponsene.vue";

const axios = useAxios();
const products = inject("products");

const fetchProducts = async () => {
  try {
    const res = await axios.get("/products");
    products.products = res.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <section className="w-[100%] h-full px-5">
    <Sponsene />

    <main className="w-full h-full">
      <div
        className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <div
          v-for="product in products.products"
          :key="product._id"
          className="w-full h-[95%]"
        >
          <RouterLink
            :to="'/products/' + product._id"
            className="w-full h-full flex flex-col gap-2.5"
          >
            <div className="w-full h-[100%]">
              <img
                :src="product.img"
                alt="s"
                className="w-full h-full object-cover bg-cards p-2.5"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{{ product.title }}</h2>
              <p className="text-sm font-mono">price : {{ product.price }} $</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </main>
  </section>
</template>
