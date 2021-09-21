<template>

  <div id="nav">
      <router-link to= "/Calculater" class="router-links">Calculater</router-link>
      <router-link to= "/home" class="home-link">Click on me</router-link>
  </div>
  <router-view></router-view>
</template>


<script>
export default {
  
  name:'App',
}
</script>
<style>
.router-links{
  color:#ffffff;
  text-align: center;
  padding:0;
  margin-bottom: 30px;
  cursor:pointer;
  font-size: 50px;
}
h1{
  color: black;
  position: relative;
}
h3{
  position: relative;

}
.home-page{
  text-align: center;
}
.hint{
  background-color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  border: none;
}
.hint:active{
  background-color: black;
  color: white;
}
.Hint{
  color: #ffffff;
}
.home-link{
  color: crimson;
  position: relative;
  left: 600px;
}
</style>
