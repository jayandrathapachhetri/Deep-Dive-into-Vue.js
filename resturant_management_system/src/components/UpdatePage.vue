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
