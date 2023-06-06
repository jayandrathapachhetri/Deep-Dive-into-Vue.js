<template>
<!-- <SignUp/> -->
<router-view />
</template>

<script>
// import SignUp from './components/SignUp.vue';

export default {
    name: 'App',
}
</script>

<style>
.logo {
    width: 100px;

}

.register input,
.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}

.register button,
.login button {
    width: 320px;
    height: 40px;
    display: block;
    border: 1px solid skyblue;
    color: white;
    background: skyblue;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
}

h1,
p {
    text-align: center;
}
</style>
