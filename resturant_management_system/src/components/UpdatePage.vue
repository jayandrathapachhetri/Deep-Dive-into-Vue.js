<template>
    <div>
      <AppHeader />
      <h1>Update Restaurant Page</h1>
      <form class="update">
        <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name">
        <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address">
        <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact">
        <button type="button" @click="showAlertDialog">Update Restaurant</button>
      </form>
  
      <div v-if="showAlert" class="alert">
        <p>Are you sure you want to update the restaurant information?</p>
        <div class="button-group">
          <button @click="keepChanges">Keep Changes</button>
          <button @click="cancelUpdate">Cancel</button>
        </div>
      </div>
    </div>
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
        },
        showAlert: false
      };
    },
  
    methods: {
      showAlertDialog() {
        this.showAlert = true;
      },
  
      async updateRestaurant() {
        const result = await axios.put("http://localhost:3000/restaurant/" + this.$route.params.id, {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact
        });
        if (result.status === 200) {
          this.$router.push({ name: 'HomePage' });
        }
      },
  
      keepChanges() {
        this.updateRestaurant();
        this.showAlert = false;
      },
  
      cancelUpdate() {
        this.showAlert = false;
      }
    },
  
    async mounted() {
      let user = localStorage.getItem("user-info");
      if (!user) {
        this.$router.push({ name: 'SignUp' });
      }
      let result = await axios.get("http://localhost:3000/restaurant/" + this.$route.params.id);
      this.restaurant = result.data;
    }
  };
  </script>
  