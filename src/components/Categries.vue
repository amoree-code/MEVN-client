<script setup>
import { RouterLink } from "vue-router";

const items = [
  {
    id: 1,
    img: "../assets/phone.png",
    title: "Phones",
  },

  {
    id: 2,
    img: "../assets/Laptop.png",
    title: "Laptop",
  },

  {
    id: 3,
    img: "../assets/Ipad.png",
    title: "Ipads",
  },
  {
    id: 4,
    img: "../assets/earphone.png",
    title: "Accessories ",
  },
  {
    id: 5,
    img: "../assets/Tv.png",
    title: "TV & Home ",
  },
  {
    id: 6,
    img: "../assets/watch.png",
    title: "Watchs",
  },
];
</script>

<template>
  <section className="w-full h-full p-5">
    <div className="flex items-center justify-between pb-10">
      <h1 className="text-xl font-medium">Shop By Categries</h1>
      <RouterLink to="/products" className=" font-medium">
        Show All
      </RouterLink>
    </div>
    <div
      className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-2.5 "
    >
      <div
        v-for="item in items"
        :key="item.id"
        className="w-full h-full flex flex-col items-center justify-center bg-cards"
      >
        <img
          :src="item.img"
          alt="s"
          className="w-[220px] h-[220px] object-contain mt-2.5"
        />

        <RouterLink
          to="/products"
          className="w-[80%] m-auto mb-2.5 bg-white p-2.5 rounded-lg text-center text-1xl "
        >
          {{ item.title }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>
