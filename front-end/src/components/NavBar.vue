<script>
import LoginPopup from "./LoginPopup.vue";
import axios from 'axios'
import download from 'downloadjs'

export default {
  data() {
    return {
      query: '',
    };
  },
  components: {
    LoginPopup,
  },
  mounted() {
    if (localStorage.isAdmin === 'true') {
      this.$store.commit('changeIsAdmin', true);
    }
  },
  methods: {
    search() {
      this.$router.push({ path: '/', query: { query: this.query } })
    },
    exportFile() {
      axios
        .post("http://localhost:3000/products/getall", {})
        .then((response) => {
          download(JSON.stringify(response.data.results, null, 2), "products.json", "text/plain");
        });
    },
    redirect() {
      this.$router.push('/add-product');
    },
    logout() {
      localStorage.setItem('isAdmin', 'false');
      this.$store.commit('changeIsAdmin', false);
      this.$router.push('/');
    },
    homeBtnClick() {
      this.$router.push('/');
    }
  },
};
</script>

<template>
  <div v-if="$store.state.open == true" class="pop flex justify-center items-center absolute w-full h-full">
    <div @click="$store.commit('changeOpen', false)" class="overlay z-[99] w-full h-full bg-[#000000] bg-opacity-90">
    </div>
    <LoginPopup />
  </div>
  <div class="nav w-full h-[7vh] bg-[#708090] shadow-[#0000005d] shadow-lg">
    <div class="logoinputs container mx-auto px-4 flex items-center h-full justify-between">
      <div class="loginn flex items-center">
        <div class="logo w-[30px] h-[30px] bg-[#0e8bff] rounded-xl flex items-center justify-center">
          <button @click="homeBtnClick" class="font-bold text-white text-[20px]">S</button>
        </div>
        <div class="searchbar px-60 rounded-lg items-center flex">
          <div class="s w-[350px] h-[30px] bg-white rounded-lg">
            <input v-model="this.query" class="w-full h-full rounded-lg px-4 text-sm" placeholder=" Search" type="text" />
          </div>
          <button class="p-4 bg-[#0e8bff] h-[30px] rounded-lg flex items-center text-white font-semibold mx-1"
            @click="search">
            <img class="icon w-[20px] h-[20px]" src="search.svg" alt="" />
          </button>
        </div>
      </div>

      <div class="btn flex w-full">
        <button v-if="$store.state.isAdmin" @click="redirect"
          class=" h-[45px] w-full text-sm rounded-lg text-white font-semibold mx-1">
          Add Products
        </button>
        <button class="p-3 h-[45px] w-full text-sm rounded-lg text-white font-semibold mx-1" @click="exportFile">
          Export All
        </button>
        <button v-if="$store.state.isAdmin"
          class="p-3 h-[45px] rounded-lg w-full text-sm text-white font-semibold mx-1" @click="logout">
          Log out
        </button>
        <button v-if="!$store.state.isAdmin" @click="$store.commit('changeOpen', !$store.state.open)"
          class="p-3 mt-2 bg-[#0e8bff] h-[20px] text-sm rounded-lg flex items-center text-white font-semibold mx-1">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon {
  filter: invert(98%) sepia(98%) saturate(0%) hue-rotate(340deg) brightness(103%) contrast(102%);
}
</style>
