<template>
  <div class="product bg-slate-500 w-full h-full">
    <div class="all w-full h-full flex justify-center px-20 mt-14 flex-wrap">
      <div
        v-for="p in products"
        :key="p.id"
        class="cart mx-2 my-2 w-[22%] cursor-pointer flex bg-[#363443] rounded-lg"
      >
        <div class="content w-full h-full">
          <div class="img bg-[#8d8d8d] m-2 rounded-lg">
            <img class="h-full w-full rounded-lg" :src="p.img" alt="" />
          </div>
          <div
            class="title-des mt-1 w-full px-4 flex justify-start flex-col items-start overflow-hidden"
          >
            <h1 class="font-semibold text-[18px] px-4 text-[#fff]">
              {{ p.title }}
            </h1>

            <p
              class="desc line-clamp-3 mt-2 mb-5 text-[#b2b2b2] font-light text-center"
            >
              {{ p.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "title",
          description: "description",
          img: "https://thumbs.dreamstime.com/b/bath-beauty-products-24145725.jpg",
        },
        {
          id: 1,
          title: "title",
          description: "description",
          img: "https://thumbs.dreamstime.com/b/bath-beauty-products-24145725.jpg",
        },
      ],
    };
  },
};
</script>
