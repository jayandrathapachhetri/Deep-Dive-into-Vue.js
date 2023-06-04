<template>
<img class="logo" src="../assets/resto-logo.png" />
<h1>Sign Up</h1>
<div class="register">
    <input type="text" placeholder="Enter Name">
    <input type="text" placeholder="Enter Email">
    <input type="password" placeholder="Enter Password">
    <button type="submit">Sign Up</button>
</div>
</template>

<script>
export default {
    name: "SignUp",
}
</script>

<style>
.logo {
    width: 100px
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}

.register button {
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

h1{
  text-align: center;
}
</style>
