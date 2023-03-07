<template>
    <div class="holder h-screen w-full p-5 flex justify-center rounded-lg">
        <div class="img_holder m-3 bg-[#eee] p-5 h-[100px]">
            <img class=" w-[300px]" v-bind:src="$store.state.productInfo.thumbnail" alt="">
            <!-- <div class="h-[100px] w-[300px] flex m-1 flex-wrap">
                <img class="h-[100px] w-[100px] m-2" :src="$store.state.productInfo">
            </div> -->
        </div>
        <div class="info_holder m-9 space-y-5">
            <h2 class="text-[3rem] font-bold">{{ $store.state.productInfo.title }}</h2>
            <p>{{ $store.state.productInfo.description }}</p>
            <p class="text-rose-700 font-bold">{{ $store.state.productInfo.price + '$' }}</p>
            <div class="flex">
                <h1 class=" font-bold">Brand:&nbsp</h1>
                <p>{{ $store.state.productInfo.brand }}</p>
            </div>
            <div class="flex">
                <h1 class=" font-bold">Category:&nbsp</h1>
                <p>{{ $store.state.productInfo.category }}</p>
            </div>
            <button class="w-full mt-2 bg-red-500 text-white p-2 round-lg" @click="addwl">Add To Which List</button>
            <p v-if="open == true" class="">Product Added Succefuly</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        addwl() {
            localStorage.wProducts.push(this.$store.state.productInfo);
		this.$router.push('/');
        },
data() {
	return {
	open: false,	
}
}
    }
}
</script>
