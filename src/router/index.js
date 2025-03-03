import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../stores/user";
import HomeView from "@/views/HomeView.vue";
import ProductView from "@/views/ProductsView.vue";
import CartView from "@/views/CartView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import CategroyView from "@/views/CategroyView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/products",
    component: ProductView,
    meta: { requiresAuth: true },
  },
  {
    path: "/products/:id",
    component: CategroyView,
    meta: { requiresAuth: true },
  },
  {
    path: "/cart",
    component: CartView,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/register",
    component: RegisterView,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.user) {
    next("/login");
  } else {
    next();
  }
});

export default router;
