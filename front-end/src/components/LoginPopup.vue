<template>
  <div class="w-[42%] bg-[#363443] h-[80%] absolute z-[100] rounded-xl">
    <div class="close w-full absolute flex justify-end">
      <p class="text-white text-[20px] cursor-pointer font-medium m-4">X</p>
    </div>
    <form action="" class="m h-full flex flex-col justify-center items-center">
      <div class="lona flex items-center my-4">
        <div
          class="logo w-[55px] h-[55px] bg-[#0e8bff] rounded-xl flex items-center justify-center"
        >
          <h1 class="font-bold text-white text-[40px]">S</h1>
        </div>
        <h1 class="pl-4 font-bold text-white text-[24px]">Welcome</h1>
      </div>
      <input
        type="text"
        class="w-[50%] h-[40px] my-4 rounded-lg px-4"
        placeholder="Email or phone number"
      />
      <input
        type="password"
        class="w-[50%] h-[40px] my-4 rounded-lg px-4"
        placeholder="Password"
      />
      <button
        type="submit"
        class="p-4 w-[40%] bg-[#0e8bff] my-4 h-[45px] rounded-lg flex items-center justify-center text-white font-semibold mx-1"
      >
        Login
      </button>
      <p class="text-white cursor-pointer hover:underline">Forgot password?</p>
    </form>
  </div>
</template>
