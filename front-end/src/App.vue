<template>
  <NavBar/>
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  created() {
    let prods = [];
    localStorage.setItem('wProducts', JSON.stringify(prods));
  }
}
</script>

<style></style>
