<template>
  <div class="body h-screen w-full bg-slate-500 overflow-y-scroll">
    <div>
      <NavBar />
    </div>
    <div>
      <ProductsGrid />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ProductsGrid from "@/components/ProductsGrid.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    ProductsGrid,
  },
};
</script>
