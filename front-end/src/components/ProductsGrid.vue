<template>
  <div class="product bg-white w-full h-[auto] ">
    <div class="all w-full h-full flex justify-center px-20 mt-14 flex-wrap">
      <div v-for="p in products" :key="p.id" class="cart mx-2 my-2 w-[20%] cursor-pointer border flex bg-[#fff] rounded-lg">
        <ItemCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ItemCard from "./ItemCard.vue";

export default {
  components: {
    ItemCard,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios
      .post("http://172.16.84.69:3000/products/getall", {})
      .then((response) => {
        this.products = response.data.results;
      });
  },
  watch: {
    '$route': function () {
      let urlQuery = this.$route.query.query;
      if (urlQuery && urlQuery != '') {
        let searchQuery = {
          data: {
            description: {
              query: urlQuery,
            },
          },
        };
        axios
          .post("http://172.16.84.69:3000/products/search", searchQuery)
          .then((response) => {
            this.products = response.data.results;
          });
      }
      else {
        axios
          .post("http://172.16.84.69:3000/products/getall", {})
          .then((response) => {
            this.products = response.data.results;
          });
      }
    }
  }
};
</script>
