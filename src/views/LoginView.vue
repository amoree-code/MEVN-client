<script setup>
import { RouterLink } from "vue-router";
import useAxios from "../hooks/useAxios";
import { reactive, inject } from "vue";

const axios = useAxios();
const state = reactive({
  email: "",
  password: "",
});

const user = inject("userId");
const LoginUser = async () => {
  try {
    const res = await axios.post("/auth/login", state);
    user.userId = res.data;
    localStorage.setItem("user", JSON.stringify(user.userId));
    alert("login successful");
    window.location.href = "/";
  } catch (error) {
    alert(error.message);
  }
};

const handleSubmit = () => {
  if (state.password.length < 8) {
    return alert("Password must be at least 8 characters long!");
  }

  if (state.email.length < 5) {
    return alert("Invalid email address!");
  }
  LoginUser();
};
</script>

<template>
  <section className="w-full h-full">
    <main className="w-full h-full flex items-center justify-center">
      <div className="md:w-[50%] h-screen">
        <img
          src="../assets/image-1.svg"
          alt=""
          className="w-full h-full object-cover hidden md:block"
        />
      </div>

      <form
        @submit.prevent="handleSubmit"
        className="w-full sm:w-[50%] h-full flex flex-col justify-start items-center"
      >
        <div
          className="w-full md:w-[50%] h-full m-auto flex flex-col items-start justify-start gap-5 p-5"
        >
          <h1 className="text-2xl font-semibold">Welcome</h1>
          <div
            className="w-full h-full flex flex-col items-start justify-start gap-2.5"
          >
            <label>Email : </label>
            <input
              type="text"
              className="w-full h-full border
            border-neutral-500 rounded-lg p-2.5"
              v-model="state.email"
            />
          </div>
          <div
            className="w-full h-full flex flex-col items-start justify-start gap-2.5"
          >
            <label>Password : </label>

            <input
              type="text"
              className="w-full h-full border
            border-neutral-500 rounded-lg p-2.5"
              v-model="state.password"
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 text-white font-semibold bg-black rounded-lg hover:bg-gray-700
             transition-all duration-300"
          >
            Login
          </button>
          <RouterLink to="/register">Create a new Account ?</RouterLink>
        </div>
      </form>
    </main>
  </section>
</template>
