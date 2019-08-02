<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";


// 引入全局js包
import "./static/js/flexible.js";
export default {
  name: "app",
  components: {
    
  }
};
</script>

<style>
*{
  margin:0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #323232;
}
</style>
