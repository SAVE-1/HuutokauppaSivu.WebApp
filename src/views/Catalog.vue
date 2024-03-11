<template>
    <h1>ITEM CATALOG</h1>
    <button @click="getItems">Get items</button>
    <div class="item center" v-for="item in items" :key="item.id">
        <img class="itemPromotionImage" :src="`${publicPath}item-images/${ item.promotionImage }`">
        <p class="itemParagraph">Name: {{ item.name }}</p>
        <p class="itemParagraph">Price: {{ item.price }}</p>
        <p class="itemParagraph">Description: {{ item.description }}</p>
    </div>

</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            items: null,
            publicPath: process.env.BASE_URL
        }
    },
    methods: {
        async getItems() {
            this.posts = await axios.get('https://localhost:7266/MagicalItems/GetMagicalItems')
                .then((res) => {
                    // console.log(res.data);
                    this.items = res.data;
                    console.log(this.items);
                })
                .catch((err) => console.error(err));
        }
    }
}
</script>


<style>
.itemList {}

.item {
    border: 1px solid rgb(156, 160, 156);
    padding-bottom: 150px;
}

.item:not(:last-child) {
  margin-bottom: 4px;
}

.item:first-child {
  margin-top: 4px;
}

.itemPromotionImage {

}

.itemParagraph {
    text-align: left;
} 

.itemPromotionImage {
    width: 300px;
    height: 200px;
}

.center {
    margin: auto;
    width: 50%;
    padding: 10px;
}
</style>
