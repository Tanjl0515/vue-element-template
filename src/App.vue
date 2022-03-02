<!--
 * @Author: King
 * @Date: 2022-03-02 19:31:41
 * @LastEditTime: 2022-03-02 22:24:13
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: \vue-element-template\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: inherit;
  height: inherit;
}
</style>
