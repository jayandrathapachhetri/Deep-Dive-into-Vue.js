<template>
<AppHeader />
<h1>Hello {{name}}, Welcome to Home Page</h1>
</template>

<script>
import AppHeader from './AppHeader.vue';
export default {
    name: "HomePage",

    components: {
        AppHeader
    },

    data() {
        return {
            name: ''
        }
    },

    mounted() {
        let user = localStorage.getItem("user-info");
        this.name = JSON.parse(user).name
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
    }
}
</script>
