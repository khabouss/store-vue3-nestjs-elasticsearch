<script>
import LoginPopup from "./LoginPopup.vue";

export default {
  data() {
    return {
      open: false,
    };
  },
  components: {
    LoginPopup,
  },
};
</script>

<template>
  <div
    v-if="open == true"
    class="pop flex justify-center items-center absolute w-full h-full"
  >
    <div
      @click="open = false"
      class="overlay z-[99] w-full h-full bg-[#000000] bg-opacity-90"
    ></div>
    <LoginPopup />
  </div>
  <div class="nav w-full h-[70px] bg-[#1f1d2b] shadow-[#0000005d] shadow-lg">
    <div
      class="logoinputs container mx-auto px-4 flex items-center h-full justify-between"
    >
      <div class="loginn flex items-center">
        <div
          class="logo w-[55px] h-[55px] bg-[#0e8bff] rounded-xl flex items-center justify-center"
        >
          <h1 class="font-bold text-white text-[40px]">S</h1>
        </div>
        <div class="searchbar px-48 rounded-lg items-center flex">
          <div class="s w-[350px] h-[45px] bg-white rounded-lg">
            <input
              class="w-full h-full rounded-lg px-4"
              placeholder=" Search Now"
              type="text"
            />
          </div>
          <button
            class="p-4 bg-[#0e8bff] h-[45px] rounded-lg flex items-center text-white font-semibold mx-1"
          >
            <img class="icon w-[25px] h-[25px]" src="search.svg" alt="" />
          </button>
        </div>
      </div>

      <div class="btn flex">
        <button
          class="p-4 h-[45px] rounded-lg flex items-center text-white font-semibold mx-1"
        >
          Add Products
        </button>
        <button
          class="p-4 h-[45px] rounded-lg flex items-center text-white font-semibold mx-1"
        >
          Export
        </button>
        <button
          @click="open = !open"
          class="p-4 bg-[#0e8bff] h-[45px] rounded-lg flex items-center text-white font-semibold mx-1"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon {
  filter: invert(98%) sepia(98%) saturate(0%) hue-rotate(340deg)
    brightness(103%) contrast(102%);
}
</style>
