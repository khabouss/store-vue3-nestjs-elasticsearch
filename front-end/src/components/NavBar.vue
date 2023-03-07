<script>
import LoginPopup from "./LoginPopup.vue";
import axios from 'axios'
import download from 'downloadjs'
import CardPopup from "./CardPopup.vue";

export default {
  data() {
    return {
      query: '',
      wList: false
    };
  },
  components: {
    LoginPopup,
    CardPopup
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
  <div v-show="wList == true" class="pop flex justify-center items-center absolute w-full h-full">
    <div @click="wList = false" class="overlay z-[99] w-full h-full bg-[#000000] bg-opacity-90">
    </div>
    <CardPopup />
  </div>
  <div class="nav w-full h-[40px] bg-[#1c2840] shadow-[#0000005d] shadow-lg ">

    <div class="logoinputs w-full px-4 flex items-center h-full">

      <div class="loginn flex w-[70%]">
        <div class="logo w-[40px] h-[30px] bg-[#0e8bff] rounded-xl flex items-center justify-center">
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

      <div class="btn flex space-x-[-50px] w-[40%]">
        <button v-if="$store.state.isAdmin" @click="redirect"
          class=" h-[45px] w-full text-sm rounded-lg text-white font-semibold">
          Add Products
        </button>
        <button class=" h-[45px] w-full text-sm rounded-lg text-white font-semibold" @click="exportFile">
          Export All
        </button>
        <button @click="wList = true" v-if="$store.state.isAdmin" class=" h-[45px] rounded-lg w-full text-sm text-white font-semibold">
          Which List
        </button>
        <button v-if="$store.state.isAdmin" class=" h-[45px] rounded-lg w-full text-sm text-white font-semibold"
          @click="logout">
          Log out
        </button>
        <button v-if="!$store.state.isAdmin" @click="$store.commit('changeOpen', !$store.state.open)"
          class="mt-2 p-3 bg-[#0e8bff] h-[20px] text-sm rounded-lg flex items-center text-white font-semibold">
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
