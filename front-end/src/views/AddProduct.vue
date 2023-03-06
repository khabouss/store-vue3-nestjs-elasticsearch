<template>
    <div class="form  bg-gray-200 m-[40px] ml-[200px] mr-[200px] rounded-lg p-6">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                Title
            </label>
            <input v-model="this.title"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title" type="text" placeholder="title">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="desc">
                Description
            </label>
            <input v-model="this.description"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="desc" type="text" placeholder="description">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
                Price
            </label>
            <input v-model="this.price"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price" type="text" placeholder="price">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="brand">
                Brand
            </label>
            <input v-model="this.brand"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="brand" type="text" placeholder="brand">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="category">
                Category
            </label>
            <input v-model="this.category"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="category" type="text" placeholder="category">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="img">
                Image link
            </label>
            <input v-model="this.image"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="img" type="url" placeholder="img">
        </div>
        <div class="flex items-center">
            <button @click="addNewProduct"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Add Product
            </button>
            <h1 v-if="this.error" class="text-red-700 ml-6">{{ this.errorMsg }}</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            title: '',
            description: '',
            price: '',
            brand: '',
            category: '',
            image: '',
            error: false,
            errorMsg: '',
        }
    },
    methods: {
        addNewProduct() {
            if (this.title == '' || this.description == '' || this.price == ''
                || this.brand == '' || this.category == '' || this.image == '') {
                this.error = true;
                this.errorMsg = 'All fields must not be empty!'
            }
	//	console.log(typeof this.price);
         //   if (typeof this.price !== "number") {
          //      this.error = true;
           //     this.errorMsg = 'Price should be a number'
           // }

            //var http = new XMLHttpRequest();
            //http.open('HEAD', image, false);

            let doc = {
                data: {
                    title: this.title,
                    description: this.description,
                    price: this.price,
                    brand: this.brand,
                    category: this.category,
                    thumbnail: this.image,
                }
            }
            console.log(doc);
            axios
                .post("http://localhost:3000/products/addpro", doc)
                .then((response) => {
                    console.log(response);
                    if (response === 'error') {
                        this.error = true;
                        this.errorMsg = `Error! Couldn't Add The Product'`;
                    }
                    else {
                        this.error = false;
                    }
                });
        }
    }
}
</script>
