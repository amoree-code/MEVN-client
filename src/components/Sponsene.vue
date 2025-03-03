<script setup>
import { useRouter } from "vue-router";

const router = useRouter(); // جلب الـ router

const goBack = () => {
  router.back(); // يرجع المستخدم للصفحة السابقة
};
</script>

<template>
  <div class="flex items-start justify-start border-b border-green-500 py-1">
    <button @click="goBack" class="my-5">
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 0.6 0.6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.51 0.27H0.162l0.099 -0.099a0.03 0.03 0 1 0 -0.042 -0.042l-0.15 0.15a0.03 0.03 0 0 0 0 0.042l0.15 0.15a0.03 0.03 0 0 0 0.042 0 0.03 0.03 0 0 0 0 -0.042L0.162 0.33H0.51a0.03 0.03 0 1 0 0 -0.06"
          fill="green"
        />
      </svg>
    </button>
  </div>
</template>
