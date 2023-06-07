<template>
<AppHeader />
<h1>Update Resturant Page</h1>
<form class="update">
    <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name">
    <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address">
    <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact">
    <button type="button" @click="updateRestaurant">Update Restaurant</button>
</form>
</template>

    
<script>
import axios from 'axios';
import AppHeader from './AppHeader.vue';
export default {
    name: "UpdatePage",

    components: {
        AppHeader
    },
    data() {
        return {
            restaurant: {
                name: "",
                address: "",
                contact: ""
            }
        }
    },
    methods: {
        async updateRestaurant(){
            // console.warn(this.restaurant)
            const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            if(result.status==200){
                this.$router.push({name:'HomePage'});
            }
            // console.warn("function called", this.restaurant)
        }
    },  

    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        let result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
        // console.warn(this.$route.params.id)
        // console.warn(result)
        this.restaurant = result.data;
    }
}
</script>
