<script setup>
import { reactive, inject } from "vue";
import { RouterLink } from "vue-router";
import useAxios from "../hooks/useAxios";

const axios = useAxios();
const state = reactive({
  username: "",
  email: "",
  password: "",
});
const user = inject("userId");

const RegisterUser = async () => {
  try {
    const res = await axios.post("/auth/register", state);
    user.userId = res.data;
    localStorage.setItem("user", JSON.stringify(user.userId));
    alert("User registered successfully!");
  } catch (error) {
    alert(error.response.data);
  }
};

const handleSubmit = () => {
  if (state.password.length < 8) {
    return alert("Password must be at least 8 characters long!");
  }

  if (state.username.length < 3) {
    return alert(
      "Username must be at least 3 characters long and contain only letters!"
    );
  }

  if (state.email.length < 5) {
    return alert("Invalid email address!");
  }
  RegisterUser();
};
</script>

<template>
  <section className="w-full h-full">
    <main className="w-full h-full flex items-center justify-center">
      <div className="md:w-[50%] h-screen ">
        <img
          src="../assets/image-2.svg"
          alt=""
          className="w-full h-full object-cover hidden md:block"
        />
      </div>
      <div
        className="w-full sm:w-[50%] h-full flex flex-col justify-start items-center"
      >
        <form
          @submit.prevent="handleSubmit"
          className="w-full md:w-[50%] h-full m-auto flex flex-col items-start justify-start gap-5 p-5"
        >
          <h1 className="text-xl lg:text-2xl font-semibold">Create Account</h1>
          <div
            className="w-full h-full flex flex-col items-start justify-start gap-2.5"
          >
            <label>Full Name : </label>
            <input
              type="text"
              className="w-full h-full border border-neutral-500 rounded-lg p-2.5"
              v-model="state.username"
              required
            />
          </div>
          <div
            className="w-full h-full flex flex-col items-start justify-start gap-2.5"
          >
            <label>Email Address : </label>
            <input
              type="email"
              className="w-full h-full border border-neutral-500 rounded-lg p-2.5"
              v-model="state.email"
              required
            />
          </div>
          <div className="w-full h-full flex flex-col">
            <label>Password : </label>
            <input
              type="text"
              className="w-full h-full border border-neutral-500 rounded-lg p-2.5"
              v-model="state.password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 text-white font-semibold bg-black rounded-lg hover:bg-gray-700
             transition-all duration-300"
          >
            Rregister
          </button>
          <RouterLink to="/login">I have Account</RouterLink>
        </form>
      </div>
    </main>
  </section>
</template>
