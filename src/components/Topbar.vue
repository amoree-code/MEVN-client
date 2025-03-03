<script setup>
import { RouterLink } from "vue-router";
import { inject } from "vue";

const user = inject("userId");
const logout = () => {
  localStorage.removeItem("user");
  window.location.replace("/login");
};
</script>

<template>
  <section className="w-full h-20 px-5">
    <main
      className="w-full h-full flex justify-end sm:justify-between items-center"
    >
      <h1 className="text-lg sm:block hidden ms:text-2xl font-semibold">
        Tech Haven.
      </h1>
      <div className="flex items-center justify-center gap-5 cursor-pointer">
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <RouterLink to="/products">Shop</RouterLink>
        <!-- <RouterLink to="/cart">
          <img src="../assets/cart.svg" alt="" />
        </RouterLink> -->

        <button @click="logout" v-if="user.userId">Logout</button>
        <RouterLink to="/login" v-else>Login</RouterLink>
      </div>
    </main>
  </section>
</template>
