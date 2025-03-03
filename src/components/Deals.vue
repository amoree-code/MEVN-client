<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section className="w-full h-full p-5">
    <div
      className="w-full h-full flex lg:flex-row flex-col items-center justify-between pt-10 gap-20 "
    >
      <div
        className="w-full h-full flex flex-col items-start justify-start gap-10"
      >
        <h1 className="text-4xl font-medium">Deals the Month</h1>
        <br />
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget
        </p>
        <RouterLink
          to="/products"
          className="p-2.5 bg-black text-white rounded-lg "
        >
          View Products
        </RouterLink>
      </div>
      <div className="w-full h-full">
        <img
          src="../assets/image-4.svg"
          alt=""
          className="w-full h-full  lg:h-96 "
        />
      </div>
    </div>
    <div className="w-full h-full">
      <div
        className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 items-center justify-between py-20 "
      >
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-2.5 p-5 bg-cards rounded-lg"
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Free Shoping</h1>
            <span className="text-lg">Free Shoping Of order about $150</span>
          </div>
        </div>
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-2.5 p-5 bg-cards rounded-lg"
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Money Guaranteen</h1>
            <span className="text-lg">whith 30 days for on exchange</span>
          </div>
        </div>
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-2.5 p-5 bg-cards rounded-lg"
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Online support</h1>
            <span className="text-lg">24 hours a days, 7 days a week </span>
          </div>
        </div>
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-2.5 p-5 bg-cards rounded-lg"
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Flexible Payment</h1>
            <span className="text-lg">Paly with mobile cards</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
