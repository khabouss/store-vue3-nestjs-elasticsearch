<template>
  <div @click="redirect" class="content w-full h-full">
    <div class="img bg-[#fff] m-1">
      <img class="object-none h-48 w-96 rounded-lg" :src="p.thumbnail" />
    </div>
    <div class="title-des mt-1 w-full px-4 flex justify-start flex-col items-start overflow-hidden">
      <h1 class="font-semibold text-[18px] text-[#000]">
        {{ p.title }}
      </h1>

      <p
        class="desc mt-2 mb-5 text-[#000] text-center"
      >
        {{ p.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      p: this.product,
    };
  },
  methods:{
    redirect() {
      this.$store.commit('selectProduct', this.p);
      this.$router.push({path: '/product', query: {id: this.p.id}});
    },
  }
};
</script>
