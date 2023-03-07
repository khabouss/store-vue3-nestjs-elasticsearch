<template>
    <div class="holder h-screen w-full p-5 flex justify-center rounded-lg">
        <div class="img_holder m-3 bg-[#eee] p-5 h-[100px]">
            <img class=" w-[50vh]" v-bind:src="this.product.thumbnail" alt="">
            <!-- <div class="h-[100px] w-[300px] flex m-1 flex-wrap">
                <img class="h-[100px] w-[100px] m-2" :src="this.product">
            </div> -->
        </div>
        <div class="info_holder m-9 space-y-5">
            <h2 class="text-[3rem] font-bold">{{ this.product.title }}</h2>
            <p>{{ this.product.description }}</p>
            <p class="text-rose-700 font-bold">{{ this.product.price + '$' }}</p>
            <div>
                <div class="flex">
                    <h1 class=" font-bold">Brand:&nbsp</h1>
                    <p>{{ this.product.brand }}</p>
                </div>
                <div class="flex">
                    <h1 class=" font-bold">Category:&nbsp</h1>
                    <p>{{ this.product.category }}</p>
                </div>
            </div>
            <button class="w-full mt-5 bg-red-500 text-white p-2 round-lg" @click="addwl">Add To Which List</button>
            <p v-if="this.open" class="text-green-500 w-full text-center">Product Added Succefuly</p>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
    data() {
        return {
            open: false,
            product: this.$store.state.productInfo,
        }
    },
    methods: {
        addwl() {
            this.$store.commit('addToWProducts', this.product);
            this.open = true;
		console.log(this.open);
        },
    },
    updated() {
        let route = useRoute();
        let query = route.query;
        if (query.id) {
		//console.log('q', query.id);
            let searchQuery = {
                data: {
                    id: {
                        query: query.id,
                    },
                },
            };
            axios
                .post("http://172.16.84.69:3000/products/search", searchQuery)
                .then((response) => {
                    this.$store.commit('selectProduct', response.data.results[0]);
		    this.product = response.data.results[0];
                });
        }
    }
}
</script>
