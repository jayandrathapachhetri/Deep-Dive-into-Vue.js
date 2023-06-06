<template>
<AppHeader />
<h1>Home Page</h1>
</template>

<script>
import AppHeader from './AppHeader.vue';
export default {
    name: "HomePage",

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
