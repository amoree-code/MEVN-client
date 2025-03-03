<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section className="w-full h-[calc(100vh-80px)] p-5">
    <main
      className="w-full h-full  flex flex-col md:flex-row items-center justify-between bg-cards p-2.5 sm:p-5 md:p-10 lg:p-20"
    >
      <div className="flex flex-col justify-center items-start gap-5">
        <h2 className="text-4xl sm:text-6xl w-[90%] font-bold">
          Unleash innovation in Every Byte.
        </h2>
        <p className="text-2xl">Exploer World of Cutting-Edge Tech</p>
        <RouterLink
          to="/products"
          className=" bg-black text-white rounded-lg p-2.5"
        >
          Show More
        </RouterLink>
      </div>
      <div className="w-full h-full flex items-start justify-center">
        <img
          src="../assets/phone.png"
          alt=""
          className="w-[70%] h-[70%] md:w-[100%] md:h-[100%] object-contain rotate-12"
        />
      </div>
    </main>
  </section>
</template>
