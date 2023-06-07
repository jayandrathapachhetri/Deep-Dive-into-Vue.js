<template>
    <AppHeader />
    <h1>Add Resturant Page</h1>
    </template>
    
    <script>
    import AppHeader from './AppHeader.vue';
    export default {
        name: "AddPage",
    
        components: {
            AppHeader
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
    