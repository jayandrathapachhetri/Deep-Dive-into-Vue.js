<template>
<AppHeader />
<h1>Add Resturant Page</h1>
<form class="add">
    <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name">
    <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address">
    <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact">
    <button type="button" @click="addRestaurant">Add New Restaurant</button>
</form>
</template>

    
<script>
import AppHeader from './AppHeader.vue';
export default {
    name: "AddPage",

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
        addRestaurant(){
            console.warn(this.restaurant)
        }
    },


    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
    }
}
</script>
