<template>
  <div class="body bg-white h-[93vh] w-full bg-slate-500 overflow-y-scroll">
    <ProductsGrid />
  </div>
</template>

<script>
import ProductsGrid from "@/components/ProductsGrid.vue";

export default {
  name: "HomeView",
  components: {
    ProductsGrid,
  }
};
</script>
