<template>
    <div class="w-[42%] bg-[#fff] h-[80%] absolute z-[100] rounded-xl p-9">
        <div>
            <h1 class="header font-bold text-xl">Which List</h1>
        </div>
        <div class=" h-full flex flex-col p-5 overflow-auto">
            <div class="mb-4 border flex cursor-pointer" @click="itemClicked(p)" v-for="p in $store.state.wProducts">
                <img class="object-none h-[40px] w-[40px] rounded-lg m-2" :src="p.thumbnail" />
                <div>
                    <h1 class="font-bold">{{ p.title }}</h1>
                    <p>{{ p.description }}</p>
                </div>
                <!-- <button class="w-full text-right mr-5 text-red-500 font-bold" @click="removeItem()">X</button> -->
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
	itemClicked(p) {
		this.$router.push({path: '/product', query: {id: p.id}});
		this.$store.commit('wListVisibility', false);	
	}
    }
}
</script>
  
