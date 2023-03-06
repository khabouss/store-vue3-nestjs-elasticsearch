<template>
  <div class="w-[42%] bg-[#363443] h-[80%] absolute z-[100] rounded-xl">
    <div class="close w-full absolute flex justify-end">
      <p class="text-white text-[20px] cursor-pointer font-medium m-4">X</p>
    </div>
    <div class="m h-full flex flex-col justify-center items-center">
      <div class="lona flex items-center my-4">
        <div class="logo w-[55px] h-[55px] bg-[#0e8bff] rounded-xl flex items-center justify-center">
          <h1 class="font-bold text-white text-[40px]">S</h1>
        </div>
        <h1 class="pl-4 font-bold text-white text-[24px]">Welcome</h1>
      </div>
      <input v-model="this.username" type="text" class="w-[50%] h-[40px] my-4 rounded-lg px-4"
        placeholder="username" />
      <input v-model="this.passwd" type="password" class="w-[50%] h-[40px] my-4 rounded-lg px-4" placeholder="Password" />
      <button @click="login" type="submit"
        class="p-4 w-[40%] bg-[#0e8bff] my-4 h-[45px] rounded-lg flex items-center justify-center text-white font-semibold mx-1">
        Login
      </button>
      <p v-if="this.error" class="text-red-500 cursor-pointer hover:underline">Incorrect Username or Password</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      passwd: '',
      error: false,
    }
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.passwd === 'admin') {
        localStorage.setItem('isAdmin', 'true');
        this.$store.commit('changeOpen', false)
        this.$store.commit('changeIsAdmin', true);
      }
      else
      {
        this.error = true;
      }
    },
  },
}
</script>
